import { useToastContext } from '../components/ToastProvider';
import { ToastType, PromiseToastMessages } from '../types/toast';

export const useToast = () => {
  const { addToast, removeToast, clearAllToasts, toasts, updatePromiseToast } = useToastContext();

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
    promise: <T>(promise: Promise<T>, messages: PromiseToastMessages, duration?: number) => {
      const promiseId = Math.random().toString(36).substr(2, 9);
      
      // Add loading toast
      addToast({
        type: 'loading',
        message: messages.loading,
        duration: 0, // Don't auto-dismiss loading toasts
        isPromise: true,
        promiseId,
      });

      // Handle promise resolution
      promise
        .then(() => {
          updatePromiseToast(promiseId, 'success', messages.success);
          // Auto-dismiss success toast after duration
          if (duration && duration > 0) {
            setTimeout(() => {
              removeToast(promiseId);
            }, duration);
          }
        })
        .catch(() => {
          updatePromiseToast(promiseId, 'error', messages.error);
          // Auto-dismiss error toast after duration
          if (duration && duration > 0) {
            setTimeout(() => {
              removeToast(promiseId);
            }, duration);
          }
        });

      return promise;
    },
    dismiss: removeToast,
    clear: clearAllToasts,
  };

  return {
    toast,
    toasts,
  };
};