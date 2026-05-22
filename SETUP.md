# ⚙️ Setup Instructions for Your Romantic Webpage

Welcome! Follow these steps to get your romantic webpage up and running.

## Step 1: View the Webpage

### Option A: Using Live Server (Recommended)
1. In VS Code, right-click on `index.html`
2. Select "Open with Live Server"
3. Your browser will open automatically

### Option B: Using Python
1. Open terminal in the workspace folder
2. Run: `python -m http.server 8000`
3. Open browser and visit: `http://localhost:8000`

### Option C: Direct Browser
1. Right-click on `index.html`
2. Select "Open with Default Browser"

## Step 2: Test with Placeholders

The website comes with placeholder images. To see how it looks:
- All pages are functional with placeholder content
- Try the slideshow, music player, and navigation
- Default passcode for private section: **1234**

## Step 3: Add Your Photos

1. **Prepare your photos**:
   - Use JPEG, PNG, or GIF format
   - Recommended size: 1000x750 pixels
   - Keep file size under 500KB for faster loading

2. **Add regular gallery photos**:
   - Save 4 photos as: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
   - Place them in: `assets/gallery/`

3. **Add private photos** (optional):
   - Save 3 photos as: `private1.jpg`, `private2.jpg`, `private3.jpg`
   - Place them in: `assets/gallery/`
   - These will only be visible with the passcode

## Step 4: Add Your Music

1. **Prepare your audio**:
   - Use MP3 format (most compatible)
   - Keep file size under 5MB for faster loading
   - Duration: any length you prefer

2. **Add the music file**:
   - Place your song in: `assets/music/`
   - Name it: `your-song.mp3`
   - Or update the file path in `index.html` (line ~115)

## Step 5: Customize Your Content

### Update Names and Title
Open `index.html` and find:
```html
<h1>Mwangi & Wanjiku</h1>
```
Replace with your names.

### Update Timeline Dates
Find the timeline section in `index.html` and update each milestone:

**Example:**
```html
<h3>First Meeting</h3>
<p class="timeline-date">January 15, 2023</p>
<p>The day our story began at the coffee shop.</p>
```

### Update Gallery Captions
Find the gallery section and update the overlay text:
```html
<div class="gallery-overlay">Our Beautiful Moment</div>
```

### Update Private Section Passcode
1. Open: `js/private.js`
2. Find line 2: `const CORRECT_PASSCODE = '1234';`
3. Change to your desired passcode:
   ```javascript
   const CORRECT_PASSCODE = 'love2024';
   ```
   Or:
   ```javascript
   const CORRECT_PASSCODE = 'mypasscode';
   ```

### Update Private Messages
In `index.html`, find the private section and update:
```html
<p>"Add your intimate moments and private messages here..."</p>
```

## Step 6: Personalize Colors (Optional)

To change the color scheme:
1. Open: `css/styles.css`
2. Find the `:root` section at the top
3. Change the color values:

```css
:root {
    --primary-color: #ff1744;      /* Main color */
    --secondary-color: #f50057;    /* Dark variant */
    --accent-color: #ff4081;       /* Light variant */
}
```

**Some color suggestions:**
- Red: `#c41e3a`
- Purple: `#9b59b6`
- Blue: `#2196f3`
- Gold: `#ffd700`

## File Checklist

After setup, your folder should look like:

```
✅ Mwangi & Wanjiku❤️/
  ✅ index.html
  ✅ README.md
  ✅ SETUP.md
  ✅ css/
     ✅ styles.css
     ✅ gallery.css
     ✅ timeline.css
     ✅ music.css
     ✅ private.css
  ✅ js/
     ✅ main.js
     ✅ gallery.js
     ✅ music.js
     ✅ private.js
  ✅ assets/
     ✅ gallery/
        ✅ photo1.jpg (your photo)
        ✅ photo2.jpg (your photo)
        ✅ photo3.jpg (your photo)
        ✅ photo4.jpg (your photo)
        ✅ private1.jpg (optional)
        ✅ private2.jpg (optional)
        ✅ private3.jpg (optional)
     ✅ music/
        ✅ your-song.mp3 (your music)
```

## Testing Checklist

After customization, test:

- [ ] Hero section displays correctly
- [ ] Navigation menu works
- [ ] Timeline loads all milestones
- [ ] Gallery photos display
- [ ] Slideshow advances automatically
- [ ] Slideshow controls (arrows and dots) work
- [ ] Music player plays and controls work
- [ ] Volume slider works
- [ ] Private section requires passcode
- [ ] Private section displays after entering correct passcode
- [ ] Logout button works
- [ ] Page is responsive on mobile (use F12 developer tools)

## Features Guide

### 🎵 Music Player
- Click **▶️ Play** to start music
- Click **⏸ Pause** to pause
- Click on progress bar to seek
- Use volume slider to adjust sound

### 📷 Slideshow
- Auto-advances every 5 seconds
- Click arrows to navigate manually
- Click dots to jump to specific photo

### 🔒 Private Section
- Enter passcode (default: 1234) to access
- Click **Logout** to exit
- Session-based (refresh page to require passcode again)

### 📱 Mobile Responsive
- Website automatically adjusts for phone/tablet
- All buttons are touch-friendly
- Test on mobile by pressing F12 and toggling device mode

## Common Issues & Solutions

### Photos not showing?
- Check photo files are in `assets/gallery/` folder
- Verify filenames match exactly: `photo1.jpg`, `photo2.jpg`, etc.
- Check image format (JPG, PNG, or GIF)

### Music not playing?
- Verify music file is in `assets/music/` folder
- Use MP3 format for best compatibility
- Check file path in `index.html`

### Private section not working?
- Clear browser cache (Ctrl+Shift+Delete)
- Check passcode in `js/private.js` file
- Try different browser

### Slideshow not advancing?
- Check that all 4 images exist in gallery folder
- Open developer console (F12) and check for errors
- Try refreshing the page

## Next Steps

1. Share the website with your loved one!
2. Keep the passcode safe and memorable
3. Add more photos/stories to the timeline as your story continues
4. Update the website periodically with new memories

## Need Help?

- Check browser console (F12) for error messages
- Verify file names and paths match exactly
- Ensure images are in correct folder
- Try the basic version without customizations first

---

**Enjoy your romantic webpage! ❤️**

Any questions or need to make changes? Just edit the files and refresh your browser!
