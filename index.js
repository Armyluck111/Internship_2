const nextbtn = document.querySelector(".slider__right");
const slides = document.querySelectorAll(".slider--img");
const curCounter=document.querySelector(".currentCounter")
const totalCounter=document.querySelector(".totalCounter")
console.log(slides);
let currentSlide = 0;

totalCounter.innerHTML=slides.length;
curCounter.innerHTML=currentSlide+1;

function nextSlide() {
  slides[currentSlide].classList.remove("slider__img--active");
  currentSlide++;
  if(currentSlide==slides.length){
    currentSlide=0;
  }
  slides[currentSlide].classList.add("slider__img--active");
  curCounter.innerHTML=currentSlide+1;
}


function preslide(){
    slides[currentSlide].classList.remove("slider__img--active");
    currentSlide--;
    if(currentSlide==-1){
      currentSlide=slides.length-1;
    }
    slides[currentSlide].classList.add("slider__img--active");
    curCounter.innerHTML=currentSlide+1;
}

function openModal(src) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

