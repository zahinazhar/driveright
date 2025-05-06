/**
 * DRIVE RIGHT - MAIN JS
 * Combines: Smooth scrolling, package selection, testimonial carousel, and mobile menu
 */

document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. MOBILE MENU TOGGLE
  // ======================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger?.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // Toggle language switcher visibility on mobile
    if (window.innerWidth <= 768) {
      const languageSwitcher = document.querySelector('.language-switcher');
      languageSwitcher.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
    }
  });

  // ======================
  // 2. SMOOTH SCROLLING
  // ======================
  // Logo scroll-to-top
  document.getElementById('logo-link')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Close mobile menu if open
        navLinks?.classList.remove('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ======================
  // 3. PACKAGE SELECTION
  // ======================
  /*document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking directly on a link
      if (e.target.closest('a, button')) return;
      
      const packageType = this.dataset.package;
      const select = document.getElementById('package-select');
      
      if (select) {
        select.value = packageType;
        // Highlight selected card
        document.querySelectorAll('.price-card').forEach(c => {
          c.classList.remove('selected');
        });
        this.classList.add('selected');
      }
    });
  });*/

// ======================
// PACKAGE SELECTION (UPDATED)
// ======================
document.querySelectorAll('.price-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Get package type from card's data attribute
    const packageType = this.getAttribute('data-package');
    const select = document.getElementById('package-select');
    
    if (select) {
      // Find matching option and select it
      const options = select.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === packageType) {
          select.selectedIndex = i;
          break;
        }
      }
      
      // Highlight selected card
      document.querySelectorAll('.price-card').forEach(c => {
        c.classList.remove('selected');
      });
      this.classList.add('selected');
      
      // Optional: Scroll to form
      document.querySelector('#contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  });
});


  // ======================
  // 4. TESTIMONIAL CAROUSEL
  // ======================
  /*const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  
  if (slides.length > 1) {
    let currentIndex = 0;
    let isAnimating = false;
    let startX = 0;
    let autoSlideInterval;

    // Clone slides for infinite loop
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);
    
    // Set initial position
    track.style.transform = 'translateX(-100%)';

    function goToSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex = index;
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = translateX(-${(index + 1) * 100}%);
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    // Handle transition end
    track.addEventListener('transitionend', () => {
      isAnimating = false;
      
      // Handle infinite loop
      if (currentIndex >= slides.length) {
        track.style.transition = 'none';
        track.style.transform = 'translateX(-100%)';
        currentIndex = 0;
      } else if (currentIndex < 0) {
        track.style.transition = 'none';
        track.style.transform = translateX(-${slides.length * 100}%);
        currentIndex = slides.length - 1;
      }
    });

    // Button controls
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);

    // Touch support
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      pauseAutoSlide();
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!startX) return;
      const moveX = e.touches[0].clientX;
      const diff = startX - moveX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        diff > 0 ? nextSlide() : prevSlide();
        startX = 0;
      }
    }, { passive: true });

    // Auto-advance
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function pauseAutoSlide() {
      clearInterval(autoSlideInterval);
    }
    
    startAutoSlide();
    
    // Pause on hover
    track.addEventListener('mouseenter', pauseAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
  } else {
    // Hide buttons if only one testimonial
    nextBtn?.style.display = 'none';
    prevBtn?.style.display = 'none';
  }*/

// ======================
// TESTIMONIAL CAROUSEL (UPDATED)
// ======================
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  
  if (!track || slides.length <= 1) {
    if (nextBtn) nextBtn.style.display = 'none';
    if (prevBtn) prevBtn.style.display = 'none';
    return;
  }

  let currentIndex = 0;
  let isAnimating = false;
  let startX = 0;
  let autoSlideInterval;

  // Clone first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  firstClone.classList.add('clone');
  lastClone.classList.add('clone');
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  // Set initial position
  track.style.transform = 'translateX(-100%)';

  function goToSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = index;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = translateX(-${(index + 1) * 100}%);
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  // Handle transition end
  track.addEventListener('transitionend', () => {
    isAnimating = false;
    
    // Handle infinite loop
    if (currentIndex >= slides.length) {
      track.style.transition = 'none';
      track.style.transform = 'translateX(-100%)';
      currentIndex = 0;
    } else if (currentIndex < 0) {
      track.style.transition = 'none';
      track.style.transform = translateX(-${slides.length * 100}%);
      currentIndex = slides.length - 1;
    }
  });

  // Button controls
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Touch support
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    pauseAutoSlide();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;
    
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
      startX = 0;
    }
  }, { passive: true });

  // Auto-advance
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  
  function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  startAutoSlide();
  
  // Pause on hover
  track.addEventListener('mouseenter', pauseAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // ... (other initialization code)
  
  initCarousel(); // Add this line to initialize carousel
});

  // ======================
  // 5. HEADER SHADOW ON SCROLL
  // ======================
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
