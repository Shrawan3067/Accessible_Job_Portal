/**
 * Main Application Component
 * Sets up routing and global providers
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { JobsProvider } from './context/JobsContext';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Layout from './components/Layout/Layout';

// Lazy load routes for better performance
const Home = lazy(() => import('./routes/Home'));
const JobDetails = lazy(() => import('./routes/JobDetails'));
const Login = lazy(() => import('./routes/Login'));
const Signup = lazy(() => import('./routes/Signup'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" 
         role="status"
         aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <JobsProvider>
        <AuthProvider> {/* Add AuthProvider here */}
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </Layout>
            </div>
          </Router>
        </AuthProvider> {/* Close AuthProvider */}
      </JobsProvider>
    </ThemeProvider>
  );
}

export default App;