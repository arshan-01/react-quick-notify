import React, { useState } from 'react';
import { ToastProvider } from './lib/components/ToastProvider';
import { ToastContainer } from './lib/components/ToastContainer';
import ToastDemo from './components/ToastDemo';

function App() {
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');

  return (
    <ToastProvider config={{ position }}>
      <div className="min-h-screen">
        <ToastDemo position={position} setPosition={setPosition} />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;