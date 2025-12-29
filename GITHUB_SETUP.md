# GitHub Setup Guide

## Quick Start

Follow these steps to upload your ComponentLab project to GitHub:

### Step 1: Create .env File Locally

First, create your `.env` file (this will NOT be committed to GitHub):

```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your actual Gemini API key
# You can use nano, vim, or any text editor:
nano .env
```

Add your actual API key:
```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3001
```

### Step 2: Initialize Git and Commit

```bash
# Initialize git (if not already done)
git init

# Add all files (test files and .env are automatically excluded by .gitignore)
git add .

# Commit your changes
git commit -m "Initial commit: ComponentLab ready for deployment"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `componentlab` (or any name you prefer)
3. Description: "AI-powered UI component generator"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 4: Push to GitHub

```bash
# Add your GitHub repository as remote (replace with your username/repo)
git remote add origin https://github.com/YOUR_USERNAME/componentlab.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 5: Verify

1. Go to your GitHub repository page
2. Verify that:
   - ✅ All source files are present
   - ✅ `.gitignore` is there
   - ✅ `.env` is **NOT** there (should be excluded)
   - ✅ `test-server.js` and `check-api-key.js` are **NOT** there (excluded)
   - ✅ `api/` directory is there
   - ✅ `vercel.json` is there

## What Gets Committed

✅ **Committed to GitHub:**
- All source code (`src/`)
- Configuration files
- `package.json` and `package-lock.json`
- `api/` directory (Vercel serverless functions)
- `vercel.json`
- `.env.example` (template, no real keys)
- `.gitignore`
- Documentation files

❌ **NOT Committed (excluded by .gitignore):**
- `.env` (contains your API key)
- `node_modules/`
- `dist/` (build output)
- `test-server.js` (testing file)
- `check-api-key.js` (testing file)
- `.vercel/` (Vercel deployment cache)

## Security Reminders

⚠️ **IMPORTANT:**
- Never commit `.env` file with real API keys
- Always use `.env.example` as a template
- If you accidentally committed an API key, immediately:
  1. Regenerate your API key
  2. Remove it from git history (use `git filter-branch` or BFG Repo-Cleaner)
  3. Update `.env` locally with the new key

## Next Steps

After pushing to GitHub:
1. Follow the [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md) to deploy your app
2. Set up environment variables in Vercel dashboard
3. Deploy and test your application

