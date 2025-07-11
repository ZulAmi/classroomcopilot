import React, { useState, useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { BookOpen, Mail, Lock, User, Eye, EyeOff, Loader, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from './AuthContext';

export const AuthPage: React.FC = () => {
  const { login, register, isAuthenticated, loading } = useAuth();
  const [searchParams] = useSearchParams();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState('');

  // Check URL params for mode (signup/login)
  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setIsLoginMode(false);
    }
  }, [searchParams]);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  if (loading) {
    return (
      <div className="auth-loading">
        <Loader className="spinner" size={32} />
        <p>Loading...</p>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');

    try {
      if (isLoginMode) {
        await login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        if (formData.password.length < 6) {
          throw new Error('Password must be at least 6 characters long');
        }
        await register(formData.name, formData.email, formData.password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setAuthLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setError('');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <BookOpen size={32} className="auth-logo-icon" />
          <h1 className="auth-logo-text">Classroom Copilot</h1>
        </div>
        
        <div className="auth-hero">
          <h2 className="auth-hero-title">Streamline your <span>teaching workflow</span></h2>
          <p className="auth-hero-subtitle">Join thousands of educators creating professional lesson plans in minutes, not hours.</p>
          
          <div className="auth-benefits">
            <div className="auth-benefit">
              <CheckCircle size={20} />
              <span>AI-powered lesson planning</span>
            </div>
            <div className="auth-benefit">
              <CheckCircle size={20} />
              <span>Curriculum-aligned content</span>
            </div>
            <div className="auth-benefit">
              <CheckCircle size={20} />
              <span>Save hours of preparation time</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="auth-right">
        <div className="auth-container">
          {/* Header */}
          <div className="auth-header">
            <h2 className="auth-title">
              {isLoginMode ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="auth-subtitle">
              {isLoginMode 
                ? 'Sign in to your account to continue' 
                : 'Get started with your free account'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            {!isLoginMode && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required={!isLoginMode}
                    disabled={authLoading}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  disabled={authLoading}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                {isLoginMode && (
                  <a href="#" className="forgot-password">Forgot password?</a>
                )}
              </div>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  disabled={authLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={authLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLoginMode && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required={!isLoginMode}
                    disabled={authLoading}
                  />
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className="auth-submit-btn"
              disabled={authLoading}
            >
              {authLoading ? (
                <>
                  <Loader className="spinner" size={20} />
                  <span>{isLoginMode ? 'Signing In...' : 'Creating Account...'}</span>
                </>
              ) : (
                <>
                  <span>{isLoginMode ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Mode Toggle */}
          <div className="auth-toggle">
            <p>
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                className="toggle-btn"
                onClick={toggleMode}
                disabled={authLoading}
              >
                {isLoginMode ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Demo Info */}
          <div className="auth-demo-info">
            <h3>Demo Information</h3>
            <p>This is a demonstration application. You can sign in with any email and password combination.</p>
            <p><strong>Note:</strong> You'll need to provide your own OpenAI API key to generate lesson plans.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
