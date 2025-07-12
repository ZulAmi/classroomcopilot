import React from 'react';
import { 
  Zap, 
  BookOpen, 
  Users, 
  Target, 
  Clock, 
  Shield, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  DollarSign, 
  Bell, 
  MessageSquare, 
  LineChart, 
  FileText, 
  UserCheck, 
  Briefcase, 
  Star 
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Teaching Assistant",
      description: "Generate lesson plans, worksheets, quizzes and educational content tailored to your curriculum and student needs.",
      highlights: ["Instant content generation", "Curriculum-aligned materials", "Age-appropriate resources"]
    },
    {
      icon: Users,
      title: "Student Management",
      description: "Comprehensive student profiles with attendance tracking, performance history, and communication logs in one place.",
      highlights: ["Digital enrollment", "Attendance automation", "Student progress tracking"]
    },
    {
      icon: Calendar,
      title: "Class Scheduling",
      description: "Effortless scheduling with conflict detection, teacher availability, and room allocation management.",
      highlights: ["Visual timetables", "Resource management", "Automated reminders"]
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Track tuition payments, manage expenses, generate invoices and financial reports with ease.",
      highlights: ["Automated billing", "Payment tracking", "Financial insights"]
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Visualize student performance data and center growth metrics to make informed business decisions.",
      highlights: ["Progress reports", "Business insights", "Growth tracking"]
    },
    {
      icon: MessageSquare,
      title: "Parent Communication",
      description: "Built-in messaging system to keep parents updated about classes, events, and their child's progress.",
      highlights: ["Instant messaging", "Automated updates", "Progress sharing"]
    },
    {
      icon: Briefcase,
      title: "Teacher Management",
      description: "Track teacher schedules, qualifications, performance and compensation all in one platform.",
      highlights: ["Workload optimization", "Performance evaluation", "Payroll integration"]
    },
    {
      icon: Star,
      title: "Resource Marketplace",
      description: "Access a growing library of teaching resources, activities and worksheets created by educators worldwide.",
      highlights: ["Curated materials", "Ready-to-use resources", "Community contributions"]
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <div className="features-badge">
            <Lightbulb size={16} />
            <span>Complete Solution</span>
          </div>
          <h2 className="features-title">
            All the Tools You Need to 
            <span className="features-accent"> Grow Your Tuition Center</span>
          </h2>
          <p className="features-description">
            Our comprehensive platform helps educational businesses streamline operations, enhance teaching quality, 
            and deliver exceptional learning experiences that satisfy both students and parents.
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
          <div className="features-cta-content">
            <h3 className="features-cta-heading">Ready to transform your tuition center operations?</h3>
            <p className="features-cta-subtext">Join hundreds of successful educational businesses that have streamlined their operations and improved learning outcomes.</p>
            <button className="features-cta-btn">
              <BookOpen size={20} />
              Start 14-Day Free Trial
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
