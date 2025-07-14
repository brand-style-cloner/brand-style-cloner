#!/bin/bash

# Brand Style Cloner Deployment Script
# This script helps deploy all three projects

set -e

echo "🚀 Brand Style Cloner Deployment Script"
echo "========================================"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to deploy to Vercel
deploy_vercel() {
    local app_name=$1
    local app_path=$2
    
    echo "📦 Deploying $app_name to Vercel..."
    
    if ! command_exists vercel; then
        echo "❌ Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    # Check if user is logged in to Vercel
    if ! vercel whoami &>/dev/null; then
        echo "🔐 Please login to Vercel first..."
        echo "You can login by running: vercel login"
        echo "Or visit: https://vercel.com/cli-login"
        echo ""
        echo "After logging in, run this script again."
        exit 1
    fi
    
    echo "✅ Logged in to Vercel as: $(vercel whoami)"
    
    cd "$app_path"
    vercel --prod --yes
    cd ../..
}

# Function to deploy to Railway
deploy_railway() {
    local app_name=$1
    local app_path=$2
    
    echo "🚂 Deploying $app_name to Railway..."
    
    if ! command_exists railway; then
        echo "❌ Railway CLI not found. Installing..."
        npm install -g @railway/cli
    fi
    
    cd "$app_path"
    railway login
    railway up
    cd ../..
}

# Function to build all projects
build_all() {
    echo "🔨 Building all projects..."
    npm run build
}

# Main deployment logic
case "${1:-help}" in
    "vercel")
        echo "Deploying to Vercel..."
        build_all
        deploy_vercel "Web App" "apps/web"
        deploy_vercel "Marketing Site" "apps/marketing-site"
        echo "✅ Vercel deployment complete!"
        echo "⚠️  Note: API needs to be deployed separately (Railway/Render recommended)"
        ;;
    "railway")
        echo "Deploying to Railway..."
        build_all
        deploy_railway "API" "apps/api"
        deploy_railway "Web App" "apps/web"
        deploy_railway "Marketing Site" "apps/marketing-site"
        echo "✅ Railway deployment complete!"
        ;;
    "build")
        echo "Building all projects..."
        build_all
        echo "✅ Build complete!"
        ;;
    "help"|*)
        echo "Usage: ./deploy.sh [option]"
        echo ""
        echo "Options:"
        echo "  vercel   - Deploy Next.js apps to Vercel"
        echo "  railway  - Deploy all projects to Railway"
        echo "  build    - Build all projects"
        echo "  help     - Show this help message"
        echo ""
        echo "Recommended deployment strategy:"
        echo "1. Deploy API to Railway/Render"
        echo "2. Deploy Next.js apps to Vercel"
        echo "3. Update environment variables"
        ;;
esac 