# How to Use React Quick Notify

## Installation

Users can install your package using any package manager:

```bash
# Using npm
npm install react-quick-notify

# Using yarn
yarn add react-quick-notify

# Using pnpm
pnpm add react-quick-notify
```

## Prerequisites

Your package requires these peer dependencies (users need to have them installed):
- `react` >= 16.8.0
- `react-dom` >= 16.8.0
- `tailwindcss` (for styling)
- `lucide-react` (for icons)

## Step-by-Step Setup

### 1. Wrap App with ToastProvider

First, users need to wrap their entire app with the `ToastProvider`:

```tsx
// App.tsx or main.tsx
import React from 'react';
import { ToastProvider, ToastContainer } from 'react-quick-notify';
import MyComponents from './MyComponents';

function App() {
  return (
    <ToastProvider 
      config={{
        position: 'top-right',
        duration: 5000,
        maxToasts: 5
      }}
    >
      <div className="App">
        {/* All your app components */}
        <MyComponents />
        
        {/* Toast container - uses global config automatically */}
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;
```

### 2. Use Toasts in Components

Then, in any component, users can import and use the `useToast` hook:

```tsx
// MyComponent.tsx
import React from 'react';
import { useToast } from 'react-quick-notify';

function MyComponent() {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast.success('Profile updated successfully!');
  };

  const handleError = () => {
    toast.error('Failed to save changes. Please try again.');
  };

  const handleWarning = () => {
    toast.warning('Your session will expire in 5 minutes.');
  };

  const handleInfo = () => {
    toast.info('New features are now available!');
  };

  return (
    <div className="space-y-4">
      <button 
        onClick={handleSuccess}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Success Toast
      </button>
      
      <button 
        onClick={handleError}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Show Error Toast
      </button>
      
      <button 
        onClick={handleWarning}
        className="px-4 py-2 bg-yellow-500 text-white rounded"
      >
        Show Warning Toast
      </button>
      
      <button 
        onClick={handleInfo}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Info Toast
      </button>
    </div>
  );
}

export default MyComponent;
```

## Real-World Examples

### Form Submission
```tsx
import { useToast } from 'react-quick-notify';

function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = async (formData) => {
    try {
      await submitForm(formData);
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Send Message</button>
    </form>
  );
}
```

### API Calls
```tsx
import { useToast } from 'react-quick-notify';

function UserProfile() {
  const { toast } = useToast();

  const saveProfile = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });

      if (response.ok) {
        toast.success('Profile updated successfully!');
      } else {
        toast.error('Failed to update profile.');
      }
    } catch (error) {
      toast.error('Network error. Please check your connection.');
    }
  };

  return (
    <div>
      {/* profile form */}
      <button onClick={saveProfile}>Save Changes</button>
    </div>
  );
}
```

### File Upload
```tsx
import { useToast } from 'react-quick-notify';

function FileUpload() {
  const { toast } = useToast();

  const handleFileUpload = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.warning('File size must be less than 5MB');
      return;
    }

    try {
      await uploadFile(file);
      toast.success('File uploaded successfully!');
    } catch (error) {
      toast.error('Upload failed. Please try again.');
    }
  };

  return (
    <input 
      type="file" 
      onChange={(e) => handleFileUpload(e.target.files[0])} 
    />
  );
}
```

## Advanced Usage

### Global Configuration

Set default properties for all toasts in your app:

```tsx
<ToastProvider 
  config={{
    position: 'bottom-right',    // Default position for all toasts
    duration: 3000,              // Default duration (3 seconds)
    maxToasts: 3                 // Maximum 3 toasts at once
  }}
>
  <App />
  <ToastContainer /> {/* Uses global position automatically */}
</ToastProvider>
```

### Override Global Settings

You can override global settings when needed:

```tsx
// Override global position for this container
<ToastContainer position="top-center" />

// Override global duration for specific toasts
toast.success('Quick message', 1000);  // 1 second instead of global default
toast.error('Important error', 0);     // Never auto-dismiss
```

### Custom Duration
```tsx
const { toast } = useToast();

// Toast that stays for 10 seconds
toast.success('Long message that needs more time to read', 10000);

// Toast that doesn't auto-dismiss (duration: 0)
toast.error('Critical error - manual dismiss only', 0);
```

### Managing Multiple Toasts
```tsx
const { toast, toasts } = useToast();

// Check how many toasts are active
console.log(`Active toasts: ${toasts.length}`);

// Clear all toasts
const clearAll = () => {
  toast.clear();
};

// Dismiss specific toast (if you store the ID)
const dismissSpecific = (toastId) => {
  toast.dismiss(toastId);
};
```

### Different Positions
```tsx
// Top positions
<ToastContainer position="top-left" />
<ToastContainer position="top-center" />
<ToastContainer position="top-right" />

// Bottom positions
<ToastContainer position="bottom-left" />
<ToastContainer position="bottom-center" />
<ToastContainer position="bottom-right" />
```

## Integration with Popular Frameworks

### Next.js
```tsx
// pages/_app.tsx
import { ToastProvider, ToastContainer } from 'react-quick-notify';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ToastProvider>
  );
}

export default MyApp;
```

### React Router
```tsx
// App.tsx
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider, ToastContainer } from 'react-quick-notify';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          {/* your routes */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ToastProvider>
  );
}
```

### Redux/Context Integration
```tsx
// In a Redux action or Context
import { store } from './store';

// You can't use hooks in actions, so you'd need to pass toast functions
// or use a toast service pattern

const saveUserAction = (userData, toast) => {
  return async (dispatch) => {
    try {
      const result = await api.saveUser(userData);
      dispatch(saveUserSuccess(result));
      toast.success('User saved successfully!');
    } catch (error) {
      dispatch(saveUserError(error));
      toast.error('Failed to save user');
    }
  };
};
```

## Common Patterns

### Loading States
```tsx
const { toast } = useToast();
const [loading, setLoading] = useState(false);

const handleAction = async () => {
  setLoading(true);
  toast.info('Processing your request...');
  
  try {
    await performAction();
    toast.success('Action completed successfully!');
  } catch (error) {
    toast.error('Action failed. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### Validation Messages
```tsx
const { toast } = useToast();

const validateForm = (data) => {
  if (!data.email) {
    toast.warning('Email is required');
    return false;
  }
  
  if (!data.email.includes('@')) {
    toast.error('Please enter a valid email address');
    return false;
  }
  
  return true;
};
```

## TypeScript Support

The package includes full TypeScript support:

```tsx
import { Toast, ToastType, useToast } from 'react-quick-notify';

// Type-safe usage
const { toast } = useToast();

// All methods are properly typed
toast.success('message'); // ✅
toast.error('message', 5000); // ✅
toast.custom('info', 'message'); // ✅
```

## Troubleshooting

### Common Issues

1. **Toasts not appearing**: Make sure `ToastContainer` is placed inside `ToastProvider`
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **Icons not showing**: Install `lucide-react` dependency
4. **TypeScript errors**: Make sure you're importing from the correct path

### Required Tailwind Classes

Make sure these Tailwind classes are available in your project:
- Layout: `fixed`, `top-4`, `right-4`, `z-50`, `flex`, `items-center`
- Colors: `bg-green-100`, `text-green-600`, `border-green-200`
- Spacing: `p-4`, `px-4`, `py-3`, `gap-3`, `space-y-3`
- Effects: `rounded-lg`, `shadow-sm`, `transition-all`, `duration-300`

That's it! Your users will have a beautiful, fully-functional toast notification system in their React applications.