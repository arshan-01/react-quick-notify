import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toast, ToastContextType, ToastConfig } from '../types/toast';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
  config?: ToastConfig;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const defaultConfig: ToastConfig = {
    position: 'top-right',
    duration: 5000,
    maxToasts: 5,
    reverseOrder: false, // default: old toasts first (new at bottom)
    ...config,
  };

  // Extract config values for useCallback dependencies
  const configDuration = defaultConfig.duration;
  const configMaxToasts = defaultConfig.maxToasts;

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((toastData: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      ...toastData,
      duration: toastData.duration ?? configDuration, // Use provided duration or fall back to config
    };

    setToasts(prev => {
      const newToasts = [...prev, newToast];
      // Limit number of toasts if maxToasts is set
      if (configMaxToasts && newToasts.length > configMaxToasts) {
        return newToasts.slice(-configMaxToasts);
      }
      return newToasts;
    });

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  }, [configDuration, configMaxToasts, removeToast]);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const value: ToastContextType = {
    toasts,
    config: defaultConfig,
    addToast,
    removeToast,
    clearAllToasts,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};