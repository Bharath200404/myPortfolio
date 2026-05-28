# Bharath - Data Scientist & Applied AI Engineer Portfolio

A modern, premium portfolio website built with React.js, Tailwind CSS, Framer Motion, and Recharts. Designed specifically for Data Science and AI professionals to showcase their skills, projects, and achievements to recruiters.

## 🚀 Features

- **Modern 2026 UI Design** - Clean, premium aesthetic with glassmorphism effects
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion for seamless interactions
- **Interactive Visualizations** - Beautiful charts using Recharts
- **Dark Theme** - Elegant dark theme with purple/blue gradients and cyan highlights
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Accessible** - WCAG compliant with proper ARIA labels
- **Fast Performance** - Optimized for quick loading times

## 📋 Sections

1. **Hero Section** - Animated introduction with typing effect and social links
2. **About Me** - Personal story with timeline and interest cards
3. **Skills** - Categorized skill cards with progress indicators
4. **Featured Projects** - Premium project cards with tech stack and results
5. **Analytics Dashboard** - Interactive charts showing skill growth and project domains
6. **Experience & Achievements** - Timeline of workshops, hackathons, and certifications
7. **GitHub Activity** - Contribution heatmap and top repositories
8. **Blog & Insights** - Article cards for technical writing
9. **Contact Section** - Contact form and social links
10. **Footer** - Quick navigation and copyright information

## 🛠️ Tech Stack

- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/bharath/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
myportfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Analytics.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── GitHubActivity.js
│   │   ├── Hero.js
│   │   ├── LoadingScreen.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   ├── ScrollProgress.js
│   │   └── Skills.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Personal Information
Update the following in the respective components:
- Name and title in `Hero.js`
- Contact information in `Contact.js` and `Footer.js`
- Social media links throughout all components
- Project details in `Projects.js`
- Experience and achievements in `Experience.js`

### Color Scheme
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  dark: { ... },
  accent: { ... },
  glow: { ... }
}
```

### Content
Update all placeholder content with your actual information, projects, and achievements.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `build` folder.

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Bharath**
- LinkedIn: [linkedin.com/in/bharath](https://linkedin.com/in/bharath)
- GitHub: [github.com/bharath](https://github.com/bharath)
- Email: bharath@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Lucide React
- Animations by Framer Motion
- Charts by Recharts

---

Made with ❤️ by Bharath
