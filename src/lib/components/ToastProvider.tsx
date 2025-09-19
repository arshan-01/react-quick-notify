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
    ...config,
  };

  const addToast = useCallback((toastData: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      duration: defaultConfig.duration,
      ...toastData,
    };

    setToasts(prev => {
      const newToasts = [...prev, newToast];
      // Limit number of toasts if maxToasts is set
      if (defaultConfig.maxToasts && newToasts.length > defaultConfig.maxToasts) {
        return newToasts.slice(-defaultConfig.maxToasts);
      }
      return newToasts;
    });

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  }, [defaultConfig.duration, defaultConfig.maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

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