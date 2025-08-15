import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { InterviewProvider } from './contexts/InterviewContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Interview from './pages/Interview';
import Results from './pages/Results';
import AdminDashboard from './pages/AdminDashboard';
import InterviewSetup from './pages/InterviewSetup';
import LoadingSpinner from './components/LoadingSpinner';

function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" />;
  
  return <>{children}</>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <InterviewProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-300">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/interview-setup" 
                  element={
                    <ProtectedRoute>
                      <InterviewSetup />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/interview/:id" 
                  element={
                    <ProtectedRoute>
                      <Interview />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/results/:id" 
                  element={
                    <ProtectedRoute>
                      <Results />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </div>
          </Router>
        </InterviewProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;