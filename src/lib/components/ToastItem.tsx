import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info, 
  X 
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

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-100 border border-green-200';
      case 'error':
        return 'bg-red-100 border border-red-200';
      case 'warning':
        return 'bg-yellow-100 border border-yellow-200';
      case 'info':
        return 'bg-blue-100 border border-blue-200';
      default:
        return 'bg-gray-100 border border-gray-200';
    }
  };

  const getIcon = () => {
    const baseIconClass = "h-5 w-5 flex-shrink-0";
    const animationClass = iconAnimated 
      ? "scale-100 opacity-100 rotate-0 animate-pulse" 
      : "scale-0 opacity-0 -rotate-90";
    const iconClass = `${baseIconClass} ${animationClass} transition-all duration-700 ease-out`;
    
    switch (toast.type) {
      case 'success':
        return <CheckCircle className={`${iconClass} text-green-600`} />;
      case 'error':
        return <XCircle className={`${iconClass} text-red-600`} />;
      case 'warning':
        return <AlertTriangle className={`${iconClass} text-yellow-600`} />;
      case 'info':
        return <Info className={`${iconClass} text-blue-600`} />;
      default:
        return <Info className={`${iconClass} text-gray-600`} />;
    }
  };

  const getTextColor = () => {
    switch (toast.type) {
      case 'success':
        return 'text-green-700';
      case 'error':
        return 'text-red-700';
      case 'warning':
        return 'text-yellow-700';
      case 'info':
        return 'text-blue-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div
      className={`
        rounded-lg px-4 py-3 shadow-sm transition-all duration-300 ease-out transform max-w-md
        ${getToastStyles()}
        ${isVisible && !isLeaving ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}
        ${isLeaving ? 'translate-x-full opacity-0 scale-95' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        {getIcon()}
        <p className={`text-sm font-medium ${getTextColor()} flex-1`}>
          {toast.message}
        </p>
        <button
          onClick={handleDismiss}
          className={`flex-shrink-0 p-1 rounded-md hover:bg-white/50 transition-colors ${getTextColor()}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};