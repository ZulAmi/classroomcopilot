import React from 'react';
import { ArrowRight, BookOpen, Clock, CreditCard, Shield, Users, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-header">
            <div className="cta-badge">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">Start Your Journey</span>
            </div>
            
            <h2 className="cta-title">
              Ready to Transform Your 
              <span className="cta-accent"> Teaching Experience?</span>
            </h2>
            
            <p className="cta-description">
              Experience the power of AI-driven lesson planning. Create professional, 
              engaging lessons in minutes instead of hours.
            </p>
          </div>
          
          <div className="cta-benefits">
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Clock size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">14-day free trial</h3>
                <p className="benefit-description">Full access to all features, no restrictions</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <CreditCard size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">No credit card required</h3>
                <p className="benefit-description">Start immediately, no strings attached</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Shield size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Cancel anytime</h3>
                <p className="benefit-description">No long-term commitments</p>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="btn-primary cta-primary">
              <BookOpen size={20} />
              Start Free Trial
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary cta-secondary">
              <Users size={20} />
              Schedule Demo
            </button>
          </div>
          
          <div className="cta-trust">
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={16} />
                <span>Privacy Focused</span>
              </div>
              <div className="trust-badge">
                <Users size={16} />
                <span>Educator Built</span>
              </div>
              <div className="trust-badge">
                <BookOpen size={16} />
                <span>Education First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
