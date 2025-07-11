import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { AppModeProvider, useAppMode } from './AppModeContext';
import { WebsiteHomepage } from './WebsiteHomepage';
import { Dashboard } from './Dashboard';
import { CreatePlan } from './CreatePlan';
import { MyPlans } from './MyPlans';
import { Settings } from './Settings';
import { AuthPage } from './AuthPage';
import { Layout } from './Layout';
import './index.css';

// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

const AppContent = () => {
  const { mode } = useAppMode();

  if (mode === 'website') {
    return (
      <div className="app">
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<WebsiteHomepage />} />
          <Route path="/features" element={<WebsiteHomepage />} />
          <Route path="/pricing" element={<WebsiteHomepage />} />
          <Route path="/about" element={<WebsiteHomepage />} />
          
          {/* Auth Routes */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          
          {/* Redirect SPA routes to home when in website mode */}
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/create" element={<Navigate to="/" replace />} />
          <Route path="/plans" element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<Navigate to="/" replace />} />
          
          {/* Catch all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    );
  }

  // SPA Mode
  return (
    <div className="app">
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        
        {/* App Routes - Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/create" element={
          <ProtectedRoute>
            <Layout>
              <CreatePlan />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/plans" element={
          <ProtectedRoute>
            <Layout>
              <MyPlans />
            </Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/settings" element={
          <ProtectedRoute>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Website redirect when in SPA mode */}
        <Route path="/" element={
          <ProtectedRoute>
            <Navigate to="/dashboard" replace />
          </ProtectedRoute>
        } />
        
        {/* Catch all redirect */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppModeProvider>
        <Router>
          <AppContent />
        </Router>
      </AppModeProvider>
    </AuthProvider>
  );
}

export default App;
