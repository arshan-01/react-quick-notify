import React from 'react';
import { useToastContext } from './ToastProvider';
import { ToastItem } from './ToastItem';

interface ToastContainerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ 
  position 
}) => {
  const { toasts, config } = useToastContext();
  
  // Use position prop or fall back to global config
  const finalPosition = position || config.position || 'top-right';

  if (toasts.length === 0) {
    return null;
  }

  const getPositionClass = () => {
    switch (finalPosition) {
      case 'top-left':
        return 'rqn-toast-container--top-left';
      case 'top-center':
        return 'rqn-toast-container--top-center';
      case 'top-right':
        return 'rqn-toast-container--top-right';
      case 'bottom-left':
        return 'rqn-toast-container--bottom-left';
      case 'bottom-center':
        return 'rqn-toast-container--bottom-center';
      case 'bottom-right':
        return 'rqn-toast-container--bottom-right';
      default:
        return 'rqn-toast-container--top-right';
    }
  };

  const getContainerDirection = () => {
    return finalPosition.includes('bottom') ? 'rqn-toast-container--reverse' : '';
  };

  return (
    <div
      aria-live="assertive"
      className={`rqn-toast-container ${getPositionClass()} ${getContainerDirection()}`}
    >
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};