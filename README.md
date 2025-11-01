# Art Portfolio Website - How to Add New Artwork

## Adding New Art (Simple Steps)

### 1. Add Your Image
- Save your artwork image in the `public/images/` folder
- Use a descriptive filename like `sunset-painting.jpg`
- Recommended image size: 800-1200px wide for best quality

### 2. Update the Artwork List
- Open the file `public/artworks.json`
- Copy one of the existing entries and modify it:

```json
{
  "id": "your-unique-id",
  "title": "Your Artwork Title",
  "medium": "Oil on Canvas",
  "dimensions": "24\" x 18\"",
  "price": "$850",
  "description": "Write a description of your artwork here.",
  "image": "/images/your-image.jpg",
  "available": true
}
```

### 3. Publish Changes
- If using GitHub: commit and push your changes
- The website will update automatically!

## Quick Reference

### File Structure
```
public/
  images/           ← Put artwork images here
  artworks.json     ← Edit this to add/remove artworks
src/
  style.css         ← Customize colors/fonts here
  main.js           ← Website functionality
index.html          ← Main page structure
```

### Updating Contact Email
In `src/main.js`, find this line and replace with your email:
```javascript
window.location.href = `mailto:artist@example.com?...
```

### Marking Artwork as Sold
In `artworks.json`, change `"available": true` to `"available": false`

## Hosting Options

### GitHub Pages (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at `username.github.io/repository-name`

### Netlify (Alternative)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Auto-deploys on every GitHub push

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Need Help?
- Check the browser console for error messages
- Make sure image paths match exactly
- JSON syntax must be perfect (use a JSON validator if needed)