export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading';

export interface ToastConfig {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  duration?: number;
  maxToasts?: number;
  reverseOrder?: boolean; // true = new toasts first, false = old toasts first
}

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  isPromise?: boolean;
  promiseId?: string; // For tracking promise toasts
}

export interface PromiseToastMessages {
  loading: string;
  success: string;
  error: string;
}

export interface ToastContextType {
  toasts: Toast[];
  config: ToastConfig;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearAllToasts: () => void;
  updatePromiseToast: (promiseId: string, type: ToastType, message: string) => void;
}