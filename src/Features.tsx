import React from 'react';
import { Zap, BookOpen, Users, Target, Clock, Shield, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Advanced AI creates comprehensive lesson plans tailored to your specific topic and student age group in seconds.",
      highlights: ["Instant generation", "Topic-specific", "Age-appropriate"]
    },
    {
      icon: Target,
      title: "Curriculum Alignment",
      description: "All lesson plans are aligned with educational standards and age-appropriate learning objectives.",
      highlights: ["Common Core", "State Standards", "Learning objectives"]
    },
    {
      icon: Clock,
      title: "Time-Saving Efficiency",
      description: "Reduce your lesson planning time significantly. Focus more on teaching and student engagement.",
      highlights: ["Quick planning", "Instant delivery", "Ready to use"]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "Each plan includes objectives, materials, activities, assessments, and homework assignments.",
      highlights: ["Complete lessons", "Materials list", "Assessments included"]
    },
    {
      icon: Users,
      title: "Age-Appropriate Design",
      description: "Content specifically designed for students aged 5-12 with developmentally appropriate activities.",
      highlights: ["5-12 years", "Developmental focus", "Engaging activities"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every lesson plan is reviewed and optimized for educational effectiveness and engagement.",
      highlights: ["Carefully crafted", "Quality focused", "Engagement driven"]
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <div className="features-badge">
            <Lightbulb size={16} />
            <span>Key Features</span>
          </div>
          <h2 className="features-title">
            Everything You Need to Create 
            <span className="features-accent"> Outstanding Lessons</span>
          </h2>
          <p className="features-description">
            Our comprehensive suite of tools helps educators create, manage, and deliver 
            exceptional learning experiences that engage students and drive results.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-highlights">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="feature-highlight">
                      <CheckCircle size={14} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to experience the power of AI lesson planning?</h3>
            <p className="cta-description">Start creating professional lesson plans that save you time and enhance your teaching.</p>
            <button className="btn-primary cta-button">
              <BookOpen size={20} />
              Get Started Free
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
