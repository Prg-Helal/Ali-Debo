// Top Bar Ad Rotation
document.addEventListener('DOMContentLoaded', function () {
    // Rotate top bar ads every 5 seconds
    const adSlides = document.querySelectorAll('.top-bar-ad .ad-slide');
    let currentAd = 0;

    function rotateAds() {
        adSlides[currentAd].style.opacity = '0';
        currentAd = (currentAd + 1) % adSlides.length;
        adSlides[currentAd].style.opacity = '1';
    }

    setInterval(rotateAds, 5000);

    // Floating ad close functionality
    window.closeFloatingAd = function () {
        document.getElementById('floatingAd').style.display = 'none';
    }

    // Show floating ad after scrolling
});
// Loading Screen
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1500);
});

// Simple theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-mode');

    // Save preference to localStorage
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
}
// Language Toggle
const languageToggle = document.getElementById('languageToggle');
const sidebarLanguageToggle = document.getElementById('sidebarLanguageToggle');

const toggleLanguage = () => {
    const langSpan = languageToggle.querySelector('span');
    if (langSpan.textContent === 'EN') {
        langSpan.textContent = 'AR';
        // Here you would typically change the page language
        // alert('تم تغيير اللغة إلى العربية');
    } else {
        langSpan.textContent = 'EN';
        // alert('Language changed to English');
    }
};

if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
}

if (sidebarLanguageToggle) {
    sidebarLanguageToggle.addEventListener('click', toggleLanguage);
}

// Form Submission
const registrationForm = document.getElementById('registrationForm');
const confirmationMessage = document.getElementById('confirmationMessage');

if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmationMessage.style.display = 'block';
        registrationForm.reset();

        // Scroll to confirmation
        setTimeout(() => {
            window.scrollTo({
                top: confirmationMessage.offsetTop - 150,
                behavior: 'smooth'
            });
        }, 300);
    });
}

// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
    }
}

// Optional: Add pulse animation when page loads
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.start-btn');
    btn.classList.add('pulse');

    setTimeout(() => {
        btn.classList.remove('pulse');
    }, 4500);
});

// Scroll Animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Add click animation
languageToggle.addEventListener('click', () => {
    languageToggle.classList.add('clicked');
    setTimeout(() => languageToggle.classList.remove('clicked'), 400);

    // Example: Toggle between EN/FR (modify as needed)
    const currentLang = languageToggle.querySelector('span');
    currentLang.textContent = currentLang.textContent === 'EN' ? 'FR' : 'EN';
});

// Optional: Rotate globe on hover
languageToggle.addEventListener('mouseenter', () => {
    languageToggle.querySelector('i').style.transform = 'rotate(15deg)';
});

languageToggle.addEventListener('mouseleave', () => {
    languageToggle.querySelector('i').style.transform = 'rotate(0)';
});
// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (mobileToggle && sidebar && overlay) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
    });

    overlay.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Header scroll effect
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (sidebar && sidebar.classList.contains('open')) {
                mobileToggle.classList.remove('active');
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
const floatingBtnMobile = document.getElementById('floatingBtnMobile');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
            floatingBtnMobile.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
            floatingBtnMobile.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}

const containers = Array.from(document.querySelectorAll('.image-container'));
const galleryEl = document.getElementById('gallery');


// Initialize header
if (window.scrollY > 50 && header) {
    header.classList.add('scrolled');
}

// Animation options and configuration
const options = {
    intervalMs: 3000,          // Time between each animation loop in milliseconds
    animationDuration: 1.0,    // Duration of a single card animation in seconds
    staggerDelay: 0.1,         // Stagger delay between each card in a loop
};

// State variables for the animation loop
let loopTimer = null;
let isPlaying = true;
let isIntersecting = false;

// Helper function to generate a random image URL (from picsum)
function randomPic() {
    const index = Math.floor(Math.random() * 6) + 1; // من 1 لـ 6
    return `images/${index}.jpg`;
}

// Helper function to preload an image to avoid flickering
function preloadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
    });
}

// Helper function to position the 'next' image off-screen
function positionNextOffscreen(nextEl, dir) {
    gsap.set(nextEl, { clearProps: "all" });
    const positions = {
        'left': { x: '100%', y: '0%' },
        'right': { x: '-100%', y: '0%' },
        'up': { x: '0%', y: '100%' },
    };
    gsap.set(nextEl, positions[dir] || { x: '0%', y: '0%' });
    nextEl.style.opacity = 1;
}

// Main animation function for a single container
function animateContainer(container, delay = 0) {
    return new Promise(async (resolve) => {
        const dir = container.dataset.direction;
        const current = container.querySelector('.current');
        const next = container.querySelector('.next');

        if (!isPlaying) { resolve(); return; }

        await preloadImage(next.src);
        positionNextOffscreen(next, dir);

        const propsOut = {};
        const propsIn = {};
        if (dir === 'left') {
            propsOut.x = '-100%';
            propsIn.x = '0%';
        } else if (dir === 'right') {
            propsOut.x = '100%';
            propsIn.x = '0%';
        } else if (dir === 'up') {
            propsOut.y = '-100%';
            propsIn.y = '0%';
        }

        next.style.zIndex = 2;
        current.style.zIndex = 1;

        await new Promise(r => setTimeout(r, Math.round(delay * 1000)));

        if (!isPlaying) { resolve(); return; }

        // Animate 'current' image out with a slight scale down
        gsap.to(current, { ...propsOut, scale: 0.95, duration: options.animationDuration, ease: "power2.inOut" });

        // Animate 'next' image in with a slight scale up
        gsap.to(next, {
            ...propsIn,
            scale: 1,
            duration: options.animationDuration,
            ease: "power2.inOut",
            onComplete: () => {
                current.src = next.src;
                gsap.set(current, { x: 0, y: 0, scale: 1 });
                next.src = randomPic();
                positionNextOffscreen(next, dir);
                resolve();
            }
        });
    });
}

// Function to animate all containers in the gallery
async function animateAll() {
    if (!isPlaying) return;
    const promises = containers.map((c, idx) => animateContainer(c, idx * options.staggerDelay));
    await Promise.all(promises);
}

// Function to start the animation loop using a recursive setTimeout
function startLoop() {
    if (loopTimer) return;
    async function tick() {
        if (!isPlaying || !isIntersecting) { loopTimer = null; return; }
        await animateAll();
        loopTimer = setTimeout(tick, options.intervalMs);
    }
    tick();
}

// Function to stop the animation loop
function stopLoop() {
    if (loopTimer) {
        clearTimeout(loopTimer);
        loopTimer = null;
    }
}

// Initial setup for all containers on page load
containers.forEach(c => {
    const dir = c.dataset.direction;
    const next = c.querySelector('.next');
    positionNextOffscreen(next, dir);
    if (!next.src || next.src.trim() === '') next.src = randomPic();
    preloadImage(next.src);
});

// IntersectionObserver to control auto-play based on visibility
const observerForAds = new IntersectionObserver(([entry]) => {
    isIntersecting = entry.isIntersecting;
    if (isIntersecting && isPlaying) {
        startLoop();
    } else {
        stopLoop();
    }
}, { threshold: 0.5 });

observerForAds.observe(galleryEl);


// Create particles after page loads
window.addEventListener('load', createParticles);