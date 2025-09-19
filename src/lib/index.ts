// Main exports for the npm package
export { ToastProvider } from './components/ToastProvider';
export { useToast } from './hooks/useToast';
export { ToastContainer } from './components/ToastContainer';

// Type exports
export type { Toast, ToastType, ToastContextType, ToastConfig } from './types/toast';

// Optional: Export individual components if users want more control
export { ToastItem } from './components/ToastItem';

// CSS import - Note: Users need to import the CSS file separately
// import 'react-quick-notify/dist/toast.css';