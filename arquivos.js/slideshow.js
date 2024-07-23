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
        slideTimeout = setTimeout(showSlides, 5000); 
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
        testimonialTimeout = setTimeout(showTestimonials, 5000); 
    }

    window.currentTestimonialSlide = function(n) {
        clearTimeout(testimonialTimeout);
        testimonialIndex = n - 1;
        showTestimonials();
    }

    showSlides(); 
    showTestimonials();
});
