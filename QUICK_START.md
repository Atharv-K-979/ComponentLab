# Quick Start Guide

## 🚀 Start the Application

### Option 1: Clean Start (Recommended)
```bash
# Clean up any existing processes
npm run cleanup

# Start both servers
npm run dev:all
```

### Option 2: Manual Start
```bash
# Terminal 1 - Backend Server
npm run dev:server

# Terminal 2 - Frontend
npm run dev
```

## ✅ Verify Setup

1. **Check Configuration:**
   ```bash
   npm run test:config
   ```

2. **Verify Ports:**
   - Backend: http://localhost:3001
   - Frontend: http://localhost:5173

3. **Test API:**
   ```bash
   curl http://localhost:3001/api/rate-limit
   ```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill processes on ports
npm run cleanup

# Or manually:
lsof -ti:3001 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### API Key Issues
- Ensure `.env` file exists in root directory
- Check `GEMINI_API_KEY` is set correctly
- No quotes around the API key value
- Restart server after changing `.env`

### Server Not Starting
- Check Node.js version: `node --version` (should be v18+)
- Verify dependencies: `npm install`
- Check console for error messages

## 📝 Environment Variables

Create `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

## 🎯 Usage

1. Open http://localhost:5173
2. Navigate to Component Maker
3. Select framework
4. Describe your component
5. Click Generate
6. Preview and download your code!

## ⚠️ Rate Limits

- **Demo**: 4 generations per day per IP
- **Local**: Unlimited (with your own API key)
- Quota resets every 24 hours

