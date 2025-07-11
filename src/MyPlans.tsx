import React from 'react';
import { FileText, Calendar, Search, Filter } from 'lucide-react';

export const MyPlans: React.FC = () => {
  const plans = [
    {
      id: '1',
      topic: 'Animals and Their Habitats',
      ageGroup: '8-9 years',
      createdAt: '2024-01-15',
      status: 'completed',
      lessons: 5
    },
    {
      id: '2',
      topic: 'Family Members',
      ageGroup: '6-7 years',
      createdAt: '2024-01-10',
      status: 'in-progress',
      lessons: 3
    },
    {
      id: '3',
      topic: 'Weather and Seasons',
      ageGroup: '10-11 years',
      createdAt: '2024-01-05',
      status: 'completed',
      lessons: 5
    }
  ];

  return (
    <div className="my-plans">
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>
              <FileText size={32} />
              My Lesson Plans
            </h1>
            <p>Manage and organize your created lesson plans</p>
          </div>
        </div>

        <div className="plans-controls">
          <div className="search-bar">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search lesson plans..." 
              className="search-input"
            />
          </div>
          <button className="filter-btn">
            <Filter size={18} />
            Filter
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <div className="plan-header">
                <h3>{plan.topic}</h3>
                <span className={`status-badge ${plan.status}`}>
                  {plan.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className="plan-details">
                <div className="detail-item">
                  <span className="label">Age Group:</span>
                  <span className="value">{plan.ageGroup}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Lessons:</span>
                  <span className="value">{plan.lessons}/5</span>
                </div>
                <div className="detail-item">
                  <Calendar size={16} />
                  <span className="value">{new Date(plan.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="plan-actions">
                <button className="secondary-btn">Edit</button>
                <button className="primary-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
