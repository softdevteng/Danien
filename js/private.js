// Private section passcode authentication
// IMPORTANT: Change this passcode to your own secure code
const CORRECT_PASSCODE = '2510'; // Change this to your desired passcode

// Romantic and Intimate Messages
const intimateMessages = [
    "Every moment with you feels like forever, and forever with you is never enough... 💕",
    "Your touch ignites a fire in my soul that only you can satisfy, my love...",
    "I crave you in ways that words could never express, my beautiful Wanjiku... 🔥",
    "When you look at me like that, I feel like the luckiest man alive, undone by your beauty...",
    "Your lips, your touch, your whisper... everything about you drives me insane with desire...",
    "I want to kiss away every worry, every doubt, and make you feel only my love... 💋",
    "Being inside your love is like being home, safe, cherished, and completely wanted...",
    "Your body, your soul, your heart - they're mine, and I'm entirely yours... 💑",
    "I love you not just for who you are, but for who I am when I'm with you...",
    "Every passionate night with you rewrites my definition of what love truly means...",
    "You're the only one I want, the only one I crave, the only one who makes me complete...",
    "Your beauty takes my breath away, but your love brings it back in waves of pure bliss...",
    "I want to explore every inch of your heart and soul, loving you deeper each day...",
    "With you, I found my home, my passion, my reason to believe in forever...",
    "The way you move, the way you smile... everything about you is pure seduction to my heart...",
    "You're not just my love, you're my desire, my dream, my beautiful reality...",
    "Every moment without you feels empty, every moment with you feels like paradise...",
    "I fall for you over and over again, in new ways, in deeper ways, always...",
    "Your passion matches mine perfectly, creating magic only we understand...",
    "I would cross oceans, climb mountains, just to feel your love surrounding me...",
    "You make me feel like the man I've always wanted to be - strong, loved, and forever devoted...",
    "In your arms is where I belong, where all my worries fade and only love remains...",
    "The intimacy we share goes beyond the physical - it's a connection of our very souls...",
    "I worship every part of you, cherish every moment, and love you endlessly...",
    "You're the most beautiful, sensual, and captivating woman I've ever known...",
    "My heart beats for you, my body craves you, my soul yearns to be forever intertwined with yours...",
    "Tonight, tomorrow, always - I'm yours completely, body and soul...",
    "The way you love me, the way you hold me, makes me never want to let you go...",
    "You're my greatest love story, my deepest passion, my forever dream come true...",
    "Every kiss is a promise, every touch is a vow, every moment with you is a celebration of us...",
];

function generateNewMessage() {
    const randomIndex = Math.floor(Math.random() * intimateMessages.length);
    const messageElement = document.getElementById('randomMessage');
    messageElement.style.opacity = '0';
    
    setTimeout(() => {
        messageElement.textContent = intimateMessages[randomIndex];
        messageElement.style.opacity = '1';
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    const privateContent = document.getElementById('privateContent');
    const privateLogin = document.getElementById('privateLogin');
    const passcodeInput = document.getElementById('passcodeInput');
    
    // Check if user is already logged in (stored in session)
    if (sessionStorage.getItem('privateUnlocked') === 'true') {
        showPrivateContent();
        generateNewMessage(); // Show a message when section loads
    } else {
        showPrivateLogin();
    }

    // Allow Enter key to submit passcode
    passcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });
});

function checkPasscode() {
    const passcodeInput = document.getElementById('passcodeInput');
    const loginMessage = document.getElementById('loginMessage');
    const inputValue = passcodeInput.value.trim();

    if (inputValue === CORRECT_PASSCODE) {
        sessionStorage.setItem('privateUnlocked', 'true');
        loginMessage.textContent = '✓ Passcode correct! Welcome, my love...';
        loginMessage.style.color = '#4CAF50';
        setTimeout(showPrivateContent, 500);
    } else if (inputValue === '') {
        loginMessage.textContent = 'Please enter the passcode';
        loginMessage.style.color = '#ff1744';
    } else {
        loginMessage.textContent = '✗ Incorrect passcode. Try again.';
        loginMessage.style.color = '#ff1744';
        passcodeInput.value = '';
        passcodeInput.focus();
    }
}

function showPrivateContent() {
    const privateContent = document.getElementById('privateContent');
    const privateLogin = document.getElementById('privateLogin');
    const privateGallery = privateContent.querySelector('.private-moments');
    const loginBox = privateLogin;

    if (privateGallery) {
        privateGallery.style.display = 'block';
        privateGallery.style.animation = 'fadeInScale 0.5s ease-out';
    }
    if (loginBox) {
        loginBox.style.display = 'none';
    }
    privateContent.classList.remove('hidden');
}

function showPrivateLogin() {
    const privateContent = document.getElementById('privateContent');
    const privateLogin = document.getElementById('privateLogin');
    const privateGallery = privateContent.querySelector('.private-moments');

    if (privateGallery) {
        privateGallery.style.display = 'none';
    }
    if (privateLogin) {
        privateLogin.style.display = 'block';
    }
    privateContent.classList.remove('hidden');
}

function logoutPrivate() {
    sessionStorage.removeItem('privateUnlocked');
    document.getElementById('passcodeInput').value = '';
    document.getElementById('loginMessage').textContent = '';
    showPrivateLogin();
    document.getElementById('passcodeInput').focus();
}
