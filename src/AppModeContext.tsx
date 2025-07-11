import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type AppMode = 'spa' | 'website';

interface AppModeContextType {
  mode: AppMode;
  isWebsiteMode: boolean;
  toggleMode: () => void;
}

const AppModeContext = createContext<AppModeContextType | undefined>(undefined);

export const useAppMode = () => {
  const context = useContext(AppModeContext);
  if (context === undefined) {
    throw new Error('useAppMode must be used within an AppModeProvider');
  }
  return context;
};

interface AppModeProviderProps {
  children: ReactNode;
}

export const AppModeProvider: React.FC<AppModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<AppMode>(() => {
    // Check localStorage for saved preference, default to website mode
    const saved = localStorage.getItem('app-mode');
    return saved ? (saved === 'spa' ? 'spa' : 'website') : 'website';
  });

  useEffect(() => {
    localStorage.setItem('app-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev: AppMode) => prev === 'spa' ? 'website' : 'spa');
  };

  const isWebsiteMode = mode === 'website';

  return (
    <AppModeContext.Provider value={{ mode, isWebsiteMode, toggleMode }}>
      {children}
    </AppModeContext.Provider>
  );
};
