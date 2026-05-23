let slideIndex = 1;
let slideshowAudio = null;
let slideshowMusicPlaying = false;

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
    
    // Play soft music with slideshow
    playSlideshowMusic();
}

// Soft music player for slideshow
function initSlideshowMusic() {
    if (!slideshowAudio) {
        slideshowAudio = new Audio();
        slideshowAudio.src = 'assets/music/CHAI YA SAA KUMI -YWAYA TAJIRI.mp3';
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

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
    initSlideshowMusic();
    setInterval(autoSlide, 5000); // Change slide every 5 seconds
    
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
