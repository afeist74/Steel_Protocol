/**
 * Steel Protocol - Official Website Interaction Script
 * Designed using clean Vanilla JS architecture. No external frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SCROLL COMPONENT: NAVBAR STATE
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    const handleNavbarScroll = () => {
        // Appends a structural class to compress or tint header once scrolled
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);


    // ==========================================
    // 2. INTERACTIVE UI: MOBILE HAMBURGER MENU
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.getElementById('nav-links');
    const directLinks = document.querySelectorAll('.nav-links a');

    const toggleMobileMenu = () => {
        mobileMenuBtn.classList.toggle('open');
        navLinksList.classList.toggle('active');
    };

    // Listen for mobile navigation inputs
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Dynamic clean-up: closes overlay view instantly if user taps an item link
    directLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });


    // ==========================================
    // 3. PERFORMANCE OPTIMIZATION: IMAGE FALLBACKS
    // ==========================================
    const heroVisualWrapper = document.querySelector('.hero-visual');
    const characterImage = document.querySelector('.hero-character-img');

    // Double-checks image execution loop if source paths fail or are blank
    if (characterImage) {
        characterImage.addEventListener('error', () => {
            // Alters wrapper structure styles to load pristine local dev elements instead
            heroVisualWrapper.classList.add('placeholder');
            characterImage.style.display = 'none';
        });
    }
});
