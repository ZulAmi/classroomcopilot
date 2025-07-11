import React from 'react';
import { Zap, BookOpen, Users, Target, Clock, Shield, Lightbulb, BarChart3 } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Advanced AI creates comprehensive lesson plans tailored to your specific topic and student age group in seconds."
    },
    {
      icon: Target,
      title: "Curriculum Alignment",
      description: "All lesson plans are aligned with educational standards and age-appropriate learning objectives."
    },
    {
      icon: Clock,
      title: "Time-Saving Efficiency",
      description: "Save 95% of your planning time. What used to take hours now takes minutes."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "Each plan includes objectives, materials, activities, assessments, and homework assignments."
    },
    {
      icon: Users,
      title: "Age-Appropriate Design",
      description: "Content specifically designed for students aged 5-12 with developmentally appropriate activities."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every lesson plan is reviewed and optimized for educational effectiveness and engagement."
    },
    {
      icon: Lightbulb,
      title: "Creative Activities",
      description: "Diverse, engaging activities that promote active learning and student participation."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor student progress and adjust lessons based on learning outcomes and feedback."
    }
  ];

  return (
    <section className="features-professional">
      <div className="features-container">
        <div className="features-header">
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
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
