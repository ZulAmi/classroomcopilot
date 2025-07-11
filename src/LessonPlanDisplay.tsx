import React from 'react';
import type { WeeklyLessonPlan, LessonPlan, Activity } from './types';

interface LessonPlanDisplayProps {
  lessonPlan: WeeklyLessonPlan;
}

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className={`activity-card ${activity.type}`}>
    <div className="activity-header">
      <h5>{activity.name}</h5>
      <span className="duration">{activity.duration}</span>
    </div>
    <p>{activity.description}</p>
    <span className="activity-type">{activity.type}</span>
  </div>
);

const DayCard: React.FC<{ lesson: LessonPlan }> = ({ lesson }) => (
  <div className="day-card">
    <div className="day-header">
      <h3>Day {lesson.day}: {lesson.title}</h3>
    </div>

    <div className="lesson-section">
      <h4>Learning Objectives</h4>
      <ul>
        {lesson.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-section">
      <h4>Materials Needed</h4>
      <ul>
        {lesson.materials.map((material, index) => (
          <li key={index}>{material}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-section">
      <h4>Activities</h4>
      <div className="activities-grid">
        {lesson.activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </div>

    <div className="lesson-section">
      <h4>Assessment</h4>
      <p>{lesson.assessment}</p>
    </div>

    {lesson.homework && (
      <div className="lesson-section">
        <h4>Homework</h4>
        <p>{lesson.homework}</p>
      </div>
    )}
  </div>
);

export const LessonPlanDisplay: React.FC<LessonPlanDisplayProps> = ({ lessonPlan }) => {
  return (
    <div className="lesson-plan-display">
      <div className="plan-header">
        <h2>5-Day English Lesson Plan</h2>
        <div className="plan-info">
          <p><strong>Topic:</strong> {lessonPlan.topic}</p>
          <p><strong>Age Group:</strong> {lessonPlan.ageGroup}</p>
        </div>
        <div className="plan-overview">
          <h3>Overview</h3>
          <p>{lessonPlan.overview}</p>
        </div>
      </div>

      <div className="lessons-container">
        {lessonPlan.lessons.map((lesson) => (
          <DayCard key={lesson.day} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};
