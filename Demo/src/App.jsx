import { useState } from 'react'
import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify'
// import { ToastProvider, ToastContainer, useToast } from './ToastDemo' // Uncomment for local development
import './App.css'

// Main Demo Component
function ToastDemo() {
  const { toast, toasts } = useToast()
  const [copiedId, setCopiedId] = useState('')
  const [currentOrder, setCurrentOrder] = useState('reverse') // 'reverse' or 'normal'

  const handleSuccess = () => {
    toast.success('Operation completed successfully! 🎉')
  }

  const handleError = () => {
    toast.error('Something went wrong! Please try again.')
  }

  const handleWarning = () => {
    toast.warning('Please check your input before proceeding.')
  }

  const handleInfo = () => {
    toast.info('Here is some useful information for you.')
  }

  const handleLongMessage = () => {
    toast.success('This is a very long message to test how the toast component handles lengthy content and ensures proper text wrapping and display formatting.')
  }

  const handleCustomDuration = () => {
    toast.success('This toast will stay for 8 seconds!', 8000)
  }

  const handlePersistent = () => {
    toast.error('This toast will not auto-dismiss (click X to close)', 0)
  }

  const handlePromise = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('Success!') : reject('Failed!')
      }, 2000)
    })

    toast.promise(promise, {
      loading: 'Processing your request...',
      success: 'Request completed successfully!',
      error: 'Request failed. Please try again.'
    })
  }

  const handleClearAll = () => {
    toast.clear()
  }

  const copyToClipboard = async (text, id, description = '') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      toast.success(`${description || 'Code'} copied to clipboard! 📋`)
      // Reset after 3 seconds
      setTimeout(() => setCopiedId(''), 3000)
    } catch (err) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const testReverseOrder = () => {
    toast.clear() // Clear existing toasts first
    setCurrentOrder('reverse')
    toast.info('Testing REVERSE order (newest first)', 6000)
    setTimeout(() => toast.success('🥇 First toast (should be at bottom)'), 200)
    setTimeout(() => toast.warning('🥈 Second toast (should be in middle)'), 400)
    setTimeout(() => toast.error('🥉 Third toast (should be at top)'), 600)
  }

  const testNormalOrder = () => {
    toast.clear() // Clear existing toasts first
    setCurrentOrder('normal')
    toast.info('Testing NORMAL order (oldest first)', 6000)
    setTimeout(() => toast.success('🥇 First toast (should be at top)'), 200)
    setTimeout(() => toast.warning('🥈 Second toast (should be in middle)'), 400)
    setTimeout(() => toast.error('🥉 Third toast (should be at bottom)'), 600)
  }

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1 className="demo-title">
          <span className="toast-icon">🍞</span>
          React Quick Notify
        </h1>
        <p className="demo-subtitle">
          A modern, lightweight toast notification library for React
        </p>
        <div className="stats-badge">
          Active toasts: <span className="stats-count">{toasts.length}</span>
        </div>
      </header>

      <main className="demo-content">
        <section className="demo-section">
          <h2 className="section-title">Basic Toast Types</h2>
          <div className="button-grid">
            <button onClick={handleSuccess} className="btn btn-success">
              <span className="btn-icon">✅</span>
              Success Toast
            </button>
            <button onClick={handleError} className="btn btn-error">
              <span className="btn-icon">❌</span>
              Error Toast
            </button>
            <button onClick={handleWarning} className="btn btn-warning">
              <span className="btn-icon">⚠️</span>
              Warning Toast
            </button>
            <button onClick={handleInfo} className="btn btn-info">
              <span className="btn-icon">ℹ️</span>
              Info Toast
            </button>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Advanced Features</h2>
          <div className="button-grid">
            <button onClick={handleLongMessage} className="btn btn-info">
              <span className="btn-icon">📝</span>
              Long Message
            </button>
            <button onClick={handleCustomDuration} className="btn btn-warning">
              <span className="btn-icon">⏱️</span>
              Custom Duration
            </button>
            <button onClick={handlePersistent} className="btn btn-error">
              <span className="btn-icon">📌</span>
              Persistent Toast
            </button>
            <button onClick={handlePromise} className="btn btn-success">
              <span className="btn-icon">🔄</span>
              Promise Toast
            </button>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Toast Order Demo</h2>
          <div className="button-grid">
            <button onClick={testReverseOrder} className="btn btn-info">
              <span className="btn-icon">🔄</span>
              Test Reverse Order
            </button>
            <button onClick={testNormalOrder} className="btn btn-warning">
              <span className="btn-icon">📊</span>
              Test Normal Order
            </button>
          </div>
          <div className="order-explanation">
            <div className="order-option">
              <strong>🔄 Reverse Order (reverseOrder: true)</strong>
              <p>Newest toasts appear at the top, older ones push down</p>
            </div>
            <div className="order-option">
              <strong>📊 Normal Order (reverseOrder: false)</strong>
              <p>Oldest toasts stay at the top, newer ones appear below</p>
            </div>
          </div>
          <p className="demo-note">
            Current demo is configured with: <strong>reverseOrder: true</strong>
          </p>
        </section>

        <section className="demo-section">
          <h2 className="section-title">Actions</h2>
          <div className="button-grid">
            <button onClick={handleClearAll} className="btn btn-neutral">
              <span className="btn-icon">🗑️</span>
              Clear All Toasts
            </button>
          </div>
        </section>

        {/* <section className="toast-preview-section">
          <h2 className="section-title">Toast Preview</h2>
          <p className="preview-subtitle">This is how your toasts will actually look:</p>
          <div className="toast-previews">
            <div className="toast-preview toast-preview-success">
              <div className="toast-preview-content">
                <span className="toast-preview-icon">✅</span>
                <span className="toast-preview-text">Operation completed successfully!</span>
              </div>
              <button className="toast-preview-close">×</button>
            </div>
            <div className="toast-preview toast-preview-error">
              <div className="toast-preview-content">
                <span className="toast-preview-icon">❌</span>
                <span className="toast-preview-text">Something went wrong!</span>
              </div>
              <button className="toast-preview-close">×</button>
            </div>
            <div className="toast-preview toast-preview-warning">
              <div className="toast-preview-content">
                <span className="toast-preview-icon">⚠️</span>
                <span className="toast-preview-text">Please check your input</span>
              </div>
              <button className="toast-preview-close">×</button>
            </div>
            <div className="toast-preview toast-preview-info">
              <div className="toast-preview-content">
                <span className="toast-preview-icon">ℹ️</span>
                <span className="toast-preview-text">Here is some information</span>
              </div>
              <button className="toast-preview-close">×</button>
            </div>
          </div>
        </section> */}

        <section className="info-section">
          <h3 className="info-title">📦 Installation</h3>
          <div className="installation-guide">
            <div className="code-block">
              <div className="code-header">
                <span className="code-title">Install via npm</span>
                <button 
                  className={`copy-btn ${copiedId === 'npm-install' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard('npm install react-quick-notify', 'npm-install', 'NPM command')}
                >
                  {copiedId === 'npm-install' ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <code className="code-content">npm install react-quick-notify</code>
            </div>
            
            <div className="code-block">
              <div className="code-header">
                <span className="code-title">Or with yarn</span>
                <button 
                  className={`copy-btn ${copiedId === 'yarn-install' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard('yarn add react-quick-notify', 'yarn-install', 'Yarn command')}
                >
                  {copiedId === 'yarn-install' ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <code className="code-content">yarn add react-quick-notify</code>
            </div>
            
            <div className="code-block">
              <div className="code-header">
                <span className="code-title">Or with pnpm</span>
                <button 
                  className={`copy-btn ${copiedId === 'pnpm-install' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard('pnpm add react-quick-notify', 'pnpm-install', 'PNPM command')}
                >
                  {copiedId === 'pnpm-install' ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <code className="code-content">pnpm add react-quick-notify</code>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h3 className="info-title">🚀 Quick Start</h3>
          <div className="setup-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="step-title">Import CSS</h4>
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-title">In your main.jsx or App.jsx</span>
                    <button 
                      className={`copy-btn ${copiedId === 'css-import' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard("import 'react-quick-notify/dist/toast.css'", 'css-import', 'CSS import')}
                    >
                      {copiedId === 'css-import' ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <code className="code-content">import 'react-quick-notify/dist/toast.css'</code>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="step-title">Setup Provider</h4>
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-title">Wrap your app</span>
                    <button 
                      className={`copy-btn ${copiedId === 'provider-setup' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(`import { ToastProvider, ToastContainer } from 'react-quick-notify'

function App() {
  return (
    <ToastProvider config={{ position: 'top-right', duration: 4000 }}>
      <YourAppContent />
      <ToastContainer />
    </ToastProvider>
  )
}`, 'provider-setup', 'Provider setup')}
                    >
                      {copiedId === 'provider-setup' ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <pre className="code-content">{`import { ToastProvider, ToastContainer } from 'react-quick-notify'

function App() {
  return (
    <ToastProvider config={{ 
      position: 'top-right', 
      duration: 4000 
    }}>
      <YourAppContent />
      <ToastContainer />
    </ToastProvider>
  )
}`}</pre>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="step-title">Use in Components</h4>
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-title">Component usage</span>
                    <button 
                      className={`copy-btn ${copiedId === 'component-usage' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(`import { useToast } from 'react-quick-notify'

function MyComponent() {
  const { toast } = useToast()

  const handleClick = () => {
    toast.success('Hello World!')
  }

  return <button onClick={handleClick}>Show Toast</button>
}`, 'component-usage', 'Component usage')}
                    >
                      {copiedId === 'component-usage' ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                  <pre className="code-content">{`import { useToast } from 'react-quick-notify'

function MyComponent() {
  const { toast } = useToast()

  const handleClick = () => {
    toast.success('Hello World!')
  }

  return <button onClick={handleClick}>Show Toast</button>
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h3 className="info-title">💡 Features</h3>
          <ul className="feature-list">
            <li>🎨 Modern and clean design</li>
            <li>📱 Fully responsive</li>
            <li>⚡ Lightweight and fast</li>
            <li>🔧 Highly customizable</li>
            <li>♿ Accessible by default</li>
            <li>🎭 Multiple animation options</li>
            <li>🎯 TypeScript support</li>
            <li>🔄 Promise integration</li>
          </ul>
        </section>

        <section className="info-section">
          <h3 className="info-title">🔧 API Reference</h3>
          <div className="api-examples">
            <div className="api-item">
              <h4 className="api-title">Toast Methods</h4>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-title">Available methods</span>
                  <button 
                    className={`copy-btn ${copiedId === 'toast-methods' ? 'copied' : ''}`}
                    onClick={() => copyToClipboard(`const { toast } = useToast()

// Basic toasts
toast.success('Success message')
toast.error('Error message')
toast.warning('Warning message')
toast.info('Info message')

// Custom duration (milliseconds)
toast.success('Custom duration', 10000)

// Persistent toast (duration: 0)
toast.error('Persistent toast', 0)

// Clear all toasts
toast.clear()`, 'toast-methods', 'Toast methods')}
                  >
                    {copiedId === 'toast-methods' ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <pre className="code-content">{`const { toast } = useToast()

// Basic toasts
toast.success('Success message')
toast.error('Error message')
toast.warning('Warning message')
toast.info('Info message')

// Custom duration (milliseconds)
toast.success('Custom duration', 10000)

// Persistent toast (duration: 0)
toast.error('Persistent toast', 0)

// Clear all toasts
toast.clear()`}</pre>
              </div>
            </div>

            <div className="api-item">
              <h4 className="api-title">Configuration Options</h4>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-title">Provider config</span>
                  <button 
                    className={`copy-btn ${copiedId === 'config-options' ? 'copied' : ''}`}
                    onClick={() => copyToClipboard(`<ToastProvider config={{
  position: 'top-right',     // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  duration: 4000,            // Auto-dismiss duration in ms (0 = no auto-dismiss)
  maxToasts: 0,              // Maximum number of toasts (0 = unlimited)
  reverseOrder: true         // New toasts appear first
}}>`, 'config-options', 'Configuration options')}
                  >
                    {copiedId === 'config-options' ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <pre className="code-content">{`<ToastProvider config={{
  position: 'top-right',     // Position
  duration: 4000,            // Duration in ms
  maxToasts: 0,              // Max toasts (0 = unlimited)
  reverseOrder: true         // Order
}}>`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h3 className="info-title">📋 Demo Instructions</h3>
          <ol className="instruction-list">
            <li>Click different toast type buttons to see various notifications</li>
            <li>Observe the smooth animations and auto-dismiss behavior</li>
            <li>Try the custom duration and persistent toasts</li>
            <li>Test the promise toast to see loading states</li>
            <li>Compare the different toast ordering behaviors</li>
            <li>Use "Clear All" to dismiss all active toasts</li>
          </ol>
        </section>
      </main>

      <footer className="demo-footer">
        <p>
          Built with ❤️ using React Quick Notify | 
          <a href="https://github.com/arshan-01/react-quick-notify" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          | 
          <a href="https://www.npmjs.com/package/react-quick-notify" target="_blank" rel="noopener noreferrer">
            NPM Package
          </a>
        </p>
      </footer>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <ToastProvider 
      config={{ 
        position: 'top-right', 
        duration: 4000, 
        maxToasts: 0, // 0 = unlimited for demo
        reverseOrder: true 
      }}
    >
      <ToastDemo />
      <ToastContainer />
    </ToastProvider>
  )
}

export default App