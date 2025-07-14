# 🔐 Vercel Account Setup & Authentication

This guide will help you set up your Vercel account and authenticate for deployment.

## 📋 Prerequisites

1. **Vercel Account** - Create one at [vercel.com](https://vercel.com)
2. **GitHub Account** - Your code should be on GitHub
3. **Node.js** - For Vercel CLI

## 🚀 Step-by-Step Setup

### 1. Create Vercel Account

1. **Visit [vercel.com](https://vercel.com)**
2. **Click "Sign Up"**
3. **Choose your sign-up method:**
   - GitHub (Recommended)
   - Google
   - Email

### 2. Install Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel
```

### 3. Login to Vercel

#### Option A: CLI Login (Recommended)
```bash
# Login via CLI
vercel login
```

This will:
- Open your browser
- Ask you to authorize Vercel
- Create authentication tokens

#### Option B: Manual Login
```bash
# If CLI login doesn't work
vercel login --github
```

### 4. Verify Login

```bash
# Check if you're logged in
vercel whoami

# Should show your email/username
```

### 5. Link Your Project (Optional)

```bash
# Navigate to your project
cd apps/web

# Link to Vercel project
vercel link

# This will:
# - Ask for project name
# - Create Vercel project
# - Link local code to Vercel
```

## 📦 Project Setup

### 1. First Time Setup

```bash
# Navigate to your web app
cd apps/web

# Initialize Vercel project
vercel

# This will ask:
# - Set up and deploy? (Y/n)
# - Which scope? (your account)
# - Link to existing project? (N)
# - Project name? (brand-style-cloner-web)
# - Directory? (./)
# - Override settings? (N)
```

### 2. Configure Project Settings

After linking, you can configure:

**Environment Variables:**
```bash
# Set environment variables
vercel env add NEXT_PUBLIC_API_URL
vercel env add NODE_ENV
```

**Custom Domain:**
```bash
# Add custom domain
vercel domains add yourdomain.com
```

### 3. Deploy

```bash
# Deploy to production
vercel --prod

# Or use our script
./deploy.sh vercel
```

## 🔐 Authentication Methods

### 1. GitHub OAuth (Recommended)

```bash
vercel login --github
```

**Benefits:**
- Automatic GitHub integration
- Easy team management
- Secure token management

### 2. Email/Password

```bash
vercel login
```

**Process:**
1. Enter email
2. Check email for verification
3. Enter verification code

### 3. Token Authentication

```bash
# Generate token from Vercel dashboard
# Then use:
vercel --token YOUR_TOKEN
```

## 📊 Account Management

### View Account Info

```bash
# Check current account
vercel whoami

# List all projects
vercel ls

# View account usage
vercel usage
```

### Switch Accounts

```bash
# Logout current account
vercel logout

# Login with different account
vercel login
```

## 🛠️ Troubleshooting

### Common Issues:

1. **"Not logged in" error:**
   ```bash
   vercel logout
   vercel login
   ```

2. **"Permission denied":**
   - Check if you're in the right team
   - Verify project ownership
   - Contact team admin

3. **"Project not found":**
   ```bash
   # Re-link project
   vercel link
   ```

4. **"Token expired":**
   ```bash
   vercel logout
   vercel login
   ```

### Reset Everything:

```bash
# Clear all Vercel data
rm -rf ~/.vercel
vercel login
```

## 📋 Pre-Deployment Checklist

- [ ] Vercel account created
- [ ] Vercel CLI installed
- [ ] Logged in to Vercel
- [ ] GitHub repo connected
- [ ] Environment variables ready

## 🎯 Quick Commands Reference

```bash
# Account management
vercel login          # Login to Vercel
vercel logout         # Logout from Vercel
vercel whoami         # Check current user

# Project management
vercel link           # Link local project
vercel ls             # List projects
vercel switch         # Switch between projects

# Deployment
vercel                # Deploy to preview
vercel --prod         # Deploy to production
vercel --force        # Force deploy

# Environment
vercel env ls         # List environment variables
vercel env add        # Add environment variable
vercel env rm         # Remove environment variable

# Domains
vercel domains ls     # List domains
vercel domains add    # Add custom domain
```

## 🔗 Useful Links

- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Account Settings:** [vercel.com/account](https://vercel.com/account)
- **CLI Documentation:** [vercel.com/docs/cli](https://vercel.com/docs/cli)
- **Pricing:** [vercel.com/pricing](https://vercel.com/pricing)

---

**Once you're logged in, you can run:**
```bash
./deploy.sh vercel
```

**This will deploy both Next.js apps to Vercel! 🚀** 