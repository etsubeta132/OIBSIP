
function myFunction() {
  const menu = document.querySelector('.menu');
  var menuI = document.getElementById('menu')
    menu.classList.toggle('show');
    // menuI.style.display = block;
}


const typingElement = document.querySelector('.typing');
const words = ['Full Stack Web Developer', 'Flutter App Developer','Python Developer','Freelancer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (isDeleting && charIndex <= 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  if (!isDeleting && charIndex === words[wordIndex].length) {
    isDeleting = true;
  }

  typingElement.textContent = words[wordIndex].substring(0, charIndex + (isDeleting ? -1 : 1));
  charIndex += isDeleting ? -1 : 1;

  setTimeout(type, isDeleting ? 100 : 200);
}

const typingEle = document.querySelector('.typing_2');
const word = ['Full Stack Web Developer', 'Flutter App Developer','Python Developer','Freelancer'];
let wordI = 0;
let charI= 0;
let isDel = false;

function type_2() {
  if (isDel && charI <= 0) {
    isDel = false;
    wordI = (wordI + 1) % word.length;
  }

  if (!isDel && charI=== word[wordI].length) {
    isDel = true;
  }

  typingEle.textContent = word[wordI].substring(0, charI + (isDel ? -1 : 1));
  charI += isDel ? -1 : 1;

  setTimeout(type_2, isDel ? 100 : 200);
}
window.addEventListener('DOMContentLoaded', type);
window.addEventListener('DOMContentLoaded', type_2);


























