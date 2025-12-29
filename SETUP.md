# Local Setup Guide

Follow these steps to run ComponentLab locally with unlimited usage.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API key ([Get one free here](https://ai.google.dev/))

## Step-by-Step Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-component-generator.git
cd ai-component-generator

# Install all dependencies
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

**To get your API key:**
1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in your `.env` file

### 3. Start the Development Servers

You have two options:

**Option A: Run both servers together (Recommended)**
```bash
npm run dev:all
```

**Option B: Run servers separately**

Terminal 1 (Backend):
```bash
npm run dev:server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

### 4. Access the Application

Open your browser and navigate to:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001`

## Troubleshooting

### Backend Server Not Starting

- Check if port 3001 is already in use
- Verify your `.env` file exists and has `GEMINI_API_KEY` set
- Check console for error messages

### Frontend Can't Connect to Backend

- Ensure backend server is running on port 3001
- Check browser console for CORS errors
- Verify `VITE_API_BASE_URL` in `.env` if you changed the backend port

### API Key Issues

- Make sure your API key is valid and active
- Check if you have quota remaining in Google AI Studio
- Verify the key is correctly set in `.env` (no quotes, no spaces)

### Rate Limiting Still Appearing

- The rate limiting is per IP address
- If testing locally, each browser/incognito session counts separately
- To reset, wait 24 hours or clear the server's in-memory store (restart server)

## Production Deployment

For production deployment:

1. Set environment variables on your hosting platform
2. Build the frontend: `npm run build`
3. Serve the `dist` folder and run the backend server
4. Update `VITE_API_BASE_URL` to point to your production backend

## Need Help?

- Check the [README.md](./README.md) for more information
- Open an issue on GitHub
- Review the error messages in the browser console and server logs

