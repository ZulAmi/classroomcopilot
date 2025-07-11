import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Key, Bell, Palette, Save } from 'lucide-react';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    theme: 'light',
    language: 'en',
    apiKey: ''
  });

  const handleSave = () => {
    // Save settings logic
    console.log('Settings saved:', settings);
  };

  return (
    <div className="settings">
      <div className="page-container">
        <div className="page-header">
          <h1>
            <SettingsIcon size={32} />
            Settings
          </h1>
          <p>Customize your Classroom Copilot experience</p>
        </div>

        <div className="settings-sections">
          {/* Profile Settings */}
          <div className="settings-section">
            <div className="section-header">
              <User size={24} />
              <h2>Profile Settings</h2>
            </div>
            <div className="settings-grid">
              <div className="form-group">
                <label>Display Name</label>
                <input type="text" defaultValue="Teacher Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="teacher@school.com" />
              </div>
              <div className="form-group">
                <label>School/Organization</label>
                <input type="text" placeholder="Enter your school name" />
              </div>
            </div>
          </div>

          {/* API Configuration */}
          <div className="settings-section">
            <div className="section-header">
              <Key size={24} />
              <h2>API Configuration</h2>
            </div>
            <div className="settings-grid">
              <div className="form-group">
                <label>OpenAI API Key</label>
                <input 
                  type="password" 
                  value={settings.apiKey}
                  onChange={(e) => setSettings(prev => ({ ...prev, apiKey: e.target.value }))}
                  placeholder="sk-..."
                />
                <p className="field-help">
                  Your API key is stored securely and only used for generating lesson plans.
                </p>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-section">
            <div className="section-header">
              <Bell size={24} />
              <h2>Notifications</h2>
            </div>
            <div className="settings-grid">
              <div className="toggle-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications}
                    onChange={(e) => setSettings(prev => ({ ...prev, notifications: e.target.checked }))}
                  />
                  <span className="toggle-slider"></span>
                  Push Notifications
                </label>
                <p>Receive notifications about lesson plan updates</p>
              </div>
              <div className="toggle-group">
                <label className="toggle-label">
                  <input 
                    type="checkbox" 
                    checked={settings.emailUpdates}
                    onChange={(e) => setSettings(prev => ({ ...prev, emailUpdates: e.target.checked }))}
                  />
                  <span className="toggle-slider"></span>
                  Email Updates
                </label>
                <p>Get weekly summaries and tips via email</p>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="settings-section">
            <div className="section-header">
              <Palette size={24} />
              <h2>Appearance</h2>
            </div>
            <div className="settings-grid">
              <div className="form-group">
                <label>Theme</label>
                <select 
                  value={settings.theme}
                  onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div className="form-group">
                <label>Language</label>
                <select 
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button onClick={handleSave} className="primary-btn">
            <Save size={18} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};
