// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update footer date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    document.getElementById('footerDate').textContent = `Today: ${dateString}`;
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInScale 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gallery items and timeline items
document.querySelectorAll('.gallery-item, .timeline-content, .music-player').forEach(el => {
    observer.observe(el);
});

// Heart interaction: hide other hero text when heart opens (hover or tap)
document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart-shape');
    const heroContent = document.querySelector('.hero-content');
    const loveClose = document.querySelector('.love-close');
    const bgMusicToggle = document.getElementById('bgMusicToggle');
    let bgMusic = null;
    let bgMusicPlaying = false;

    if (!heart || !heroContent) return;

    // Hover (desktop)
    heart.addEventListener('mouseenter', () => {
        heart.classList.add('opened');
        heroContent.classList.add('heart-opened');
    });
    heart.addEventListener('mouseleave', () => {
        heart.classList.remove('opened');
        heroContent.classList.remove('heart-opened');
    });

    // Click / touch (mobile) toggles open state
    heart.addEventListener('click', (e) => {
        e.preventDefault();
        heart.classList.toggle('opened');
        heroContent.classList.toggle('heart-opened');
    });

    // Touch support: toggle on touchstart as well
    heart.addEventListener('touchstart', (e) => {
        heart.classList.toggle('opened');
        heroContent.classList.toggle('heart-opened');
    }, {passive: true});

    // Close button inside love-box
    if (loveClose) {
        loveClose.addEventListener('click', (e) => {
            e.stopPropagation();
            heart.classList.remove('opened');
            heroContent.classList.remove('heart-opened');
        });
    }

    // Background Music Toggle
    if (bgMusicToggle) {
        bgMusicToggle.addEventListener('click', () => {
            if (!bgMusic) {
                bgMusic = new Audio();
                bgMusic.src = 'assets/music/CHAI YA SAA KUMI -YWAYA TAJIRI.mp3';
                bgMusic.volume = 0.15;
                bgMusic.loop = true;
            }

            if (!bgMusicPlaying) {
                bgMusic.play().catch(err => console.log('Music play blocked:', err));
                bgMusicPlaying = true;
                bgMusicToggle.classList.add('playing');
                bgMusicToggle.textContent = '🔊 Music Playing';
            } else {
                bgMusic.pause();
                bgMusicPlaying = false;
                bgMusicToggle.classList.remove('playing');
                bgMusicToggle.textContent = '🔈 Background Music';
            }
        });
    }
});
