import React, { useState } from 'react';
import type { LessonPlanRequest } from './types';

interface LessonPlanFormProps {
  onSubmit: (request: LessonPlanRequest) => void;
  loading: boolean;
}

export const LessonPlanForm: React.FC<LessonPlanFormProps> = ({ onSubmit, loading }) => {
  const [topic, setTopic] = useState('');
  const [ageGroup, setAgeGroup] = useState<number>(8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit({ topic: topic.trim(), ageGroup });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lesson-plan-form">
      <div className="form-group">
        <label htmlFor="topic">English Topic:</label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., Animals, Family, Colors, Weather..."
          required
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="ageGroup">Student Age:</label>
        <select
          id="ageGroup"
          value={ageGroup}
          onChange={(e) => setAgeGroup(Number(e.target.value))}
          disabled={loading}
        >
          <option value={5}>5 years old</option>
          <option value={6}>6 years old</option>
          <option value={7}>7 years old</option>
          <option value={8}>8 years old</option>
          <option value={9}>9 years old</option>
          <option value={10}>10 years old</option>
          <option value={11}>11 years old</option>
          <option value={12}>12 years old</option>
        </select>
      </div>

      <button type="submit" disabled={loading || !topic.trim()}>
        {loading ? 'Generating Lesson Plan...' : 'Generate 5-Day Lesson Plan'}
      </button>
    </form>
  );
};
