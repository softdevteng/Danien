let slideIndex = 1;
let fullscreenSlideIndex = 1;
let slideshowAudio = null;
let slideshowMusicPlaying = false;
const slideImages = [
    'assets/gallery/3.jpeg',
    'assets/gallery/4.jpeg',
    'assets/gallery/5.jpeg',
    'assets/gallery/6.jpeg',
    'assets/gallery/7.jpeg',
    'assets/gallery/8.jpeg',
    'assets/gallery/WhatsApp Image 2026-05-22 at 08.52.24.jpeg',
    'assets/gallery/WhatsApp Image 2026-05-22 at 08.52.25.jpeg'
];

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
    
    // Sync fullscreen if open
    if (document.getElementById('fullscreenModal').classList.contains('open')) {
        updateFullscreenSlide(slideIndex);
    }
    
    // Play soft music with slideshow
    playSlideshowMusic();
}

// Soft music player for slideshow
function initSlideshowMusic() {
    if (!slideshowAudio) {
        slideshowAudio = new Audio();
        slideshowAudio.src = 'assets/music/New West - Those Eyes (Lyrics).mp3';
        slideshowAudio.volume = 0.2; // Soft background volume
        slideshowAudio.loop = true;
    }
}

function playSlideshowMusic() {
    if (!slideshowAudio) {
        initSlideshowMusic();
    }
    
    if (!slideshowMusicPlaying && slideshowAudio) {
        slideshowAudio.play().catch(function(error) {
            console.log('Slideshow music autoplay prevented:', error);
        });
        slideshowMusicPlaying = true;
    }
}

function stopSlideshowMusic() {
    if (slideshowAudio && slideshowMusicPlaying) {
        slideshowAudio.pause();
        slideshowMusicPlaying = false;
    }
}

// Auto-advance slides
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Fullscreen Functions
function openFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    const img = document.getElementById('fullscreenSlideImg');
    
    fullscreenSlideIndex = slideIndex;
    img.src = slideImages[fullscreenSlideIndex - 1];
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Update dots
    updateFullscreenDots();
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function fullscreenChangeSlide(n) {
    fullscreenSlideIndex += n;
    
    if (fullscreenSlideIndex > slideImages.length) {
        fullscreenSlideIndex = 1;
    }
    if (fullscreenSlideIndex < 1) {
        fullscreenSlideIndex = slideImages.length;
    }
    
    updateFullscreenSlide(fullscreenSlideIndex);
}

function updateFullscreenSlide(index) {
    const img = document.getElementById('fullscreenSlideImg');
    img.src = slideImages[index - 1];
    fullscreenSlideIndex = index;
    updateFullscreenDots();
}

function updateFullscreenDots() {
    const dotsContainer = document.getElementById('fullscreenDots');
    dotsContainer.innerHTML = '';
    
    slideImages.forEach((_, index) => {
        const dot = document.createElement('span');
        if (index + 1 === fullscreenSlideIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => updateFullscreenSlide(index + 1);
        dotsContainer.appendChild(dot);
    });
}

// Close fullscreen with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('fullscreenModal');
        if (modal.classList.contains('open')) {
            closeFullscreen();
        }
    }
});

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
    initSlideshowMusic();
    setInterval(autoSlide, 5000); // Change slide every 5 seconds
    
    // Fullscreen button
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', openFullscreen);
    }
    
    // Stop slideshow music when user leaves slideshow section
    document.addEventListener('scroll', function() {
        const slideshowSection = document.querySelector('.slideshow-section');
        if (slideshowSection) {
            const rect = slideshowSection.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                stopSlideshowMusic();
            } else {
                playSlideshowMusic();
            }
        }
    });
});
