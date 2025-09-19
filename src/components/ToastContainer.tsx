import React from 'react';
import { useToast } from '../hooks/useToast';
import ToastItem from './ToastItem';

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      className="fixed top-4 right-4 z-50 pointer-events-none"
    >
      <div className="flex flex-col items-end space-y-3 pointer-events-auto">
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;