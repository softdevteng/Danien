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

// Message slide-up animation and background music control
document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('revealMessage');
    const messageContainer = document.querySelector('.message-slide-container');
    const closeBtn = document.querySelector('.message-close');
    const bgMusicToggle = document.getElementById('bgMusicToggle');
    let bgMusic = null;
    let bgMusicPlaying = false;

    // Reveal message slide-up animation
    if (revealBtn && messageContainer) {
        revealBtn.addEventListener('click', () => {
            messageContainer.classList.add('open');
        });
    }

    // Close message slide-up
    if (closeBtn && messageContainer) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            messageContainer.classList.add('closing');
            
            setTimeout(() => {
                messageContainer.classList.remove('open');
                messageContainer.classList.remove('closing');
            }, 400);
        });
    }

    // Close when clicking outside
    if (messageContainer) {
        messageContainer.addEventListener('click', (e) => {
            if (e.target === messageContainer) {
                messageContainer.classList.add('closing');
                
                setTimeout(() => {
                    messageContainer.classList.remove('open');
                    messageContainer.classList.remove('closing');
                }, 400);
            }
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
