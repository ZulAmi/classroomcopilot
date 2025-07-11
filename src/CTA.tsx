import React from 'react';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="cta-professional">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform Your 
            <span className="cta-accent"> Teaching Experience?</span>
          </h2>
          <p className="cta-description">
            Join thousands of educators who are already saving time and creating 
            better learning experiences with Classroom Copilot.
          </p>
          
          <div className="cta-benefits">
            <div className="cta-benefit">
              <CheckCircle size={20} className="benefit-check" />
              <span>14-day free trial</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle size={20} className="benefit-check" />
              <span>No credit card required</span>
            </div>
            <div className="cta-benefit">
              <CheckCircle size={20} className="benefit-check" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="btn-primary cta-primary">
              <BookOpen size={20} />
              Start Free Trial
              <ArrowRight size={16} />
            </button>
            <button className="btn-ghost cta-secondary">
              Schedule Demo
            </button>
          </div>
          
          <div className="cta-trust">
            <p className="trust-note">
              Trusted by 2,500+ teachers • 4.9/5 rating • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
