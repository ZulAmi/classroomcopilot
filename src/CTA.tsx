import React from 'react';
import { ArrowRight, BookOpen, Clock, CreditCard, Shield, Users, Sparkles, Mail, TrendingUp, Zap } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-header">
            <div className="cta-badge">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">Scale Your Educational Business</span>
            </div>
            
            <h2 className="cta-title">
              Transform Your Tuition Center 
              <span className="cta-accent"> Operations Today</span>
            </h2>
            
            <p className="cta-description">
              Join hundreds of successful tuition centers that use our platform to manage students, 
              streamline finances, enhance teaching quality, and drive business growth.
            </p>
          </div>
          
          <div className="cta-benefits">
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Clock size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Save 15+ Hours Weekly</h3>
                <p className="benefit-description">Automate administrative tasks</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <TrendingUp size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Grow Enrollment</h3>
                <p className="benefit-description">Improve parent satisfaction</p>
              </div>
            </div>
            <div className="cta-benefit">
              <div className="benefit-icon">
                <Zap size={24} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Enhanced Learning</h3>
                <p className="benefit-description">AI-optimized teaching resources</p>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="btn-primary cta-primary">
              <BookOpen size={20} />
              Schedule a Demo
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary cta-secondary">
              <Mail size={20} />
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
