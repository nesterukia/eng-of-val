const picturesSection = document.querySelector(".pictures");
const inputs = document.querySelectorAll(".pictures__input");
const contents = document.querySelectorAll(".content");
const labels = document.querySelectorAll(".pictures__label");
let runAnimation = true;
let inputNum = 0;

picturesSection.addEventListener("mouseover", e =>{
    e.target.style.cursor = 'default';
    circles.forEach(circle => {
        circle.style.opacity = '0';
    });
})

picturesSection.addEventListener("mouseout", e =>{
    e.target.style.cursor = 'none';
    circles.forEach(circle => {
        circle.style.opacity = '1';
    });
})

contents.forEach(content => {
    content.addEventListener("mouseover", e =>{
        runAnimation = false;
    })

    content.addEventListener("mouseout", e =>{
        runAnimation = true;
    })
});

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", e =>{
        inputNum = i;
    })
}


setInterval(() => {
    if(runAnimation){
        console.log(inputNum);
        inputs.forEach(input => {
            input.checked = false;
        });
        inputs[inputNum].checked = true;
        inputNum++;
        if(inputNum == 6){
            inputNum = 0;
        }
    }
}, 4000);