# Find the Frequency - Art Gallery Website

A modern, dark-themed art portfolio website built with Vite, featuring a masonry gallery layout and e-commerce functionality.

**Live Site:** [Deployed on Netlify](https://github.com/j2k4/find-the-frequency-website)

## ✨ Features

- **Masonry Column Layout** - Images flow naturally like bramblitt.com
- **Dark Theme Design** - Professional gallery aesthetic
- **Modal Detail Views** - Click any artwork for full details
- **Mobile Responsive** - Looks great on all devices
- **Auto-Deploy** - Push to GitHub → site updates automatically
- **Contact Integration** - Email inquiries for artwork purchases

## 🚀 Deployment (Netlify)

### Automatic Deployment
- **GitHub:** https://github.com/j2k4/find-the-frequency-website
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Auto-Deploy:** Pushes to `main` branch automatically deploy

### Custom Domain Setup
1. Buy domain from any registrar (~$12/year)
2. In Netlify dashboard: Domain settings → Add custom domain
3. Update DNS at your registrar to point to Netlify
4. Free SSL certificate included

## 🎨 Managing Artwork (For the Artist)

### Adding New Art (3-Minute Process)

#### 1. Add Your Photo
- Drop image in `public/images/` folder
- Use simple filename: `my-painting.jpg`

#### 2. Update Artwork Details
Open `public/artworks.json` and add:
```json
{
  "id": "unique-id",
  "title": "Artwork Title",
  "medium": "Oil on Canvas", 
  "dimensions": "24\" x 18\"",
  "price": "$450",
  "description": "Description of the artwork...",
  "image": "/images/my-painting.jpg",
  "available": true
}
```

#### 3. Publish Changes
- Use GitHub Desktop or command line
- Commit changes with message like "Added new artwork"
- Push to GitHub → Netlify auto-deploys in 2-3 minutes

### Marking Artwork as Sold
Change `"available": true` to `"available": false` in artworks.json

### Updating Contact Email
In `src/main.js`, find and replace:
```javascript
mailto:findthefrequency@example.com
```

## 💻 Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server  
npm run build       # Build for production
npm run preview     # Preview production build
```

## 📁 Project Structure

```
public/
  images/           # Artwork images
  artworks.json     # Artwork database
src/
  style.css         # All styling (dark theme)
  main.js          # Gallery functionality
  index.html       # Main page structure
dist/              # Built files (auto-generated)
```

## 🛠 Tech Stack

- **Vite** - Build tool and dev server
- **Vanilla JS** - No framework dependencies  
- **CSS Grid/Flexbox** - Responsive layout
- **GitHub** - Version control and hosting
- **Netlify** - Free hosting with auto-deploy

## 📧 Support

For technical issues or questions about managing the website, check:
- Browser console for errors
- Ensure image paths match exactly
- Validate JSON syntax for artworks.json
- Netlify deploy logs for build issues

---

**Total Cost:** Only domain registration (~$12/year). Everything else is FREE!