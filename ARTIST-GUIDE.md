# 🎨 Simple Art Website Management Guide

## For Your Friend (The Artist) - No Tech Skills Required!

### 🌐 **Your Website Setup:**
- **Free hosting** on Netlify
- **Custom domain** (like `yourname-art.com`) 
- **Automatic updates** when you make changes
- **Professional look** with dark theme gallery

---

## 📸 **Adding New Artwork (3-Minute Process):**

### Step 1: Add Your Photo
1. Take a good photo of your artwork
2. Save it with a simple name like `sunset-painting.jpg`
3. Drop it in the `public/images/` folder

### Step 2: Add Artwork Details
1. Open the file called `artworks.json`
2. Copy and paste one of the existing entries
3. Change the details to match your new artwork:

```json
{
  "id": "my-new-painting",
  "title": "Sunset Over Mountains", 
  "medium": "Oil on Canvas",
  "dimensions": "16\" x 20\"",
  "price": "$450",
  "description": "A vibrant sunset painting...",
  "image": "/images/sunset-painting.jpg",
  "available": true
}
```

### Step 3: Publish (Using GitHub Desktop)
1. Open GitHub Desktop app
2. You'll see your changes listed
3. Type a message like "Added new sunset painting"
4. Click "Commit" then "Push"
5. **Your website updates automatically in 2-3 minutes!**

---

## 💰 **When Artwork Sells:**
Just change `"available": true` to `"available": false` in the artworks.json file, then commit and push.

---

## 📧 **Contact Form:**
When someone clicks "Inquire About This Piece", it opens their email with a pre-written message to you.

**To change your email:** Look for `artist@example.com` in the code and replace it.

---

## 🚀 **One-Time Setup (I'll help you with this):**

1. **GitHub Account** - Store your website files
2. **GitHub Desktop** - Simple app for managing changes  
3. **Netlify Account** - Free hosting connected to GitHub
4. **Domain Name** - Buy from any registrar (~$12/year)
5. **Connect Domain** - Point it to Netlify (5-minute setup)

**After setup, you only need GitHub Desktop to manage everything!**

---

## 🆘 **Need Help?**
- Check if image names match exactly
- Make sure the JSON syntax is correct (use online JSON validator)
- Contact me if something breaks!

**Cost: Only the domain name (~$12/year). Everything else is FREE!**