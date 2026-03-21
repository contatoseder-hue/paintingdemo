// Reserved for future interactivity
console.log("Page loaded successfully");






// Open the modal
function openModal() {
 document.getElementById("myModal").style.display = "block";
}
// Close the modal
function closeModal() {
 document.getElementById("myModal").style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}
// Thumbnail controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}
function showSlides(n) {
 let slides = document.getElementsByClassName("mySlides");
 if (n > slides.length) slideIndex = 1;
 if (n < 1) slideIndex = slides.length;
 for (let slide of slides) {
   slide.style.display = "none";
 }
 slides[slideIndex - 1].style.display = "block";
}