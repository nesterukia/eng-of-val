let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu__link");

document.addEventListener("DOMContentLoaded", function(event) {
    menuLinks.forEach(link => {
        link.addEventListener("click", scrollToTargetAdjusted);
    });
});


function scrollToTarget(id) {

    var element = document.getElementById(id);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  function scrollToTargetAdjusted(event) {
    event.preventDefault();
    const id = event.target.getAttribute("data-scroll-to");
    var element = document.querySelector(`[data-section-id='${id}']`);
    var headerOffset = 145;
    console.log(headerOffset);
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
      
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
  }

  function backToTop() {
    window.scrollTo(0, 0);
  }