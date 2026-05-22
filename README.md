# 💑 Mwangi & Wanjiku - Our Love Story ❤️

A beautiful, romantic webpage designed to celebrate your love story together. This project includes a modern, interactive website with galleries, timelines, music, and a password-protected private section.

## 🎨 Features

### 1. **Hero Section**
- Beautiful gradient background with animated hearts
- Eye-catching title and subtitle
- Smooth animations on load

### 2. **Timeline (Our Journey)**
- Interactive timeline showing key moments
- Beautiful card-based design
- Hover effects and animations
- Customizable milestone dates and descriptions

### 3. **Photo Gallery**
- Grid layout for displaying photos
- Hover effects with captions
- Image filtering and overlay effects

### 4. **Photo Slideshow**
- Automatic slideshow that cycles every 5 seconds
- Navigation arrows to manually browse photos
- Dot indicators for direct slide selection
- Smooth fade transitions

### 5. **Music Player** 🎵
- Custom audio player with play/pause controls
- Progress bar with seek functionality
- Volume control slider
- Current time and duration display
- Beautiful gradient styling

### 6. **Private Moments (Password Protected)** 🔒
- Secure section accessible only with a passcode
- Session-based authentication (session-only access)
- Dedicated gallery for private photos
- Secret messages area
- Logout functionality

### 7. **Responsive Design**
- Mobile-friendly layout
- Works on all device sizes
- Touch-friendly buttons and controls

## 📁 Project Structure

```
Mwangi & Wanjiku❤️/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main styles and navigation
│   ├── gallery.css     # Gallery and slideshow styles
│   ├── timeline.css    # Timeline styles
│   ├── music.css       # Music player styles
│   └── private.css     # Private section styles
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── gallery.js      # Gallery and slideshow logic
│   ├── music.js        # Music player controls
│   └── private.js      # Private section authentication
└── assets/
    ├── gallery/        # Photo gallery images
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   ├── private1.jpg
    │   ├── private2.jpg
    │   └── private3.jpg
    └── music/          # Audio files
        └── your-song.mp3
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)

### Installation

1. **Open the Project**: Open the folder `c:\Users\mwangi\Mwangi & Wanjiku❤️` in VS Code

2. **Add Your Photos**:
   - Add your photos to `assets/gallery/` folder
   - Photo names should be: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
   - For private moments: `private1.jpg`, `private2.jpg`, `private3.jpg`
   - You can use PNG, JPG, or GIF formats

3. **Add Your Music**:
   - Add an audio file to `assets/music/` folder
   - Rename it to `your-song.mp3` or update the path in `index.html`
   - Supports MP3, WAV, and other common audio formats

4. **Customize Content**:
   - Edit `index.html` to update names, dates, and descriptions
   - Customize timeline milestones with your own dates
   - Update gallery captions with your special memories

5. **Set Your Passcode**:
   - Open `js/private.js`
   - Find line: `const CORRECT_PASSCODE = '1234';`
   - Change `'1234'` to your desired passcode
   - Example: `const CORRECT_PASSCODE = 'love2024';`

6. **View the Website**:
   - Right-click on `index.html` and select "Open with Live Server" (if you have the extension)
   - Or, simply drag and drop `index.html` into your browser
   - Or, use a local server: `python -m http.server 8000` then visit `http://localhost:8000`

## 🎯 Customization Guide

### Update Timeline Dates
Open `index.html` and find the timeline section. Update each date and description:
```html
<p class="timeline-date">Your Date Here</p>
<p>Your memory description goes here.</p>
```

### Change Color Scheme
Edit `css/styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #ff1744;      /* Main pink color */
    --secondary-color: #f50057;    /* Dark pink */
    --accent-color: #ff4081;       /* Light pink */
}
```

### Update Music
1. Place your audio file in `assets/music/`
2. Update `index.html` line with your filename:
```html
<source src="assets/music/your-filename.mp3" type="audio/mpeg">
```

### Add More Gallery Photos
1. Add photos to `assets/gallery/` (any size)
2. Add HTML in `index.html` gallery section:
```html
<div class="gallery-item">
    <img src="assets/gallery/photo5.jpg" alt="Photo 5" class="gallery-img">
    <div class="gallery-overlay">Your Caption</div>
</div>
```

### Change Private Section Passcode
Edit `js/private.js` line 2:
```javascript
const CORRECT_PASSCODE = 'your-new-code'; // Change this
```

## 🔒 Private Section Details

- **Passcode**: Default is `1234` (change in `js/private.js`)
- **Session-based**: Access is stored in browser session only
- **Auto-logout**: Refreshing the page requires re-authentication
- **Logout button**: Manually logout by clicking the logout button

## 💡 Tips

1. **Photo Quality**: Use high-quality photos for best results
2. **Audio Format**: MP3 format works best for wider browser compatibility
3. **File Sizes**: Keep image files under 2MB and audio files under 5MB for faster loading
4. **Custom Font**: Consider adding Google Fonts for more personalization
5. **Backup**: Keep copies of your photos and important files

## 🎨 Color Codes

- **Primary Pink**: #ff1744
- **Secondary Pink**: #f50057
- **Accent Pink**: #ff4081
- **Light Background**: #fff5f7
- **Text Color**: #333

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Photos not showing?
- Check file paths in `index.html`
- Ensure image files are in `assets/gallery/` folder
- Verify image filenames match exactly (case-sensitive on Mac/Linux)

### Music not playing?
- Check the audio file format is MP3
- Verify the file path is correct
- Check browser console for errors (F12)

### Passcode not working?
- Ensure you saved changes to `js/private.js`
- Try clearing browser cache
- Make sure there are no extra spaces in the passcode

### Slideshow not auto-advancing?
- Check browser console for JavaScript errors (F12)
- Ensure all image files exist
- Try refreshing the page

## 📞 Support

For issues or questions, check:
- Browser console (F12) for error messages
- File paths and filenames
- Image and audio file formats

## 💝 Special Features

- **Smooth Animations**: Every interaction has smooth, delightful animations
- **Responsive Design**: Looks beautiful on phones, tablets, and desktops
- **No External Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed!
- **Lightweight**: Fast loading times
- **Privacy Focused**: All processing happens locally in the browser

---

**Made with ❤️ for Mwangi & Wanjiku**

Enjoy celebrating your love story! 💑✨
