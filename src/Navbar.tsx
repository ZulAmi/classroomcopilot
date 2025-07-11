import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  PlusCircle, 
  FileText, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X,
  Globe,
  LayoutDashboard,
  ChevronDown
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { useAppMode } from './AppModeContext';
import { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { mode, toggleMode } = useAppMode();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setUserMenuOpen(false);
  };

  const spaNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: BookOpen },
    { path: '/create', label: 'Create Plan', icon: PlusCircle },
    { path: '/plans', label: 'My Plans', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const websiteNavItems = [
    { path: '/', label: 'Home', icon: BookOpen },
    { path: '/features', label: 'Features', icon: FileText },
    { path: '/pricing', label: 'Pricing', icon: Settings },
    { path: '/about', label: 'About', icon: User },
  ];

  const navItems = mode === 'spa' ? spaNavItems : websiteNavItems;
  const homeLink = mode === 'spa' ? '/dashboard' : '/';

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setUserMenuOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to={homeLink} className="navbar-logo">
          <BookOpen className="logo-icon" />
          <span className="logo-text">Classroom Copilot</span>
        </Link>

        {/* Desktop Navigation */}
        {(mode === 'spa' && user) || mode === 'website' ? (
          <div className="navbar-menu desktop-menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ) : null}

        <div className="navbar-actions">
          {/* Mode Toggle */}
          <div className="mode-toggle">
            <button 
              onClick={toggleMode}
              className="mode-toggle-btn"
              title={`Switch to ${mode === 'spa' ? 'Website' : 'App'} mode`}
            >
              {mode === 'spa' ? (
                <>
                  <Globe size={16} />
                  <span>Website</span>
                </>
              ) : (
                <>
                  <LayoutDashboard size={16} />
                  <span>App</span>
                </>
              )}
            </button>
          </div>

          {/* User Menu or Auth Buttons */}
          {user ? (
            <div className="navbar-user" onClick={(e) => {
              e.stopPropagation();
              setUserMenuOpen(!userMenuOpen);
            }}>
              <div className="user-info">
                <div className="user-avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : <User size={18} />}
                </div>
                <div className="user-details">
                  <span className="user-name">{user?.name}</span>
                  <span className="user-role">{user?.role}</span>
                </div>
                <ChevronDown size={16} className={`user-menu-arrow ${userMenuOpen ? 'open' : ''}`} />
              </div>
              
              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <div className="dropdown-user-name">{user?.name}</div>
                    <div className="dropdown-user-email">{user?.email}</div>
                  </div>
                  <div className="user-dropdown-divider"></div>
                  <Link to="/dashboard" className="dropdown-item">
                    <BookOpen size={16} />
                    <span>Dashboard</span>
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <div className="user-dropdown-divider"></div>
                  <button onClick={handleLogout} className="dropdown-item logout-item">
                    <LogOut size={16} />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="navbar-auth">
              <Link to="/auth" className="btn-nav btn-secondary">
                Sign In
              </Link>
              <Link to="/auth?mode=signup" className="btn-nav btn-primary">
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            <div className="mobile-menu-divider"></div>
            
            {/* Mobile Mode Toggle */}
            <button 
              onClick={() => {
                toggleMode();
                setMobileMenuOpen(false);
              }}
              className="mobile-nav-item mode-toggle-mobile"
            >
              {mode === 'spa' ? (
                <>
                  <Globe size={18} />
                  <span>Switch to Website</span>
                </>
              ) : (
                <>
                  <LayoutDashboard size={18} />
                  <span>Switch to App</span>
                </>
              )}
            </button>
            
            <div className="mobile-menu-divider"></div>
            
            {user ? (
              <>
                <div className="mobile-user-info">
                  <div className="mobile-user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : <User size={20} />}
                  </div>
                  <div className="mobile-user-details">
                    <span className="mobile-user-name">{user?.name}</span>
                    <span className="mobile-user-role">{user?.role}</span>
                  </div>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="mobile-nav-item mobile-logout-btn"
                >
                  <LogOut size={18} />
                  <span>Sign out</span>
                </button>
              </>
            ) : (
              <div className="mobile-auth-buttons">
                <Link to="/auth" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  <User size={18} />
                  <span>Sign In</span>
                </Link>
                <Link to="/auth?mode=signup" className="mobile-auth-cta" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
