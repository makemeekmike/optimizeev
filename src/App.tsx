import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Auth/AuthContext';
import MainLayout from './components/Layout/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import DashboardDemo from './components/DashboardDemo';
import ROICalculator from './components/ROICalculator';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import Resources from './components/Resources';
import Documentation from './components/Documentation';
import LiveChat from './components/LiveChat';
import ChargingMap from './components/ChargingMap';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import RequestDemo from './components/RequestDemo';
import NewsMedia from './components/NewsMedia';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardHome from './components/Dashboard/DashboardHome';
import StationsView from './components/Dashboard/StationsView';
import MaintenanceView from './components/Dashboard/MaintenanceView';
import AlertsView from './components/Dashboard/AlertsView';
import AnalyticsView from './components/Dashboard/AnalyticsView';
import ReportsView from './components/Dashboard/ReportsView';
import SettingsView from './components/Dashboard/SettingsView';
import SupportView from './components/Dashboard/SupportView';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import LearnMore from './components/LearnMore';
import AdminLayout from './components/Admin/AdminLayout';

// Import Monitoring components
import NetworkOverview from './components/Dashboard/Monitoring/NetworkOverview';
import StationMap from './components/Dashboard/Monitoring/StationMap';
import ActiveSessions from './components/Dashboard/Monitoring/ActiveSessions';
import RealTimeAlerts from './components/Dashboard/Monitoring/RealTimeAlerts';
import PerformanceMetrics from './components/Dashboard/Monitoring/PerformanceMetrics';

// Import Stations components
import GroupManagement from './components/Dashboard/Stations/GroupManagement';
import ConfigTemplates from './components/Dashboard/Stations/ConfigTemplates';
import ConnectionStatus from './components/Dashboard/Stations/ConnectionStatus';

// Import Analytics components
import CostAnalysis from './components/Dashboard/Analytics/CostAnalysis';
import DataExplorer from './components/Dashboard/Analytics/DataExplorer';
import TrendsInsights from './components/Dashboard/Analytics/TrendsInsights';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Public Route Component (redirects to dashboard if already authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  
  return <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <MainLayout>
              <Hero />
              <Features />
              <Solutions />
              <DashboardDemo />
              <ChargingMap />
              <ROICalculator />
              <CaseStudies />
              <Pricing />
              <Integrations />
              <Resources />
              <Documentation />
              <LiveChat />
            </MainLayout>
          } />
          <Route path="/login" element={
            <PublicRoute>
              <MainLayout>
                <Login />
              </MainLayout>
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <MainLayout>
                <Signup />
              </MainLayout>
            </PublicRoute>
          } />
          <Route path="/request-demo" element={<MainLayout><RequestDemo /></MainLayout>} />
          <Route path="/learn-more" element={<MainLayout><LearnMore /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/news-media" element={<MainLayout><NewsMedia /></MainLayout>} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardHome />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Monitoring Routes */}
          <Route path="/dashboard/monitoring/overview" element={
            <ProtectedRoute>
              <DashboardLayout>
                <NetworkOverview />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/monitoring/map" element={
            <ProtectedRoute>
              <DashboardLayout>
                <StationMap />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/monitoring/sessions" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ActiveSessions />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/monitoring/alerts" element={
            <ProtectedRoute>
              <DashboardLayout>
                <RealTimeAlerts />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/monitoring/metrics" element={
            <ProtectedRoute>
              <DashboardLayout>
                <PerformanceMetrics />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Stations Routes */}
          <Route path="/dashboard/stations" element={
            <ProtectedRoute>
              <DashboardLayout>
                <StationsView />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/stations/groups" element={
            <ProtectedRoute>
              <DashboardLayout>
                <GroupManagement />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/stations/templates" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ConfigTemplates />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/stations/status" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ConnectionStatus />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Maintenance Routes */}
          <Route path="/dashboard/maintenance" element={
            <ProtectedRoute>
              <DashboardLayout>
                <MaintenanceView />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Alerts Routes */}
          <Route path="/dashboard/alerts" element={
            <ProtectedRoute>
              <DashboardLayout>
                <AlertsView />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Analytics Routes */}
          <Route path="/dashboard/analytics" element={
            <ProtectedRoute>
              <DashboardLayout>
                <AnalyticsView />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/analytics/costs" element={
            <ProtectedRoute>
              <DashboardLayout>
                <CostAnalysis />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/analytics/explorer" element={
            <ProtectedRoute>
              <DashboardLayout>
                <DataExplorer />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/analytics/trends" element={
            <ProtectedRoute>
              <DashboardLayout>
                <TrendsInsights />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Reports Route */}
          <Route path="/dashboard/reports" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ReportsView />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Settings Route */}
          <Route path="/dashboard/settings" element={
            <ProtectedRoute>
              <DashboardLayout>
                <SettingsView />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Support Route */}
          <Route path="/dashboard/support" element={
            <ProtectedRoute>
              <DashboardLayout>
                <SupportView />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          } />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;