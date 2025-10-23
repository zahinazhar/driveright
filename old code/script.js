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
    /*const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            const currentLang = document.getElementById('language-select').value;
            const message = currentLang === 'ms' ? 
                'Terima kasih atas permohonan anda! Kami akan menghubungi anda tidak lama lagi.' : 
                'Thank you for your application! We will contact you shortly.';
            alert(message);
            this.reset();
        });
    }
    
    // Add this to your existing form handler
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation example
    const name = this.querySelector('input[type="text"]').value;
    if (!name) {
        alert(languageSelect.value === 'ms' ? 'Sila isi nama anda' : 'Please enter your name');
        return;
    }

    // Submit via Formspree/Netlify (or use fetch() for Google Script)
    this.submit();
});*/

// Add this to your existing script.js
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

// ==============================================
// AUTO-SELECT PACKAGE IN FORM (NEW FUNCTIONALITY)
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
  // 1. Auto-select package when clicking pricing cards
  document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Skip if clicking directly on a link/button
      if (e.target.closest('a, button')) return;
      
      const packageType = this.dataset.package;
      const select = document.getElementById('package-select');
      
      if (select) {
        select.value = packageType;
        highlightSelectedCard(this);
      }
    });
  });

  // 2. Make "Choose" buttons work
  document.querySelectorAll('.price-card a').forEach(button => {
    button.addEventListener('click', function(e) {
      const packageType = this.closest('.price-card').dataset.package;
      const select = document.getElementById('package-select');
      
      if (select) select.value = packageType;
    });
  });

  // 3. Optional: Highlight selected card
  function highlightSelectedCard(selectedCard) {
    document.querySelectorAll('.price-card').forEach(card => {
      card.classList.remove('selected');
    });
    selectedCard.classList.add('selected');
  }
});

// Smooth scroll to top when logo is clicked
document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
