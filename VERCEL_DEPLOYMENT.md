# Vercel Deployment Guide

This guide will help you deploy ComponentLab to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Google Gemini API key (get one from https://ai.google.dev/)

## Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Create a new repository (don't initialize with README)

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/componentlab.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/new
   - Sign in with your GitHub account

2. **Import your repository**:
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add the following variable:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: Your Google Gemini API key
     - **Environment**: Production, Preview, Development (select all)
   - Click "Save"

5. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete

## Step 3: Update Frontend API URL (Optional)

The frontend is configured to use relative API paths by default, which will work automatically on Vercel. However, if you want to explicitly set it:

1. In Vercel Dashboard, go to your project settings
2. Add environment variable:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: Leave empty (for same-domain) or use your Vercel URL
   - **Environment**: Production, Preview, Development

## Step 4: Verify Deployment

1. Visit your Vercel deployment URL (provided after deployment)
2. Test the component generator
3. Check the API endpoints:
   - `https://your-app.vercel.app/api/health` should return `{"status":"ok"}`
   - `https://your-app.vercel.app/api/generate` should accept POST requests

## Project Structure for Vercel

- **Frontend**: Built static files in `/dist` directory
- **API Routes**: Serverless functions in `/api` directory
  - `/api/generate.js` - Component generation endpoint
  - `/api/rate-limit.js` - Rate limit status endpoint
  - `/api/health.js` - Health check endpoint

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify build command is correct
- Check Vercel build logs for specific errors

### API Not Working
- Verify `GEMINI_API_KEY` is set in Vercel environment variables
- Check Vercel function logs for errors
- Ensure API routes are in `/api` directory

### CORS Errors
- The API routes include CORS headers
- If issues persist, check that requests are using correct origin

## Environment Variables

Required environment variables in Vercel:
- `GEMINI_API_KEY` - Your Google Gemini API key (required)

Optional environment variables:
- `VITE_API_BASE_URL` - API base URL for frontend (leave empty for same-domain)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Keep your deployment in sync with your repository

## Custom Domain

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

**Note**: Make sure your `.env` file is in `.gitignore` (it should be) and never commit your API keys to GitHub!

