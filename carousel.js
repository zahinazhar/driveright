document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. SMOOTH SCROLLING
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
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ======================
  // 2. PACKAGE SELECTION
  // ======================
  document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('click', function() {
      const packageType = this.dataset.package;
      const select = document.getElementById('package-select');
      
      if (select) {
        select.value = packageType;
        document.querySelectorAll('.price-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        
        // Optional: Scroll to form
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ======================
  // 3. TESTIMONIAL CAROUSEL
  // ======================
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  
  if (slides.length > 1) {
    let currentIndex = 0;
    let isAnimating = false;
    let interval;

    // Clone slides for infinite loop
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);
    
    // Set initial position
    track.style.transform = translateX(-100%);

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

    track.addEventListener('transitionend', () => {
      isAnimating = false;
      
      // Handle infinite loop
      if (currentIndex >= slides.length) {
        track.style.transition = 'none';
        track.style.transform = translateX(-100%);
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
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      clearInterval(interval);
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!startX) return;
      const diff = startX - e.touches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
        startX = 0;
      }
    }, { passive: true });

    // Auto-advance
    function startAutoSlide() {
      interval = setInterval(nextSlide, 5000);
    }
    
    startAutoSlide();
    
    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(interval));
    track.addEventListener('mouseleave', startAutoSlide);
  } else {
    // Hide buttons if only one testimonial
    nextBtn?.style.display = 'none';
    prevBtn?.style.display = 'none';
  }
});
