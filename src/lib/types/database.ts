export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          contact_email: string
          contact_phone: string | null
          address: string | null
          subscription_tier: string
          max_stations: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          contact_email: string
          contact_phone?: string | null
          address?: string | null
          subscription_tier?: string
          max_stations?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          contact_email?: string
          contact_phone?: string | null
          address?: string | null
          subscription_tier?: string
          max_stations?: number
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          organization_id: string | null
          role: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          organization_id?: string | null
          role: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string | null
          role?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      charging_stations: {
        Row: {
          id: string
          organization_id: string
          name: string
          model: string
          serial_number: string
          location_name: string
          latitude: number | null
          longitude: number | null
          status: string
          last_maintenance: string | null
          next_maintenance: string | null
          power_output: number
          firmware_version: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          model: string
          serial_number: string
          location_name: string
          latitude?: number | null
          longitude?: number | null
          status?: string
          last_maintenance?: string | null
          next_maintenance?: string | null
          power_output: number
          firmware_version?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          model?: string
          serial_number?: string
          location_name?: string
          latitude?: number | null
          longitude?: number | null
          status?: string
          last_maintenance?: string | null
          next_maintenance?: string | null
          power_output?: number
          firmware_version?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      maintenance_records: {
        Row: {
          id: string
          station_id: string
          performed_by: string | null
          maintenance_type: string
          description: string
          status: string
          scheduled_date: string | null
          completed_date: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          station_id: string
          performed_by?: string | null
          maintenance_type: string
          description: string
          status?: string
          scheduled_date?: string | null
          completed_date?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          station_id?: string
          performed_by?: string | null
          maintenance_type?: string
          description?: string
          status?: string
          scheduled_date?: string | null
          completed_date?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      charging_sessions: {
        Row: {
          id: string
          station_id: string
          start_time: string
          end_time: string | null
          energy_delivered: number
          cost: number
          status: string
          payment_status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          station_id: string
          start_time?: string
          end_time?: string | null
          energy_delivered?: number
          cost?: number
          status?: string
          payment_status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          station_id?: string
          start_time?: string
          end_time?: string | null
          energy_delivered?: number
          cost?: number
          status?: string
          payment_status?: string
          created_at?: string
          updated_at?: string
        }
      }
      alerts: {
        Row: {
          id: string
          organization_id: string
          station_id: string | null
          alert_type: string
          severity: string
          message: string
          status: string
          resolved_by: string | null
          resolved_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          station_id?: string | null
          alert_type: string
          severity: string
          message: string
          status?: string
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          station_id?: string | null
          alert_type?: string
          severity?: string
          message?: string
          status?: string
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}