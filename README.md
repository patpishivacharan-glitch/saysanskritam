# Saysanskritam Website

A React-based website for teaching Sanskrit and promoting Indian culture.

🌐 **Live Site:** [Coming Soon - Azure Web App]

## 🎨 Features

- 🏠 **Home Page** - Welcome message with daily Sanskrit tips
- 👤 **About Me** - Teacher background and credentials
- 📚 **Courses** - Basic to advanced Sanskrit courses
- 📝 **Daily Posts** - Sanskrit words and phrases with meanings
- 🙏 **Slokas** - Collection with explanations
- 🎨 **Festival Posters** - Downloadable greetings
- ⭐ **Testimonials** - Student reviews
- 💼 **Offerings** - Services overview
- 📩 **Contact & Inquiry** - Forms for booking sessions
- ❓ **FAQ** - Common questions
- 📖 **Resources** - Downloadable PDFs
- 🎥 **Multimedia** - Video lessons
- 📧 **Newsletter** - Subscribe for updates

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shpatpi_microsoft/saysanskritam.git
cd saysanskritam

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment to Azure Web App

This project is configured for automatic deployment to Azure Web App using GitHub Actions.

### Setup Steps:

1. **Create Azure Web App**
   - Go to Azure Portal
   - Create a new Web App (Node.js runtime)
   - Note down the app name

2. **Get Publish Profile**
   - In Azure Portal, go to your Web App
   - Click "Download publish profile"
   - Save the XML file

3. **Configure GitHub Secrets**
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add two secrets:
     - `AZURE_WEBAPP_NAME`: Your Azure Web App name
     - `AZURE_WEBAPP_PUBLISH_PROFILE`: Paste the entire content of the publish profile XML

4. **Deploy**
   - Push to `main` branch
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab for deployment status

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload this to your Azure Web App
```

## 🛠 Tech Stack

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool and dev server
- **Azure Web App** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
saysanskritam/
├── .github/
│   └── workflows/
│       └── azure-deploy.yml    # GitHub Actions workflow
├── public/
│   └── posters/                # Festival posters (SVG)
├── src/
│   ├── components/             # All page components
│   ├── data/                   # Sample data
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── web.config                  # Azure IIS configuration
└── staticwebapp.config.json    # Azure Static Web Apps config
```

## 🎨 Customization

1. **Update Content**
   - Edit `src/data/sampleData.js` for courses, slokas, testimonials
   - Update contact info in `src/components/Contact.jsx`

2. **Add More Posters**
   - Place SVG files in `public/posters/`
   - Update `src/components/Posters.jsx`

3. **Connect Forms**
   - Integrate with backend API or services like:
     - Formspree
     - EmailJS
     - Azure Functions
     - SendGrid

4. **Add Analytics**
   - Google Analytics
   - Azure Application Insights

## 📄 License

© Saysanskritam - All rights reserved

## 🤝 Contributing

This is a private educational project. For inquiries, please contact through the website.

---

**Spreading Sanskrit and Indian culture worldwide** 🕉️
