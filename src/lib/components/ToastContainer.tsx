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

  const getPositionClasses = () => {
    switch (finalPosition) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  const getFlexDirection = () => {
    return finalPosition.includes('bottom') ? 'flex-col-reverse' : 'flex-col';
  };

  const getItemsAlignment = () => {
    if (finalPosition.includes('left')) return 'items-start';
    if (finalPosition.includes('right')) return 'items-end';
    return 'items-center';
  };

  return (
    <div
      aria-live="assertive"
      className={`fixed z-50 pointer-events-none ${getPositionClasses()}`}
    >
      <div className={`flex ${getFlexDirection()} ${getItemsAlignment()} space-y-3 pointer-events-auto`}>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </div>
    </div>
  );
};