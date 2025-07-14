# 🚀 Deployment Guide - Brand Style Cloner

This guide will help you deploy all three projects in your monorepo:
- **API** (Express.js backend) - Port 3002
- **Web** (Next.js frontend) - Port 3000
- **Marketing Site** (Next.js marketing site) - Port 3001

## 📋 Prerequisites

1. **Node.js 18+** installed
2. **Git** repository pushed to GitHub
3. **Environment variables** ready (see Environment Setup section)

## 🎯 Recommended Deployment Strategy

### Option 1: Vercel + Railway (Recommended)
- **API**: Deploy to Railway or Render
- **Web & Marketing**: Deploy to Vercel

### Option 2: All on Railway
- Deploy all three projects to Railway

### Option 3: All on Render
- Deploy all three projects to Render

## 🔧 Environment Setup

### API Environment Variables
```env
NODE_ENV=production
PORT=3002
OPENAI_API_KEY=your_openai_api_key_here
```

### Web App Environment Variables
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Marketing Site Environment Variables
```env
NODE_ENV=production
```

## 🚀 Quick Deploy Commands

### Using the deployment script:
```bash
# Make script executable
chmod +x deploy.sh

# Deploy to Vercel (Next.js apps only)
./deploy.sh vercel

# Deploy to Railway (all projects)
./deploy.sh railway

# Build all projects
./deploy.sh build
```

## 📦 Platform-Specific Instructions

### 1. Vercel Deployment (Next.js Apps)

**Best for:** Web app and Marketing site

#### Prerequisites:
1. **Create Vercel account** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```
3. **Login to Vercel:**
   ```bash
   vercel login
   ```

#### Deploy:
```bash
# Deploy Web App
cd apps/web
vercel --prod

# Deploy Marketing Site
cd apps/marketing-site
vercel --prod

# Or use our automated script:
./deploy.sh vercel
```

**Note:** The script will check if you're logged in and guide you through the process.

**Configuration:**
- Set environment variables in Vercel dashboard
- Configure custom domains if needed
- Set up automatic deployments from GitHub

### 2. Railway Deployment (All Projects)

**Best for:** Full-stack applications

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Deploy API
cd apps/api
railway init
railway up

# Deploy Web App
cd apps/web
railway init
railway up

# Deploy Marketing Site
cd apps/marketing-site
railway init
railway up
```

**Configuration:**
- Set environment variables in Railway dashboard
- Configure custom domains
- Set up automatic deployments

### 3. Render Deployment (All Projects)

**Best for:** Free tier and simple setup

1. **Connect GitHub repo to Render**
2. **Create Web Services for each project:**

#### API Service:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `apps/api`

#### Web App Service:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `apps/web`

#### Marketing Site Service:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `apps/marketing-site`

### 4. DigitalOcean App Platform

**Best for:** Production applications

1. **Connect GitHub repository**
2. **Create three separate apps:**
   - API app with Node.js environment
   - Web app with Next.js environment
   - Marketing site with Next.js environment
3. **Configure environment variables**
4. **Set up custom domains**

## 🔗 Post-Deployment Steps

### 1. Update Environment Variables
After deployment, update the API URL in your frontend apps:

```javascript
// In your web app
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### 2. Test All Endpoints
- API health check: `https://your-api-domain.com/api/health`
- Web app: `https://your-web-domain.com`
- Marketing site: `https://your-marketing-domain.com`

### 3. Set Up Custom Domains
- Configure custom domains in your platform dashboard
- Update DNS records
- Set up SSL certificates

### 4. Monitor Performance
- Set up monitoring and logging
- Configure error tracking
- Set up performance monitoring

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures:**
   ```bash
   # Clean and rebuild
   rm -rf node_modules
   npm install
   npm run build
   ```

2. **Environment Variables:**
   - Ensure all required env vars are set
   - Check for typos in variable names
   - Verify API keys are valid

3. **Port Conflicts:**
   - API: Port 3002
   - Web: Port 3000
   - Marketing: Port 3001

4. **CORS Issues:**
   - Update CORS configuration in API
   - Add frontend domains to allowed origins

## 📊 Monitoring & Maintenance

### Health Checks:
- API: `GET /api/health`
- Web: Check homepage loads
- Marketing: Check homepage loads

### Logs:
- Monitor application logs
- Set up error tracking
- Configure performance monitoring

### Updates:
- Keep dependencies updated
- Monitor security advisories
- Regular backups

## 🎉 Success Checklist

- [ ] All three projects deployed
- [ ] Environment variables configured
- [ ] Custom domains set up
- [ ] SSL certificates active
- [ ] Health checks passing
- [ ] Error monitoring configured
- [ ] Performance monitoring active
- [ ] Documentation updated

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check application logs
4. Verify environment variables
5. Test locally first

---

**Happy Deploying! 🚀** 