import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info, 
  X,
  Loader2
} from 'lucide-react';
import { Toast } from '../types/toast';
import { useToastContext } from './ToastProvider';

interface ToastItemProps {
  toast: Toast;
}

export const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  const { removeToast } = useToastContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [iconAnimated, setIconAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    const iconTimer = setTimeout(() => setIconAnimated(true), 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(iconTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      removeToast(toast.id);
    }, 300);
  };

  const getToastTypeClass = () => {
    switch (toast.type) {
      case 'success':
        return 'rqn-toast-item--success';
      case 'error':
        return 'rqn-toast-item--error';
      case 'warning':
        return 'rqn-toast-item--warning';
      case 'info':
        return 'rqn-toast-item--info';
      case 'loading':
        return 'rqn-toast-item--loading';
      default:
        return 'rqn-toast-item--default';
    }
  };

  const getIcon = () => {
    const iconClass = `rqn-toast-icon ${
      iconAnimated ? 'rqn-toast-icon--animated' : ''
    }`;
    
    switch (toast.type) {
      case 'success':
        return <CheckCircle className={`${iconClass} rqn-toast-icon--success`} />;
      case 'error':
        return <XCircle className={`${iconClass} rqn-toast-icon--error`} />;
      case 'warning':
        return <AlertTriangle className={`${iconClass} rqn-toast-icon--warning`} />;
      case 'info':
        return <Info className={`${iconClass} rqn-toast-icon--info`} />;
      case 'loading':
        return <Loader2 className={`${iconClass} rqn-toast-icon--loading rqn-toast-icon--spinning`} />;
      default:
        return <Info className={`${iconClass} rqn-toast-icon--default`} />;
    }
  };

  const getMessageClass = () => {
    switch (toast.type) {
      case 'success':
        return 'rqn-toast-message--success';
      case 'error':
        return 'rqn-toast-message--error';
      case 'warning':
        return 'rqn-toast-message--warning';
      case 'info':
        return 'rqn-toast-message--info';
      case 'loading':
        return 'rqn-toast-message--loading';
      default:
        return 'rqn-toast-message--default';
    }
  };

  const getCloseButtonClass = () => {
    switch (toast.type) {
      case 'success':
        return 'rqn-toast-close--success';
      case 'error':
        return 'rqn-toast-close--error';
      case 'warning':
        return 'rqn-toast-close--warning';
      case 'info':
        return 'rqn-toast-close--info';
      case 'loading':
        return 'rqn-toast-close--loading';
      default:
        return 'rqn-toast-close--default';
    }
  };

  return (
    <div
      className={`rqn-toast-item ${getToastTypeClass()} ${
        isVisible && !isLeaving ? 'rqn-toast-item--visible' : ''
      } ${isLeaving ? 'rqn-toast-item--leaving' : ''}`}
    >
      <div className="rqn-toast-content">
        {getIcon()}
        <p className={`rqn-toast-message ${getMessageClass()}`}>
          {toast.message}
        </p>
        <button
          onClick={handleDismiss}
          className={`rqn-toast-close ${getCloseButtonClass()}`}
        >
          <X className="rqn-toast-close-icon" />
        </button>
      </div>
    </div>
  );
};