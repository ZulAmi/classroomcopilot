import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Sparkles, Users, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">AI-Powered Lesson Planning</span>
            </div>
            
            <h1 className="hero-title">
              Create Professional Lesson Plans in 
              <span className="hero-accent"> Minutes, Not Hours</span>
            </h1>
            
            <p className="hero-description">
              Transform your teaching with AI-powered lesson planning. Generate comprehensive, 
              curriculum-aligned lesson plans for any topic and age group with just a few clicks.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>AI-powered curriculum alignment</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>Age-appropriate activities & assessments</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} className="feature-check" />
                <span>Ready in under 5 minutes</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary hero-cta">
                <BookOpen size={20} />
                Start Planning Free
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
                <div className="dashboard-title">Lesson Plan Generator</div>
                <div className="dashboard-actions">
                  <div className="action-btn">
                    <Clock size={14} />
                    <span>2 min</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-content">
                <div className="plan-preview">
                  <div className="plan-header">
                    <div className="plan-meta">
                      <span className="plan-subject">Science</span>
                      <span className="plan-age">Ages 8-10</span>
                      <span className="plan-duration">5 days</span>
                    </div>
                    <div className="plan-status">
                      <span className="status-badge generating">Generating...</span>
                    </div>
                  </div>
                  
                  <h3 className="plan-title">Solar System Exploration</h3>
                  <p className="plan-description">Comprehensive 5-day lesson plan with interactive activities</p>
                  
                  <div className="plan-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '75%' }}></div>
                    </div>
                    <span className="progress-text">75% Complete</span>
                  </div>
                  
                  <div className="plan-days">
                    <div className="day-preview completed">
                      <div className="day-number">1</div>
                      <div className="day-content">
                        <div className="day-title">Introduction to Our Solar System</div>
                        <div className="day-activities">
                          <span className="activity-count">3 activities</span>
                          <span className="activity-duration">45 minutes</span>
                        </div>
                      </div>
                      <div className="day-status completed-status"></div>
                    </div>
                    <div className="day-preview completed">
                      <div className="day-number">2</div>
                      <div className="day-content">
                        <div className="day-title">The Sun and Inner Planets</div>
                        <div className="day-activities">
                          <span className="activity-count">4 activities</span>
                          <span className="activity-duration">50 minutes</span>
                        </div>
                      </div>
                      <div className="day-status completed-status"></div>
                    </div>
                    <div className="day-preview current">
                      <div className="day-number">3</div>
                      <div className="day-content">
                        <div className="day-title">Outer Planets Adventure</div>
                        <div className="day-activities">
                          <span className="activity-count">3 activities</span>
                          <span className="activity-duration">45 minutes</span>
                        </div>
                      </div>
                      <div className="day-status current-status"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">📚</div>
                <div className="card-text">
                  <div className="card-title">Curriculum Aligned</div>
                  <div className="card-desc">Common Core Standards</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">
                  <div className="card-title">AI Powered</div>
                  <div className="card-desc">Smart Generation</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">
                  <div className="card-title">Age Appropriate</div>
                  <div className="card-desc">5-12 Years Old</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
