import React, { useState } from 'react';

interface ApiKeyConfigProps {
  onApiKeySet: (apiKey: string) => void;
}

export const ApiKeyConfig: React.FC<ApiKeyConfigProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySet(apiKey.trim());
    }
  };

  return (
    <div className="api-key-config">
      <div className="config-container">
        <h2>🤖 Classroom Copilot</h2>
        <p>Welcome! To generate lesson plans, please enter your OpenAI API key.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="apiKey">OpenAI API Key:</label>
            <div className="api-key-input">
              <input
                id="apiKey"
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                required
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="toggle-visibility"
              >
                {showKey ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          
          <button type="submit" disabled={!apiKey.trim()}>
            Start Creating Lesson Plans
          </button>
        </form>

        <div className="api-key-info">
          <h3>How to get your API key:</h3>
          <ol>
            <li>Go to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">OpenAI API Keys</a></li>
            <li>Sign in to your OpenAI account</li>
            <li>Click "Create new secret key"</li>
            <li>Copy the key and paste it above</li>
          </ol>
          <p><strong>Note:</strong> Your API key is stored locally and never sent to our servers.</p>
        </div>
      </div>
    </div>
  );
};
