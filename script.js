// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const languageSelect = document.getElementById('language-select');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle language switcher visibility on mobile
        if (window.innerWidth <= 768) {
            const languageSwitcher = document.querySelector('.language-switcher');
            if (navLinks.classList.contains('active')) {
                languageSwitcher.style.display = 'block';
            } else {
                languageSwitcher.style.display = 'none';
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
const form = document.querySelector('.contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            formStatus.textContent = document.getElementById('language-select').value === 'ms' 
                ? 'Permohonan berjaya dihantar! Kami akan menghubungi anda tidak lama lagi.' 
                : 'Application submitted! We’ll contact you soon.';
            formStatus.style.color = 'green';
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.textContent = document.getElementById('language-select').value === 'ms' 
            ? 'Ralat! Sila cuba lagi.' 
            : 'Error! Please try again.';
        formStatus.style.color = 'red';
    } finally {
        formStatus.style.display = 'block';
        submitButton.disabled = false;
        submitButton.textContent = document.getElementById('language-select').value === 'ms' 
            ? 'Hantar Permohonan' 
            : 'Submit Application';
    }
});

    // Add shadow to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Show language switcher on mobile when menu is open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.language-switcher').style.display = 'block';
        } else if (!navLinks.classList.contains('active')) {
            document.querySelector('.language-switcher').style.display = 'none';
        }
    });
});