const picturesSection = document.querySelector(".pictures");
const inputs = document.querySelectorAll(".pictures__input");
const contents = document.querySelectorAll(".content");
const labels = document.querySelectorAll(".pictures__label");
const leftButton = document.querySelector(".pictures__left-button");
const rightButton = document.querySelector(".pictures__right-button");
let runAnimation = true;
let inputNum = 0;



leftButton.addEventListener("click", e =>{
    runAnimation = false;
    if(inputNum == 0){
        inputNum = 5;
    } else inputNum--;
    inputs.forEach(input => {
        input.checked = false;
    });
    inputs[inputNum].checked = true;
    setTimeout(()=>{
        runAnimation = true;
    }, 5000);
})

rightButton.addEventListener("click", e =>{
    runAnimation = false;
    if(inputNum == 5){
        inputNum = 0;
    } else inputNum++;
    inputs.forEach(input => {
        input.checked = false;
    });
    inputs[inputNum].checked = true;
    setTimeout(()=>{
        runAnimation = true;
    }, 5000);
})
picturesSection.addEventListener("mouseover", e =>{
    e.target.style.cursor = 'pointer';
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