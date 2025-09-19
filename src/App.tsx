import React from 'react';
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ToastContainer';
import ToastDemo from './components/ToastDemo';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen">
        <ToastDemo />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;