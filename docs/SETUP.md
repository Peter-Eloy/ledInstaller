# LED Installer Setup & Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js (v16.0.0+)
- npm (v8.0.0+) or yarn
- Git
- Modern web browser

### Installation
```bash
# Clone and setup
git clone https://github.com/yourusername/led-installer.git
cd led-installer
npm install

# Start development
npm run dev
```

### Development Tools
- VSCode with ESLint & Prettier
- React Developer Tools
- JavaScript Debugger

## Production Deployment

### Build
```bash
npm run build
```

### Hosting Options
1. Static Hosting (Recommended)
   ```bash
   # Deploy to Netlify
   netlify deploy
   
   # Deploy to Vercel
   vercel
   ```

2. Traditional Web Server
   - Copy build files to server
   - Configure server routing
   - Set up HTTPS

### Environment Variables
```env
NODE_ENV=production
DEBUG_MODE=false
```

## Troubleshooting

### Common Issues
1. Installation Errors
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. Build Problems
   ```bash
   # Clear cache and rebuild
   npm run clean
   npm run build
   ```

3. Port Conflicts
   ```bash
   # Change port
   export PORT=3001
   npm run dev
   ```