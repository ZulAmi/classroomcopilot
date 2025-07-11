import React from 'react';
import { ArrowRight, BookOpen, Clock, CreditCard, Shield, Users, Sparkles, Mail } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-header">
            <div className="cta-badge">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">Ready to Get Started?</span>
            </div>
            
            <h2 className="cta-title">
              Transform Your 
              <span className="cta-accent"> Teaching Today</span>
            </h2>
            
            <p className="cta-description">
              Join the future of lesson planning. Create engaging, curriculum-aligned lessons 
              in minutes, not hours.
            </p>
          </div>
          
          <div className="cta-benefits">
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Clock size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Get Started Free</h3>
                <p className="benefit-description">No credit card required to try</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Shield size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Privacy First</h3>
                <p className="benefit-description">Your data stays secure</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Users size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Built for Educators</h3>
                <p className="benefit-description">By teachers, for teachers</p>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="btn-primary cta-primary">
              <BookOpen size={20} />
              Start Creating Lessons
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary cta-secondary">
              <Mail size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
