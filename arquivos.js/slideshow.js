document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    let slideTimeout;
    let testimonialIndex = 0;
    let testimonialTimeout;

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        slideTimeout = setTimeout(showSlides, 4000);
    }

    window.currentSlide = function(n) {
        clearTimeout(slideTimeout);
        slideIndex = n - 1;
        showSlides();
    }

    function showTestimonials() {
        let testimonials = document.querySelectorAll(".testimonialSlides");
        let testimonialDots = document.querySelectorAll(".testimonial-dot");
        testimonials.forEach(testimonial => testimonial.style.display = "none");
        testimonialDots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        testimonialIndex++;
        if (testimonialIndex > testimonials.length) { testimonialIndex = 1; }
        testimonials[testimonialIndex - 1].style.display = "block";
        testimonialDots[testimonialIndex - 1].className += " active";
        testimonialTimeout = setTimeout(showTestimonials, 4000);
    }

    window.currentTestimonialSlide = function(n) {
        clearTimeout(testimonialTimeout);
        testimonialIndex = n - 1;
        showTestimonials();
    }
    let slideshowContainer = document.querySelector('.slideshow-container');
    let testimonialSlideshowContainer = document.querySelector('.testimonial-slideshow-container');

    if (slideshowContainer) {
        let hammer = new Hammer(slideshowContainer);
        hammer.on('swipeleft', () => {
            clearTimeout(slideTimeout);
            slideIndex++;
            if (slideIndex > document.querySelectorAll(".mySlides").length) { slideIndex = 1; }
            updateSlides();
            slideTimeout = setTimeout(showSlides, 5000);
        });
        hammer.on('swiperight', () => {
            clearTimeout(slideTimeout);
            slideIndex--;
            if (slideIndex < 1) { slideIndex = document.querySelectorAll(".mySlides").length; }
            updateSlides();
            slideTimeout = setTimeout(showSlides, 5000); 
        });
    }

    if (testimonialSlideshowContainer) {
        let hammerTestimonial = new Hammer(testimonialSlideshowContainer);
        hammerTestimonial.on('swipeleft', () => {
            clearTimeout(testimonialTimeout);
            testimonialIndex++;
            if (testimonialIndex > document.querySelectorAll(".testimonialSlides").length) { testimonialIndex = 1; }
            updateTestimonials();
            testimonialTimeout = setTimeout(showTestimonials, 5000);
        });
        hammerTestimonial.on('swiperight', () => {
            clearTimeout(testimonialTimeout);
            testimonialIndex--;
            if (testimonialIndex < 1) { testimonialIndex = document.querySelectorAll(".testimonialSlides").length; }
            updateTestimonials();
            testimonialTimeout = setTimeout(showTestimonials, 5000); 
        });
    }

    function updateSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function updateTestimonials() {
        let testimonials = document.querySelectorAll(".testimonialSlides");
        let testimonialDots = document.querySelectorAll(".testimonial-dot");
        testimonials.forEach(testimonial => testimonial.style.display = "none");
        testimonialDots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        testimonials[testimonialIndex - 1].style.display = "block";
        testimonialDots[testimonialIndex - 1].className += " active";
    }

    showSlides();
    showTestimonials();
});
