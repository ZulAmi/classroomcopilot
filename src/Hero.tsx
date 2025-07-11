import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-professional">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">Trusted by 2,500+ educators</span>
            </div>
            <h1 className="hero-title">
              Create Professional Lesson Plans in 
              <span className="hero-accent"> Minutes, Not Hours</span>
            </h1>
            <p className="hero-description">
              Transform your teaching with AI-powered lesson planning. Generate comprehensive, 
              curriculum-aligned lesson plans for any topic and age group.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary hero-cta">
                <BookOpen size={20} />
                Start Planning Free
                <ArrowRight size={16} />
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
              </div>
              
              <div className="dashboard-content">
                <div className="plan-preview">
                  <div className="plan-meta">
                    <span className="plan-subject">Science</span>
                    <span className="plan-age">Ages 8-10</span>
                  </div>
                  <h3 className="plan-title">Solar System Exploration</h3>
                  <p className="plan-description">5-day comprehensive lesson plan</p>
                  
                  <div className="plan-days">
                    <div className="day-preview">
                      <div className="day-number">1</div>
                      <div className="day-content">
                        <div className="day-title">Introduction to Our Solar System</div>
                        <div className="day-activities">3 activities • 45 minutes</div>
                      </div>
                      <div className="day-status completed"></div>
                    </div>
                    <div className="day-preview">
                      <div className="day-number">2</div>
                      <div className="day-content">
                        <div className="day-title">The Sun and Inner Planets</div>
                        <div className="day-activities">4 activities • 50 minutes</div>
                      </div>
                      <div className="day-status completed"></div>
                    </div>
                    <div className="day-preview">
                      <div className="day-number">3</div>
                      <div className="day-content">
                        <div className="day-title">Outer Planets Adventure</div>
                        <div className="day-activities">3 activities • 45 minutes</div>
                      </div>
                      <div className="day-status in-progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
