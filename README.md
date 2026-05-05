# Summer Camp Access Codes 🏕️

A simple and beautiful React web app to display and manage summer camp access codes that children can easily copy and paste.

## Features

✨ **Simple Interface** - Clean, kid-friendly design
📋 **Copy to Clipboard** - One-click code copying
📱 **Responsive** - Works on all devices (mobile, tablet, desktop)
🎨 **Beautiful UI** - Colorful gradient design with smooth animations
⚡ **Fast** - Built with Vite for rapid development and deployment

## Setup Locally

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd path/to/Summer_camp_
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Customizing Your Codes

Edit the `src/App.jsx` file and update the `codes` array with your actual summer camp codes:

```javascript
const codes = [
  {
    id: 1,
    name: 'Day Camp Access',
    code: 'YOUR-CODE-HERE',
    description: 'Your description here'
  },
  // Add more codes as needed
]
```

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This generates optimized files in the `dist` folder.

## Deploying to Render

### Step 1: Prepare Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub

1. Create a new GitHub repository
2. Add the GitHub repo as remote:

```bash
git remote add origin https://github.com/YOUR-USERNAME/summer-camp-codes.git
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: summer-camp-codes
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click "Create Static Site"
6. Your site will be live at `https://summer-camp-codes.onrender.com`

## Alternative: Deploy to Other Services

### Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Vercel auto-detects Vite settings
6. Click Deploy

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repo
5. Build Command: `npm run build`
6. Publish Directory: `dist`
7. Deploy

## Project Structure

```
Summer_camp_/
├── src/
│   ├── App.jsx        # Main component with codes
│   ├── App.css        # Styles
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## Tips for Success

- 🔒 Don't commit sensitive codes to public repo - use environment variables for secrets
- 📱 Test on mobile devices to ensure good user experience
- 🎨 Customize colors in `App.css` gradient values
- ⏰ Update codes regularly and redeploy

## Support

Need help? Check the documentation:

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Render Deployment Guide](https://render.com/docs)

---

Happy Summer Camp! 🎉
