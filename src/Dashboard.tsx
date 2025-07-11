import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  FileText, 
  BookOpen, 
  Users, 
  Clock, 
  TrendingUp,
  Calendar,
  Award
} from 'lucide-react';
import { useAuth } from './AuthContext';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: FileText,
      label: 'Lesson Plans Created',
      value: '12',
      change: '+3 this week',
      color: 'blue'
    },
    {
      icon: Users,
      label: 'Students Reached',
      value: '156',
      change: '+24 this month',
      color: 'green'
    },
    {
      icon: Clock,
      label: 'Teaching Hours',
      value: '48',
      change: '+8 this week',
      color: 'purple'
    },
    {
      icon: Award,
      label: 'Engagement Score',
      value: '94%',
      change: '+5% improvement',
      color: 'orange'
    }
  ];

  const quickActions = [
    {
      icon: PlusCircle,
      title: 'Create New Lesson Plan',
      description: 'Generate a 5-day English lesson plan using AI',
      link: '/create',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'View My Plans',
      description: 'Browse and manage your existing lesson plans',
      link: '/plans',
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Access teaching materials and guides',
      link: '/resources',
      color: 'purple'
    }
  ];

  const recentPlans = [
    {
      id: '1',
      topic: 'Animals and Their Habitats',
      ageGroup: '8-9 years',
      createdAt: '2 days ago',
      status: 'completed'
    },
    {
      id: '2',
      topic: 'Family Members',
      ageGroup: '6-7 years',
      createdAt: '1 week ago',
      status: 'in-progress'
    },
    {
      id: '3',
      topic: 'Weather and Seasons',
      ageGroup: '10-11 years',
      createdAt: '2 weeks ago',
      status: 'completed'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {user?.name}!</h1>
            <p>Here's what's happening with your lesson plans today.</p>
          </div>
          <div className="header-date">
            <Calendar size={20} />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`stat-card ${stat.color}`}>
                <div className="stat-icon">
                  <Icon size={24} />
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                  <span className="stat-change">{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.link} className={`action-card ${action.color}`}>
                  <div className="action-icon">
                    <Icon size={32} />
                  </div>
                  <div className="action-content">
                    <h3>{action.title}</h3>
                    <p>{action.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Lesson Plans</h2>
            <Link to="/plans" className="view-all-btn">
              View All
              <TrendingUp size={16} />
            </Link>
          </div>
          
          <div className="recent-plans">
            {recentPlans.map((plan) => (
              <div key={plan.id} className="plan-item">
                <div className="plan-info">
                  <h4>{plan.topic}</h4>
                  <p>Age Group: {plan.ageGroup}</p>
                  <span className="plan-date">{plan.createdAt}</span>
                </div>
                <div className={`plan-status ${plan.status}`}>
                  {plan.status === 'completed' ? 'Completed' : 'In Progress'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="dashboard-section">
          <h2>Teaching Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>🎯 Focus on Engagement</h4>
              <p>Use interactive activities to keep students engaged throughout the lesson.</p>
            </div>
            <div className="tip-card">
              <h4>📝 Assessment Variety</h4>
              <p>Mix formal and informal assessments to better understand student progress.</p>
            </div>
            <div className="tip-card">
              <h4>🔄 Continuous Feedback</h4>
              <p>Provide immediate feedback to help students learn more effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
