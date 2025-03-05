/*
  # Initial Schema Setup for OptimizeEV

  1. New Tables
    - `organizations`
      - Organization/company information
      - Stores company details and settings
    
    - `users`
      - User accounts with role-based access
      - Links to organizations
    
    - `charging_stations`
      - EV charging station information
      - Tracks status, location, and specifications
    
    - `maintenance_records`
      - Station maintenance history
      - Tracks repairs, inspections, and issues
    
    - `charging_sessions`
      - Active and historical charging sessions
      - Usage metrics and billing data
    
    - `alerts`
      - System alerts and notifications
      - Maintenance warnings and status updates

  2. Security
    - Enable RLS on all tables
    - Policies for organization-based access
    - Admin-specific policies
*/

-- Create organizations table
CREATE TABLE IF NOT EXISTS organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  address text,
  subscription_tier text DEFAULT 'basic',
  max_stations integer DEFAULT 25,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create users table with role-based access
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  organization_id uuid REFERENCES organizations,
  role text NOT NULL CHECK (role IN ('admin', 'manager', 'operator')),
  first_name text,
  last_name text,
  phone text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create charging stations table
CREATE TABLE IF NOT EXISTS charging_stations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations NOT NULL,
  name text NOT NULL,
  model text NOT NULL,
  serial_number text NOT NULL,
  location_name text NOT NULL,
  latitude numeric,
  longitude numeric,
  status text DEFAULT 'active' CHECK (status IN ('active', 'maintenance', 'offline', 'error')),
  last_maintenance timestamptz,
  next_maintenance timestamptz,
  power_output numeric NOT NULL,
  firmware_version text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create maintenance records table
CREATE TABLE IF NOT EXISTS maintenance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  station_id uuid REFERENCES charging_stations NOT NULL,
  performed_by uuid REFERENCES users,
  maintenance_type text NOT NULL CHECK (maintenance_type IN ('routine', 'repair', 'inspection', 'upgrade')),
  description text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  scheduled_date timestamptz,
  completed_date timestamptz,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create charging sessions table
CREATE TABLE IF NOT EXISTS charging_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  station_id uuid REFERENCES charging_stations NOT NULL,
  start_time timestamptz NOT NULL DEFAULT now(),
  end_time timestamptz,
  energy_delivered numeric DEFAULT 0,
  cost numeric DEFAULT 0,
  status text DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'interrupted', 'failed')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create alerts table
CREATE TABLE IF NOT EXISTS alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations NOT NULL,
  station_id uuid REFERENCES charging_stations,
  alert_type text NOT NULL CHECK (alert_type IN ('maintenance', 'error', 'warning', 'info')),
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  message text NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'acknowledged', 'resolved')),
  resolved_by uuid REFERENCES users,
  resolved_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE charging_stations ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE charging_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Create policies for organizations
CREATE POLICY "Users can view their own organization"
  ON organizations
  FOR SELECT
  TO authenticated
  USING (id IN (
    SELECT organization_id 
    FROM users 
    WHERE users.id = auth.uid()
  ));

-- Create policies for users
CREATE POLICY "Users can view members of their organization"
  ON users
  FOR SELECT
  TO authenticated
  USING (organization_id IN (
    SELECT organization_id 
    FROM users 
    WHERE users.id = auth.uid()
  ));

-- Create policies for charging stations
CREATE POLICY "Users can view their organization's stations"
  ON charging_stations
  FOR SELECT
  TO authenticated
  USING (organization_id IN (
    SELECT organization_id 
    FROM users 
    WHERE users.id = auth.uid()
  ));

-- Create policies for maintenance records
CREATE POLICY "Users can view their organization's maintenance records"
  ON maintenance_records
  FOR SELECT
  TO authenticated
  USING (station_id IN (
    SELECT id 
    FROM charging_stations 
    WHERE organization_id IN (
      SELECT organization_id 
      FROM users 
      WHERE users.id = auth.uid()
    )
  ));

-- Create policies for charging sessions
CREATE POLICY "Users can view their organization's charging sessions"
  ON charging_sessions
  FOR SELECT
  TO authenticated
  USING (station_id IN (
    SELECT id 
    FROM charging_stations 
    WHERE organization_id IN (
      SELECT organization_id 
      FROM users 
      WHERE users.id = auth.uid()
    )
  ));

-- Create policies for alerts
CREATE POLICY "Users can view their organization's alerts"
  ON alerts
  FOR SELECT
  TO authenticated
  USING (organization_id IN (
    SELECT organization_id 
    FROM users 
    WHERE users.id = auth.uid()
  ));

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_organization ON users(organization_id);
CREATE INDEX IF NOT EXISTS idx_stations_organization ON charging_stations(organization_id);
CREATE INDEX IF NOT EXISTS idx_alerts_organization ON alerts(organization_id);
CREATE INDEX IF NOT EXISTS idx_sessions_station ON charging_sessions(station_id);
CREATE INDEX IF NOT EXISTS idx_maintenance_station ON maintenance_records(station_id);