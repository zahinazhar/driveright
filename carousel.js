// Infinite Looping Carousel with Touch Support
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    if (slides.length > 1) {
        let currentIndex = 0;
        let startX = 0;
        let isDragging = false;
        let autoSlideInterval;
        
        // Clone slides for infinite loop
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');
        track.appendChild(firstClone);
        track.insertBefore(lastClone, slides[0]);
        
        // Initialize position
        track.style.transform = 'translateX(-100%)';
        
        // Touch/Mouse events
        track.addEventListener('touchstart', handleDragStart, { passive: false });
        track.addEventListener('mousedown', handleDragStart);
        track.addEventListener('touchmove', handleDragMove, { passive: false });
        track.addEventListener('mousemove', handleDragMove);
        track.addEventListener('touchend', handleDragEnd);
        track.addEventListener('mouseup', handleDragEnd);
        track.addEventListener('mouseleave', handleDragEnd);
        
        // Navigation buttons
        nextBtn.addEventListener('click', goNext);
        prevBtn.addEventListener('click', goPrev);
        
        // Auto-advance
        startAutoSlide();
        
        // Pause on hover
        carousel.addEventListener('mouseenter', pauseAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
        
        function handleDragStart(e) {
            isDragging = true;
            startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            track.style.transition = 'none';
            pauseAutoSlide();
            e.preventDefault();
        }
        
        function handleDragMove(e) {
            if (!isDragging) return;
            const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const diff = x - startX;
            track.style.transform = translateX(calc(-${(currentIndex + 1) * 100}% + ${diff}px);
        }
        
        function handleDragEnd(e) {
            if (!isDragging) return;
            isDragging = false;
            
            const x = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
            const diff = x - startX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                diff > 0 ? goPrev() : goNext();
            } else {
                resetPosition();
            }
            
            startAutoSlide();
        }
        
        function goNext() {
            currentIndex++;
            updateCarousel();
        }
        
        function goPrev() {
            currentIndex--;
            updateCarousel();
        }
        
        function updateCarousel() {
            track.style.transition = 'transform 0.5s ease';
            track.style.transform = translateX(-${(currentIndex + 1) * 100}%);
        }
        
        function resetPosition() {
            track.style.transition = 'transform 0.5s ease';
            track.style.transform = translateX(-${(currentIndex + 1) * 100}%);
        }
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(goNext, 5000);
        }
        
        function pauseAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Handle infinite loop
        track.addEventListener('transitionend', () => {
            if (currentIndex >= slides.length) {
                currentIndex = 0;
                track.style.transition = 'none';
                track.style.transform = 'translateX(-100%)';
            } else if (currentIndex < 0) {
                currentIndex = slides.length - 1;
                track.style.transition = 'none';
                track.style.transform = translateX(-${slides.length * 100}%);
            }
        });
    } else {
        // Hide buttons if only one testimonial
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    }
});

// Scroll to top when logo is clicked
document.getElementById('logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});