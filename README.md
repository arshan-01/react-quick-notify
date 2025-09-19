# React Quick Notify

A beautiful, customizable toast notification system for React applications built with TypeScript and Tailwind CSS.

## Features

- 🎨 Beautiful, modern design with smooth animations
- 🎯 TypeScript support with full type safety
- 🎨 Tailwind CSS styling (customizable)
- 📱 Responsive design
- ⚡ Lightweight and performant
- 🔧 Highly customizable
- 🎪 Multiple toast types (success, error, warning, info)
- 📍 Configurable positioning
- ⏱️ Auto-dismiss with customizable duration
- 🎭 Smooth enter/exit animations

## Installation

```bash
npm install react-quick-notify
# or
yarn add react-quick-notify
# or
pnpm add react-quick-notify
```

## Prerequisites

This package requires:
- React 16.8+ (hooks support)
- lucide-react (for icons)

**Note:** Tailwind CSS is no longer required! The package now includes its own CSS file.

## Quick Start

1. **Import the CSS file** in your main application file:

```css
/* In your main CSS file */
@import 'react-quick-notify/dist/toast.css';
```

Or in your JavaScript/TypeScript file:

```tsx
// In your App.tsx or main entry file
import 'react-quick-notify/dist/toast.css';
```

2. **Wrap your app with ToastProvider:**

```tsx
import React from 'react';
import { ToastProvider, ToastContainer } from 'react-quick-notify';

function App() {
  return (
    <ToastProvider>
      <div className="App">
        {/* Your app content */}
        <YourAppContent />
        
        {/* Toast container - place this at the root level */}
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;
```

3. **Use the toast hook in your components:**

```tsx
import React from 'react';
import { useToast } from 'react-quick-notify';

function MyComponent() {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast.success('Operation completed successfully!');
  };

  const handleError = () => {
    toast.error('Something went wrong!');
  };

  const handleWarning = () => {
    toast.warning('Please check your input.');
  };

  const handleInfo = () => {
    toast.info('Here is some information.');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleWarning}>Show Warning</button>
      <button onClick={handleInfo}>Show Info</button>
    </div>
  );
}
```

## API Reference

### ToastProvider

Wrap your application with this provider to enable toast functionality.

```tsx
<ToastProvider config={{ 
  position: 'top-right', 
  duration: 3000, 
  maxToasts: 3, 
  reverseOrder: true 
}}>
  {/* Your app */}
</ToastProvider>
```

**Props:**
- `config` (optional): Global configuration object
  - `position`: Default position for all toasts (`'top-right'` | `'top-left'` | `'bottom-right'` | `'bottom-left'` | `'top-center'` | `'bottom-center'`)
  - `duration`: Default duration in milliseconds (0 = no auto-dismiss)
  - `maxToasts`: Maximum number of toasts to show at once
  - `reverseOrder`: Whether new toasts appear first (`true`) or last (`false`)

### ToastContainer

Place this component where you want toasts to appear. Usually at the root level of your app.

```tsx
<ToastContainer position="top-right" />
```

**Props:**
- `position` (optional): Override the global position for this container
  - If not provided, uses the position from ToastProvider config
  - If no global config, defaults to `'top-right'`

### useToast Hook

The main hook for creating and managing toasts.

```tsx
const { toast, toasts } = useToast();
```

**Returns:**
- `toast`: Object with methods to create different types of toasts
- `toasts`: Array of current active toasts

**Toast Methods:**
- `toast.success(message, duration?)`: Show success toast
- `toast.error(message, duration?)`: Show error toast
- `toast.warning(message, duration?)`: Show warning toast
- `toast.info(message, duration?)`: Show info toast
- `toast.custom(type, message, duration?)`: Show custom toast
- `toast.dismiss(id)`: Dismiss specific toast
- `toast.clear()`: Clear all toasts

**Parameters:**
- `message` (string): The toast message
- `duration` (number, optional): Auto-dismiss duration in milliseconds (default: 5000)
- `type` (ToastType): Toast type for custom toasts
- `id` (string): Toast ID for dismissing specific toasts

## Styling

This package includes its own CSS file with all necessary styles. No external CSS framework is required!

### Built-in Styles

The package includes:
- Responsive design that works on all screen sizes
- Smooth animations and transitions
- Dark mode support (automatically detects system preference)
- Beautiful color schemes for different toast types
- Accessible focus states and ARIA attributes

### Customization

You can customize the appearance by:

1. **Overriding CSS classes** in your own stylesheet:
```css
/* Override toast colors */
.rqn-toast-item--success {
  background-color: #your-color;
  border-color: #your-border-color;
}

/* Override toast positioning */
.rqn-toast-container {
  z-index: 9999; /* Custom z-index */
}
```

2. **Using CSS custom properties** for global theming:
```css
:root {
  --rqn-success-bg: #f0fdf4;
  --rqn-success-border: #bbf7d0;
  --rqn-success-text: #15803d;
}
```

3. **Extending the components** by copying and modifying them

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import { Toast, ToastType, ToastContextType } from 'react-quick-notify';
```

## Examples

### Global Configuration

```tsx
// Set global defaults for all toasts
function App() {
  return (
    <ToastProvider 
      config={{
        position: 'bottom-right',
        duration: 3000,
        maxToasts: 3,
        reverseOrder: true  // New toasts appear first
      }}
    >
      <MyComponents />
      {/* No need to specify position - uses global config */}
      <ToastContainer />
    </ToastProvider>
  );
}
```

### Override Global Settings

```tsx
// Override global position for specific container
<ToastContainer position="top-center" />

// Override global duration for specific toast
toast.success('Custom duration', 10000);
```

### Custom Duration

```tsx
// Toast that stays for 10 seconds
toast.success('Long message', 10000);

// Toast that doesn't auto-dismiss
toast.error('Persistent error', 0);
```

### Managing Toasts

```tsx
const { toast, toasts } = useToast();

// Get current toasts count
console.log(`Active toasts: ${toasts.length}`);

// Clear all toasts
const clearAll = () => {
  toast.clear();
};

// Dismiss specific toast (you'd need to store the toast ID)
const dismissSpecific = (toastId: string) => {
  toast.dismiss(toastId);
};
```

### Different Positions

```tsx
// Top right (default)
<ToastContainer position="top-right" />

// Bottom center
<ToastContainer position="bottom-center" />

// Top left
<ToastContainer position="top-left" />
```

### Toast Order

Control the order in which toasts appear:

```tsx
// New toasts appear at the top (newest first)
<ToastProvider config={{ reverseOrder: true }}>
  <ToastContainer />
</ToastProvider>

// Old toasts stay at the top (newest last) - default behavior
<ToastProvider config={{ reverseOrder: false }}>
  <ToastContainer />
</ToastProvider>
```

**Behavior:**
- `reverseOrder: false` (default): Old toasts remain visible at the top, new toasts appear below them
- `reverseOrder: true`: New toasts appear at the top, pushing older toasts down

## Migration from v0.0.3 and earlier

If you're upgrading from an earlier version that required Tailwind CSS:

1. **Remove Tailwind CSS dependencies** (if you're not using Tailwind elsewhere):
```bash
npm uninstall tailwindcss postcss autoprefixer
```

2. **Remove Tailwind imports** from your CSS:
```css
/* Remove these lines */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. **Add the new CSS import:**
```tsx
import 'react-quick-notify/dist/toast.css';
```

That's it! Your toasts will continue to work exactly the same way.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Arshan Nawaz

## Support

If you like this package, please consider giving it a ⭐ on GitHub!