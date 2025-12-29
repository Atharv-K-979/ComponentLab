# Deployment Checklist

## Pre-Deployment

- [x] Created `.gitignore` file (excluding test files, node_modules, .env, build artifacts)
- [x] Created `.env.example` file as template
- [x] Created Vercel configuration (`vercel.json`)
- [x] Created API routes for Vercel serverless functions (`/api` directory)
- [x] Updated frontend to use relative API paths for production

## Files to Commit to GitHub

✅ **Should be committed:**
- All source files (`src/`)
- `package.json` and `package-lock.json`
- Configuration files (`vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`)
- `index.html`
- `server.js` (for local development)
- `vercel.json`
- `README.md`, `QUICK_START.md`, `SETUP.md`
- `.gitignore`
- `.env.example` (template file)
- `api/` directory (Vercel serverless functions)
- `public/` directory
- `VERCEL_DEPLOYMENT.md`
- `DEPLOYMENT_CHECKLIST.md`

❌ **Should NOT be committed:**
- `.env` (contains sensitive API keys)
- `node_modules/`
- `dist/` (build output)
- `test-server.js` (testing file)
- `check-api-key.js` (testing file)
- `.vercel/` (Vercel deployment cache)

## GitHub Setup Steps

1. **Initialize Git** (if not done):
   ```bash
   git init
   ```

2. **Create .env file locally** (not committed):
   ```bash
   cp .env.example .env
   # Then edit .env and add your actual GEMINI_API_KEY
   ```

3. **Stage and commit files**:
   ```bash
   git add .
   git commit -m "Initial commit: ComponentLab ready for deployment"
   ```

4. **Create GitHub repository**:
   - Go to https://github.com/new
   - Create repository (don't initialize with README)

5. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment Steps

1. **Sign up/Login to Vercel**: https://vercel.com

2. **Import Project**:
   - Click "New Project"
   - Import from GitHub
   - Select your repository

3. **Configure Project**:
   - Framework: Other
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   - `GEMINI_API_KEY` = Your actual API key
   - `VITE_API_BASE_URL` = Leave empty (or use your Vercel URL)

5. **Deploy** and wait for completion

6. **Verify**:
   - Visit your Vercel URL
   - Test component generation
   - Check `/api/health` endpoint

## Post-Deployment

- [ ] Test all features on deployed site
- [ ] Verify API endpoints work correctly
- [ ] Check environment variables are set correctly
- [ ] Test component generation
- [ ] Verify CORS is working
- [ ] Add custom domain (optional)

## Important Notes

⚠️ **Never commit `.env` file** - it contains your API key!

✅ **Always use `.env.example`** as a template for others

✅ **Test locally** before deploying to production

✅ **Monitor Vercel logs** if you encounter issues

