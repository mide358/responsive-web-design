const hamburger = document.getElementById("hamburger");
const navLink = document.getElementById("nav-links");

hamburger.addEventListener('click', ()=>{
  navLink.classList.toggle('show');
})