# React Quick Notify Demo

A comprehensive demo application showcasing the features and capabilities of the `react-quick-notify` toast notification library.

## 🔄 Switching Between Local Development and Production

This demo can be configured to use either the local development version of `react-quick-notify` or the published NPM package.

### 📦 Current Configuration

**Currently configured for:** Production (NPM Package)

### 🛠️ Local Development Mode

Use this mode when developing and testing the `react-quick-notify` library locally.

#### Prerequisites
- The `react-quick-notify` project should be located at `../react-quick-notify` relative to this demo
- The local package should be built and ready

#### Configuration

**1. Package.json:**
```json
{
  "dependencies": {
    "react-quick-notify": "file:../react-quick-notify"
  }
}
```

**2. App.jsx:**
```javascript
// import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify' // NPM package
import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify' // Local development
```

**3. main.jsx:**
```javascript
// import 'react-quick-notify/dist/toast.css' // NPM package
import 'react-quick-notify/dist/toast.css'  // Local development
```

**4. Install dependencies:**
```bash
npm install
```

### 🚀 Production Mode (NPM Package)

Use this mode to test with the published NPM package or for production deployment.

#### Configuration

**1. Package.json:**
```json
{
  "dependencies": {
    "react-quick-notify": "^0.1.9"
  }
}
```

**2. App.jsx:**
```javascript
import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify' // NPM package
// import { ToastProvider, ToastContainer, useToast } from 'react-quick-notify' // Local development
```

**3. main.jsx:**
```javascript
import 'react-quick-notify/dist/toast.css' // NPM package
// import 'react-quick-notify/dist/toast.css'  // Local development
```

**4. Install dependencies:**
```bash
npm install
```

## 🔧 Quick Switch Commands

### Switch to Local Development
```bash
# 1. Update package.json
sed -i '' 's/"react-quick-notify": ".*"/"react-quick-notify": "file:..\/react-quick-notify"/' package.json

# 2. Update App.jsx imports
sed -i '' 's/^import { ToastProvider/\/\/ import { ToastProvider/' src/App.jsx
sed -i '' 's/^\/\/ import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ Local development/import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ Local development/' src/App.jsx

# 3. Update main.jsx imports
sed -i '' 's/^import '\''react-quick-notify\/dist\/toast.css'\''/\/\/ import '\''react-quick-notify\/dist\/toast.css'\'' \/\/ NPM package/' src/main.jsx
sed -i '' 's/^\/\/ import '\''react-quick-notify\/dist\/toast.css'\''  \/\/ Local development/import '\''react-quick-notify\/dist\/toast.css'\''  \/\/ Local development/' src/main.jsx

# 4. Reinstall dependencies
npm install
```

### Switch to Production (NPM Package)
```bash
# 1. Update package.json
sed -i '' 's/"react-quick-notify": ".*"/"react-quick-notify": "^0.1.9"/' package.json

# 2. Update App.jsx imports
sed -i '' 's/^\/\/ import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ NPM package/import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ NPM package/' src/App.jsx
sed -i '' 's/^import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ Local development/\/\/ import { ToastProvider, ToastContainer, useToast } from '\''react-quick-notify'\'' \/\/ Local development/' src/App.jsx

# 3. Update main.jsx imports
sed -i '' 's/^\/\/ import '\''react-quick-notify\/dist\/toast.css'\'' \/\/ NPM package/import '\''react-quick-notify\/dist\/toast.css'\'' \/\/ NPM package/' src/main.jsx
sed -i '' 's/^import '\''react-quick-notify\/dist\/toast.css'\''  \/\/ Local development/\/\/ import '\''react-quick-notify\/dist\/toast.css'\''  \/\/ Local development/' src/main.jsx

# 4. Reinstall dependencies
npm install
```

## 🎯 Demo Features

This demo showcases all the features of `react-quick-notify`:

### Basic Toast Types
- ✅ Success toasts
- ❌ Error toasts  
- ⚠️ Warning toasts
- ℹ️ Info toasts

### Advanced Features
- 📝 Long message handling
- ⏱️ Custom duration control
- 📌 Persistent toasts (no auto-dismiss)
- 🔄 Promise-based toasts with loading states

### Configuration Options
- 🔄 Toast ordering (reverseOrder: true/false)
- 📍 Multiple positioning options
- ⏱️ Auto-dismiss timing
- 🚫 Unlimited toasts (maxToasts: 0)

### Interactive Elements
- 📋 Copy-to-clipboard functionality for all code examples
- 🎯 Live configuration testing
- 📊 Visual comparison of different behaviors
- 🧹 Clear all toasts functionality

## 📚 Code Examples

The demo includes comprehensive code examples for:

### Installation
```bash
npm install react-quick-notify
# or
yarn add react-quick-notify
# or
pnpm add react-quick-notify
```

### Basic Setup
```javascript
import { ToastProvider, ToastContainer } from 'react-quick-notify'
import 'react-quick-notify/dist/toast.css'

function App() {
  return (
    <ToastProvider config={{ 
      position: 'top-right', 
      duration: 4000,
      maxToasts: 0, // unlimited
      reverseOrder: true 
    }}>
      <YourAppContent />
      <ToastContainer />
    </ToastProvider>
  )
}
```

### Usage in Components
```javascript
import { useToast } from 'react-quick-notify'

function MyComponent() {
  const { toast } = useToast()

  const handleClick = () => {
    toast.success('Hello World!')
  }

  return <button onClick={handleClick}>Show Toast</button>
}
```

## 🚀 Running the Demo

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── App.jsx          # Main demo component
│   ├── App.css          # Demo styling
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies configuration
├── README.md           # This file
└── ...
```

## 🔗 Links

- **GitHub Repository:** [react-quick-notify](https://github.com/arshan-01/react-quick-notify)
- **NPM Package:** [react-quick-notify on npm](https://www.npmjs.com/package/react-quick-notify)
- **Live Demo:** [react-quick-notify.vercel.app](https://react-quick-notify.vercel.app)

## 🐛 Troubleshooting

### Local Development Issues

1. **Module not found error:**
   - Ensure the `react-quick-notify` project is built
   - Check that the path `../react-quick-notify` is correct
   - Run `npm install` after switching to local mode

2. **CSS not loading:**
   - Verify the CSS import path in `main.jsx`
   - Check that `dist/toast.css` exists in the local package

3. **TypeScript errors:**
   - Ensure the local package has been built with TypeScript definitions
   - Check that `dist/index.d.ts` exists

### Production Mode Issues

1. **Package not found:**
   - Run `npm install` to fetch the latest package
   - Check internet connection for NPM registry access

2. **Version mismatch:**
   - Update the version number in `package.json`
   - Clear node_modules and reinstall if needed

## 📝 Development Notes

- The demo is configured with unlimited toasts (`maxToasts: 0`) for better demonstration
- All code examples include copy-to-clipboard functionality
- The demo automatically shows toast notifications when copying code
- Order testing buttons demonstrate the `reverseOrder` configuration option

## 🤝 Contributing

When working on the `react-quick-notify` library:

1. Use **Local Development Mode** for testing changes
2. Test thoroughly with the demo before publishing
3. Switch to **Production Mode** to verify the published package works correctly
4. Update version numbers in both the library and this README when publishing

---

Built with ❤️ for testing `react-quick-notify`