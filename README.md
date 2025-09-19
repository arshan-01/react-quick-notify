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
- Tailwind CSS (for styling)
- lucide-react (for icons)

## Quick Start

1. **Wrap your app with ToastProvider:**

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

2. **Use the toast hook in your components:**

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
<ToastProvider config={{ position: 'top-right', duration: 3000, maxToasts: 3 }}>
  {/* Your app */}
</ToastProvider>
```

**Props:**
- `config` (optional): Global configuration object
  - `position`: Default position for all toasts
  - `duration`: Default duration in milliseconds (0 = no auto-dismiss)
  - `maxToasts`: Maximum number of toasts to show at once

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

This package uses Tailwind CSS classes. Make sure you have Tailwind CSS installed and configured in your project.

### Required Tailwind Classes

The package uses these Tailwind classes that should be available:
- Layout: `fixed`, `top-4`, `right-4`, `z-50`, `flex`, `items-center`, etc.
- Colors: `bg-green-100`, `text-green-600`, `border-green-200`, etc.
- Spacing: `p-4`, `px-4`, `py-3`, `gap-3`, `space-y-3`, etc.
- Effects: `rounded-lg`, `shadow-sm`, `transition-all`, `duration-300`, etc.

### Customization

You can customize the appearance by:

1. **Overriding Tailwind classes** in your CSS
2. **Extending the components** by copying and modifying them
3. **Using CSS custom properties** for colors

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
        maxToasts: 3
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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]

## Support

If you like this package, please consider giving it a ⭐ on GitHub!