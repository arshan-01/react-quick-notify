import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info,
  Trash2,
  Bell
} from 'lucide-react';

const ToastDemo: React.FC = () => {
  const { toast } = useToast();
  const [customMessage, setCustomMessage] = useState('');

  const handleShowToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'The verification code has been sent to the email address.',
      error: 'Failed to send verification code. Please try again.',
      warning: 'Your session will expire in 5 minutes.',
      info: 'New features are available in the latest update.'
    };

    toast[type](messages[type]);
  };

  const handleCustomToast = () => {
    if (!customMessage.trim()) return;
    
    toast.success(customMessage);
    setCustomMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Bell className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Toast Notification System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clean, simple toast notifications with smooth animations. 
            Perfect for user feedback and status updates.
          </p>
        </div>

        {/* Toast Type Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Toast Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => handleShowToast('success')}
              className="flex flex-col items-center p-6 rounded-lg border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-all duration-200 hover:scale-105 group"
            >
              <CheckCircle className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-green-900">Success</span>
              <span className="text-sm text-green-700 mt-1">Verification sent</span>
            </button>

            <button
              onClick={() => handleShowToast('error')}
              className="flex flex-col items-center p-6 rounded-lg border-2 border-red-200 bg-red-50 hover:bg-red-100 transition-all duration-200 hover:scale-105 group"
            >
              <XCircle className="h-8 w-8 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-red-900">Error</span>
              <span className="text-sm text-red-700 mt-1">Send failed</span>
            </button>

            <button
              onClick={() => handleShowToast('warning')}
              className="flex flex-col items-center p-6 rounded-lg border-2 border-yellow-200 bg-yellow-50 hover:bg-yellow-100 transition-all duration-200 hover:scale-105 group"
            >
              <AlertTriangle className="h-8 w-8 text-yellow-600 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-yellow-900">Warning</span>
              <span className="text-sm text-yellow-700 mt-1">Session expiring</span>
            </button>

            <button
              onClick={() => handleShowToast('info')}
              className="flex flex-col items-center p-6 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all duration-200 hover:scale-105 group"
            >
              <Info className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-blue-900">Info</span>
              <span className="text-sm text-blue-700 mt-1">New features</span>
            </button>
          </div>
        </div>

        {/* Custom Toast Builder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Custom Toast</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <input
                id="message"
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Enter your toast message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && handleCustomToast()}
              />
            </div>
            <button
              onClick={handleCustomToast}
              disabled={!customMessage.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
            >
              Show Toast
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toast.clear()}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 hover:scale-105"
            >
              <Trash2 className="h-4 w-4" />
              Clear All Toasts
            </button>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Usage Example</h3>
          <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`import { useToast } from './hooks/useToast';

const MyComponent = () => {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast.success('The verification code has been sent to the email address.');
  };

  const handleError = () => {
    toast.error('Something went wrong');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  );
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;