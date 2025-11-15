# 🚀 Deployment Guide - Saysanskritam to Azure

## Prerequisites

1. **Install Git**
   - Download from: https://git-scm.com/download/win
   - Install with default settings
   - Restart PowerShell after installation

2. **Azure Account**
   - Sign up at: https://portal.azure.com

3. **GitHub Account**
   - Your repo: https://github.com/patpishivacharan-glitch/saysanskritam

---

## Part 1: Push Code to GitHub

### Step 1: Open PowerShell and navigate to project

```powershell
cd D:\Rahul\saysanskritam
```

### Step 2: Initialize Git (after installing Git)

```powershell
git init
git add .
git commit -m "Initial commit: Sanskrit teaching website"
```

### Step 3: Connect to GitHub and push

```powershell
git branch -M main
git remote add origin https://github.com/patpishivacharan-glitch/saysanskritam.git
git push -u origin main
```

**Note:** You'll be prompted for GitHub credentials. Use a Personal Access Token instead of password.

#### How to create GitHub Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (all checkboxes under repo)
4. Generate token and copy it
5. Use this token as password when pushing

---

## Part 2: Create Azure Web App

### Step 1: Login to Azure Portal
- Go to: https://portal.azure.com

### Step 2: Create Web App
1. Click **"Create a resource"**
2. Search for **"Web App"** and click Create
3. Fill in details:
   - **Subscription:** Select your subscription
   - **Resource Group:** Create new (e.g., `saysanskritam-rg`)
   - **Name:** `saysanskritam` (or unique name, will be: saysanskritam.azurewebsites.net)
   - **Publish:** Code
   - **Runtime stack:** Node 18 LTS
   - **Operating System:** Linux
   - **Region:** Choose closest to you (e.g., Central India)
   - **Pricing plan:** Free F1 or Basic B1
4. Click **"Review + create"** then **"Create"**
5. Wait for deployment to complete

### Step 3: Download Publish Profile
1. Go to your Web App in Azure Portal
2. Click **"Download publish profile"** (top toolbar)
3. Save the `.PublishSettings` file
4. Open it in Notepad - you'll need this content

---

## Part 3: Configure GitHub Actions

### Step 1: Add GitHub Secrets
1. Go to: https://github.com/patpishivacharan-glitch/saysanskritam
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**

#### Secret 1: AZURE_WEBAPP_NAME
- **Name:** `AZURE_WEBAPP_NAME`
- **Value:** Your Azure Web App name (e.g., `saysanskritam`)

#### Secret 2: AZURE_WEBAPP_PUBLISH_PROFILE
- **Name:** `AZURE_WEBAPP_PUBLISH_PROFILE`
- **Value:** Paste the entire content of the `.PublishSettings` file you downloaded

### Step 2: Verify Workflow File
The workflow file is already created at: `.github/workflows/azure-deploy.yml`

---

## Part 4: Deploy

### Automatic Deployment
Once you push to the `main` branch, GitHub Actions will automatically:
1. Checkout code
2. Install dependencies
3. Build the React app
4. Deploy to Azure Web App

### Check Deployment Status
1. Go to your GitHub repo
2. Click **"Actions"** tab
3. Watch the deployment progress
4. Once complete (green checkmark), visit your site

### Your Live Site
After successful deployment, visit:
```
https://saysanskritam.azurewebsites.net
```
(Replace with your actual Azure Web App name)

---

## Part 5: Troubleshooting

### If deployment fails:

1. **Check GitHub Actions logs**
   - Go to Actions tab → Click on failed workflow → Check error messages

2. **Common issues:**
   - Incorrect publish profile
   - Wrong app name in secrets
   - Node version mismatch
   - Build errors

3. **Manual deployment alternative:**
   ```powershell
   # Build locally
   npm run build
   
   # Use VS Code Azure extension or Azure CLI to deploy dist/ folder
   ```

### Enable logging in Azure:
1. Go to Azure Portal → Your Web App
2. Click **"App Service logs"**
3. Enable **Application Logging** (Filesystem)
4. Click **"Save"**
5. View logs: **"Log stream"**

---

## Part 6: Update Website

To update your live site:

```powershell
# Make changes to your code
# Then commit and push

cd D:\Rahul\saysanskritam
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy!

---

## Part 7: Custom Domain (Optional)

1. Purchase domain from GoDaddy, Namecheap, etc.
2. In Azure Portal → Your Web App → **"Custom domains"**
3. Add your domain and configure DNS records
4. Enable HTTPS with free SSL certificate

---

## Quick Commands Reference

```powershell
# Check git status
git status

# See commit history
git log --oneline

# Create new branch
git checkout -b feature-branch

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v

# Build locally
npm run build

# Test production build locally
npm run preview
```

---

## Support

- **Azure Documentation:** https://docs.microsoft.com/azure/app-service/
- **GitHub Actions:** https://docs.github.com/actions
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

## Summary Checklist

- [ ] Install Git on Windows
- [ ] Push code to GitHub repository
- [ ] Create Azure Web App
- [ ] Download publish profile
- [ ] Add GitHub secrets (AZURE_WEBAPP_NAME, AZURE_WEBAPP_PUBLISH_PROFILE)
- [ ] Push to main branch to trigger deployment
- [ ] Check Actions tab for deployment status
- [ ] Visit live site at Azure URL
- [ ] Update DNS for custom domain (optional)

---

**Your website will be live at:** `https://[your-app-name].azurewebsites.net`

**GitHub Actions will auto-deploy on every push to main branch!** 🎉
