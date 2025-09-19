import { useToastContext } from '../components/ToastProvider';
import { ToastType } from '../types/toast';

export const useToast = () => {
  const { addToast, removeToast, clearAllToasts, toasts } = useToastContext();

  const toast = {
    success: (message: string, duration?: number) => {
      addToast({
        type: 'success',
        message,
        duration,
      });
    },
    error: (message: string, duration?: number) => {
      addToast({
        type: 'error',
        message,
        duration,
      });
    },
    warning: (message: string, duration?: number) => {
      addToast({
        type: 'warning',
        message,
        duration,
      });
    },
    info: (message: string, duration?: number) => {
      addToast({
        type: 'info',
        message,
        duration,
      });
    },
    custom: (type: ToastType, message: string, duration?: number) => {
      addToast({
        type,
        message,
        duration,
      });
    },
    dismiss: removeToast,
    clear: clearAllToasts,
  };

  return {
    toast,
    toasts,
  };
};