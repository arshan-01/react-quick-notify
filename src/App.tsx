import React, { useState } from 'react';
import { ToastProvider } from './lib/components/ToastProvider';
import { ToastContainer } from './lib/components/ToastContainer';
import ToastDemo from './components/ToastDemo';

function App() {
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
  const [reverseOrder, setReverseOrder] = useState(false);

  return (
    <ToastProvider config={{ position, reverseOrder }}>
      <div className="min-h-screen">
        <ToastDemo 
          position={position} 
          setPosition={setPosition}
          reverseOrder={reverseOrder}
          setReverseOrder={setReverseOrder}
        />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;