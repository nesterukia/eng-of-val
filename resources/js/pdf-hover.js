const rulesDoc = document.querySelector(".rules__document");
const rulesFallback = document.querySelector(".rules__fallback");

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