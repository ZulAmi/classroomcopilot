import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wand2, Loader, AlertCircle } from 'lucide-react';
import { LessonPlanForm } from './LessonPlanForm';
import { LessonPlanDisplay } from './LessonPlanDisplay';
import { generateLessonPlan } from './lessonPlanGenerator';
import type { WeeklyLessonPlan, LessonPlanRequest } from './types';

export const CreatePlan: React.FC = () => {
  const navigate = useNavigate();
  const [lessonPlan, setLessonPlan] = useState<WeeklyLessonPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');

  const handleLessonPlanRequest = async (request: LessonPlanRequest) => {
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const plan = await generateLessonPlan(request, apiKey);
      setLessonPlan(plan);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLessonPlan(null);
    setError('');
  };

  return (
    <div className="create-plan">
      <div className="create-plan-container">
        {/* Header */}
        <div className="page-header">
          <button onClick={() => navigate('/dashboard')} className="back-btn">
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>
          <div className="header-content">
            <h1>
              <Wand2 size={32} />
              Create Lesson Plan
            </h1>
            <p>Generate a comprehensive 5-day English lesson plan using AI</p>
          </div>
        </div>

        {/* API Key Configuration */}
        {!lessonPlan && (
          <div className="api-key-section">
            <h2>OpenAI API Configuration</h2>
            <div className="api-key-form">
              <div className="form-group">
                <label htmlFor="apiKey">
                  OpenAI API Key
                  <span className="required">*</span>
                </label>
                <input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="api-key-input"
                />
                <p className="field-help">
                  Get your API key from{' '}
                  <a 
                    href="https://platform.openai.com/api-keys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    OpenAI Platform
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="error-banner">
            <AlertCircle size={20} />
            <div className="error-content">
              <strong>Error:</strong> {error}
            </div>
            <button onClick={() => setError('')} className="error-close">×</button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <Loader className="spinner large" size={48} />
            <h3>Generating Your Lesson Plan</h3>
            <p>Our AI is creating a comprehensive 5-day lesson plan tailored to your specifications...</p>
            <div className="loading-steps">
              <div className="loading-step">✓ Analyzing topic requirements</div>
              <div className="loading-step">✓ Adapting content for age group</div>
              <div className="loading-step active">🤖 Generating lesson activities</div>
              <div className="loading-step">⏳ Finalizing assessments</div>
            </div>
          </div>
        )}

        {/* Content */}
        {!lessonPlan && !loading ? (
          <div className="form-section">
            <div className="form-container">
              <LessonPlanForm onSubmit={handleLessonPlanRequest} loading={loading} />
            </div>
          </div>
        ) : lessonPlan && !loading ? (
          <div className="results-section">
            <div className="results-header">
              <h2>Your Lesson Plan is Ready!</h2>
              <div className="results-actions">
                <button onClick={handleReset} className="secondary-btn">
                  Create Another Plan
                </button>
                <button className="primary-btn">
                  Save Plan
                </button>
              </div>
            </div>
            <LessonPlanDisplay lessonPlan={lessonPlan} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
