const rulesDoc = document.querySelector(".rules__document");
const rulesFallback = document.querySelector(".rules__fallback");
const aboutPicture = document.querySelector(".about__picture");
const header = document.querySelector("header");


header.addEventListener("mouseover", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '0';
    });
})
header.addEventListener("mouseout", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '1';
    });
})

aboutPicture.addEventListener("mouseover", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '0';
    });
})
aboutPicture.addEventListener("mouseout", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '1';
    });
})

rulesDoc.addEventListener("mouseover", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '0';
    });
})
rulesDoc.addEventListener("mouseout", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '1';
    });
})