import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info,
  Trash2,
  Bell,
  Download,
  Github,
  ExternalLink,
  Copy,
  Timer,
  Settings,
  Code
} from 'lucide-react';

const ToastDemo: React.FC = () => {
  const { toast } = useToast();
  const [customMessage, setCustomMessage] = useState('');
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
  const [duration, setDuration] = useState(5000);
  const [copiedCode, setCopiedCode] = useState('');

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
    
    toast.success(customMessage, duration);
    setCustomMessage('');
  };

  const copyToClipboard = (text: string, codeType: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(codeType);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const installCode = 'npm install react-quick-notify';
  const basicUsageCode = `import React from 'react';
import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify';

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <YourAppContent />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

function MyComponent() {
  const { toast } = useToast();
  
  return (
    <button onClick={() => toast.success('Hello World!')}>
      Show Toast
    </button>
  );
}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Bell className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React Quick Notify
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A beautiful, customizable toast notification system for React applications. 
            Built with TypeScript, styled with Tailwind CSS, and designed for modern web apps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a 
              href="https://github.com/arshan-01/react-quick-notify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/react-quick-notify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 hover:scale-105"
            >
              <Download className="h-5 w-5" />
              npm Package
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              TypeScript Support
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Tailwind CSS
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Zero Dependencies
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Fully Customizable
            </span>
          </div>
        </div>

        {/* Installation Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Download className="h-6 w-6 text-blue-600" />
            Quick Start
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">1. Install the package</h3>
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <code>{installCode}</code>
                </div>
                <button
                  onClick={() => copyToClipboard(installCode, 'install')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedCode === 'install' ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">2. Basic setup</h3>
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <pre><code>{basicUsageCode}</code></pre>
                </div>
                <button
                  onClick={() => copyToClipboard(basicUsageCode, 'basic')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedCode === 'basic' ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
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

        {/* Configuration Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Position Demo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Settings className="h-6 w-6 text-purple-600" />
              Position Demo
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Toast Position
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value as any)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                  <option value="top-center">Top Center</option>
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-center">Bottom Center</option>
                </select>
              </div>
              <button
                onClick={() => toast.info(`Toast positioned at: ${position}`, duration)}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 hover:scale-105"
              >
                Test Position
              </button>
            </div>
          </div>

          {/* Duration Demo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Timer className="h-6 w-6 text-indigo-600" />
              Duration Demo
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration: {duration === 0 ? 'No auto-dismiss' : `${duration / 1000}s`}
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="1000"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>No dismiss</span>
                  <span>10s</span>
                </div>
              </div>
              <button
                onClick={() => toast.warning(`This toast will ${duration === 0 ? 'not auto-dismiss' : `disappear in ${duration / 1000}s`}`, duration)}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
              >
                Test Duration
              </button>
            </div>
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

        {/* Features Showcase */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">✨ Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">TypeScript Ready</h3>
              <p className="text-gray-600 text-sm">Full TypeScript support with comprehensive type definitions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Highly Customizable</h3>
              <p className="text-gray-600 text-sm">Configure position, duration, styling, and behavior</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Timer className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto Dismiss</h3>
              <p className="text-gray-600 text-sm">Configurable auto-dismiss timing or persistent toasts</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bell className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Types</h3>
              <p className="text-gray-600 text-sm">Success, error, warning, and info toast variants</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightweight</h3>
              <p className="text-gray-600 text-sm">Minimal bundle size with zero external dependencies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600 text-sm">MIT licensed and community driven development</p>
            </div>
          </div>
        </div>

        {/* Advanced Usage Examples */}
        <div className="bg-gray-900 rounded-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <Code className="h-6 w-6" />
            Advanced Usage Examples
          </h3>
          
          <div className="space-y-6">
            {/* Basic Usage */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-200">Basic Usage</h4>
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`import { useToast } from 'react-quick-notify';

const MyComponent = () => {
  const { toast } = useToast();

  return (
    <div>
      <button onClick={() => toast.success('Success!')}>
        Success
      </button>
      <button onClick={() => toast.error('Error occurred!')}>
        Error
      </button>
      <button onClick={() => toast.warning('Warning!')}>
        Warning
      </button>
      <button onClick={() => toast.info('Information')}>
        Info
      </button>
    </div>
  );
};`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(`import { useToast } from 'react-quick-notify';

const MyComponent = () => {
  const { toast } = useToast();

  return (
    <div>
      <button onClick={() => toast.success('Success!')}>
        Success
      </button>
      <button onClick={() => toast.error('Error occurred!')}>
        Error
      </button>
      <button onClick={() => toast.warning('Warning!')}>
        Warning
      </button>
      <button onClick={() => toast.info('Information')}>
        Info
      </button>
    </div>
  );
};`, 'usage')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedCode === 'usage' ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Custom Duration */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-200">Custom Duration & Actions</h4>
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`const { toast } = useToast();

// Custom duration (10 seconds)
toast.success('Long message', 10000);

// No auto-dismiss (0 = persistent)
toast.error('Critical error', 0);

// Clear all toasts
toast.clear();

// Access current toasts
const { toasts } = useToast();
console.log(\`Active toasts: \${toasts.length}\`);`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(`const { toast } = useToast();

// Custom duration (10 seconds)
toast.success('Long message', 10000);

// No auto-dismiss (0 = persistent)
toast.error('Critical error', 0);

// Clear all toasts
toast.clear();

// Access current toasts
const { toasts } = useToast();
console.log(\`Active toasts: \${toasts.length}\`);`, 'advanced')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedCode === 'advanced' ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Made with ❤️ by{' '}
            <a 
              href="https://github.com/arshan-01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Arshan
            </a>
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/arshan-01/react-quick-notify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/react-quick-notify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Download className="h-5 w-5" />
              npm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;