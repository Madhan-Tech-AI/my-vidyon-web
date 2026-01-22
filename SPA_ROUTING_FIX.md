# SPA Routing Fix - Deployment Guide

## Problem
After deployment, the following pages were showing 404 errors when accessed directly or refreshed:
- `/careers/job-search` - Job Search
- `/careers/saved-jobs` - Saved Jobs
- `/careers/access-application` - Access Application
- `/careers/who-we-are` - Who We Are
- `/careers/life-at-my-vidyon` - Life at My Vidyon
- `/careers/how-we-hire` - How We Hire

## Root Cause
Single Page Applications (SPAs) use client-side routing. When a user directly accesses a route like `/careers/job-search` or refreshes the page, the server tries to find a physical file at that path. Since these are client-side routes handled by React Router, the server returns a 404 error if not properly configured.

## Solution Applied

### 1. Updated `vercel.json` (for Vercel deployments)
Added explicit route configurations to ensure all paths serve `index.html`:
- Added `routes` array with specific mappings for each careers sub-route
- Kept the catch-all `rewrites` configuration as a fallback

### 2. Updated `netlify.toml` (for Netlify deployments)
Enhanced the configuration with:
- Build settings (publish directory and build command)
- Specific redirect for `/careers/*` routes
- Catch-all redirect for all other routes

### 3. Updated `public/_redirects` (for Netlify/other platforms)
Added explicit redirects for each careers route before the catch-all redirect.

## Deployment Steps

### For Vercel:
1. Commit the changes:
   ```bash
   git add vercel.json public/_redirects netlify.toml
   git commit -m "Fix: Add SPA routing configuration for careers pages"
   git push
   ```

2. Vercel will automatically redeploy. Wait for deployment to complete.

3. Test the routes:
   - https://your-domain.com/careers/job-search
   - https://your-domain.com/careers/saved-jobs
   - https://your-domain.com/careers/access-application
   - https://your-domain.com/careers/who-we-are
   - https://your-domain.com/careers/life-at-my-vidyon
   - https://your-domain.com/careers/how-we-hire

### For Netlify:
1. Commit the changes (same as above)

2. Netlify will automatically redeploy. Wait for deployment to complete.

3. Test the routes (same as above)

### For Other Platforms:
If you're using a different platform, you may need to:

1. **Apache**: Create/update `.htaccess` in the `dist` folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

2. **Nginx**: Update nginx configuration:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

3. **Firebase Hosting**: Update `firebase.json`:
   ```json
   {
     "hosting": {
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

## Verification Checklist

After deployment, verify the following:

- [ ] Direct access to `/careers/job-search` works
- [ ] Direct access to `/careers/saved-jobs` works
- [ ] Direct access to `/careers/access-application` works
- [ ] Direct access to `/careers/who-we-are` works
- [ ] Direct access to `/careers/life-at-my-vidyon` works
- [ ] Direct access to `/careers/how-we-hire` works
- [ ] Refreshing any of the above pages works
- [ ] Navigation from other pages to these pages works
- [ ] Browser back/forward buttons work correctly
- [ ] 404 page still shows for truly non-existent routes

## Troubleshooting

### If 404 errors persist:

1. **Check deployment logs** - Look for any errors during the build/deployment process

2. **Clear cache** - Try accessing the site in incognito mode or clear your browser cache

3. **Verify build output** - Ensure `dist/index.html` exists after build:
   ```bash
   npm run build
   ls dist
   ```

4. **Check platform-specific settings**:
   - **Vercel**: Go to Project Settings → General → Build & Development Settings
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   
   - **Netlify**: Go to Site Settings → Build & Deploy → Build Settings
     - Build command: `npm run build`
     - Publish directory: `dist`

5. **Manual verification**:
   - Build locally: `npm run build`
   - Serve locally: `npx serve dist`
   - Test the routes on localhost

### If some routes work but others don't:

1. Check for typos in route paths (case-sensitive)
2. Verify the route is defined in `src/App.tsx`
3. Ensure the component file exists and is properly imported

## Additional Notes

- The configuration files now support **all current and future routes** through the catch-all pattern `/*`
- Specific routes for careers pages are listed explicitly for better clarity and debugging
- The order of redirects matters - specific routes should come before catch-all routes
- These configurations are platform-agnostic and should work across most hosting providers

## Testing Locally

To test the SPA routing locally before deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Serve the built files:
   ```bash
   npx serve dist
   ```

3. Try accessing the routes directly in your browser:
   - http://localhost:3000/careers/job-search
   - http://localhost:3000/careers/saved-jobs
   - etc.

4. Refresh the pages to ensure they don't 404

If it works locally but not in production, the issue is with the deployment platform configuration.
