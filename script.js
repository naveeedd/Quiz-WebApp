document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slider");
    let index = 0;

    function nextSlide() {
        index = (index + 1) % 3; 
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
