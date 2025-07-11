import React from 'react';
import { BookOpen, Clock, Users, Target, CheckCircle, ArrowRight, Lightbulb, Zap } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce lesson planning time from hours to minutes with AI-powered generation.",
      features: ["Quick generation", "Ready-to-use plans", "Instant customization"]
    },
    {
      icon: Target,
      title: "Stay Aligned",
      description: "Ensure all lessons meet curriculum standards and learning objectives.",
      features: ["Standards-based", "Age-appropriate", "Objective-driven"]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Plans",
      description: "Get complete lesson plans with activities, materials, and assessments.",
      features: ["Full structure", "Activity ideas", "Assessment tools"]
    },
    {
      icon: Users,
      title: "Engage Students",
      description: "Create lessons that capture attention and promote active learning.",
      features: ["Interactive activities", "Varied learning styles", "Student-centered"]
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <Lightbulb size={16} />
            <span>Why Choose Classroom Copilot</span>
          </div>
          <h2 className="testimonials-title">
            Built for <span className="testimonials-accent">Modern Educators</span>
          </h2>
          <p className="testimonials-description">
            Discover how AI-powered lesson planning can transform your teaching experience and help you create better learning outcomes.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">
                  <benefit.icon size={24} />
                </div>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <ul className="benefit-features">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="benefit-feature">
                      <CheckCircle size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
