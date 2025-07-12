import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  Users, 
  Clock, 
  Calendar, 
  BarChart, // Changed from Graph which isn't in lucide
  BookmarkCheck, 
  Clipboard, 
  UserPlus, 
  CreditCard 
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">Complete Tuition Center Management</span>
            </div>
            
            <h1 className="hero-title">
              Your All-in-One Tuition Center 
              <span className="hero-accent"> Management Platform</span>
            </h1>
            
            <p className="hero-description">
              Transform your educational business with our comprehensive platform. From AI-powered lesson planning 
              to student management, financial tracking, and parent communication - everything you need to scale your tuition center.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>Streamlined student enrollment & attendance tracking</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>Integrated payment & financial management</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>Performance analytics & progress reporting</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary hero-cta">
                <BookOpen size={20} />
                Start Free Trial
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary hero-demo">
                <Users size={20} />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-dashboard">
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <div className="nav-dot active"></div>
                  <div className="nav-dot"></div>
                  <div className="nav-dot"></div>
                </div>
                <div className="dashboard-title">Tuition Center Overview</div>
                <div className="dashboard-actions">
                  <div className="action-btn">
                    <Calendar size={14} />
                    <span>July 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-content">
                <div className="metrics-overview">
                  <div className="metric-card">
                    <div className="metric-title">Students</div>
                    <div className="metric-value">128</div>
                    <div className="metric-change positive">+12% ↑</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-title">Revenue</div>
                    <div className="metric-value">$9,240</div>
                    <div className="metric-change positive">+8% ↑</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-title">Classes</div>
                    <div className="metric-value">24</div>
                    <div className="metric-change neutral">0% →</div>
                  </div>
                </div>
                
                <div className="upcoming-classes">
                  <h4>Today's Schedule</h4>
                  <div className="class-item">
                    <div className="class-time">9:00 AM</div>
                    <div className="class-details">
                      <div className="class-name">Advanced English</div>
                      <div className="class-info">12 students • Room 3</div>
                    </div>
                    <div className="class-status current"></div>
                  </div>
                  <div className="class-item">
                    <div className="class-time">11:30 AM</div>
                    <div className="class-details">
                      <div className="class-name">Primary Math</div>
                      <div className="class-info">15 students • Room 1</div>
                    </div>
                    <div className="class-status upcoming"></div>
                  </div>
                  <div className="class-item">
                    <div className="class-time">2:00 PM</div>
                    <div className="class-details">
                      <div className="class-name">Science Lab</div>
                      <div className="class-info">10 students • Room 4</div>
                    </div>
                    <div className="class-status upcoming"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <div className="card-text">
                  <div className="card-title">Smart Analytics</div>
                  <div className="card-desc">Performance Tracking</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">
                  <div className="card-title">AI Powered</div>
                  <div className="card-desc">Teaching Assistant</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">💰</div>
                <div className="card-text">
                  <div className="card-title">Financial Tools</div>
                  <div className="card-desc">Automated Billing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
