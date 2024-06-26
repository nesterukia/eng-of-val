const questions = document.querySelectorAll(".question");
questions.forEach(question => {
    const questionButton = question.querySelector(".question__button");
    const questionTitle = question.querySelector(".question__body");
    questionTitle.addEventListener("click", ()=>{
        if(question.classList.contains("question--opened")){
            question.classList.remove("question--opened");
        } else {
            questions.forEach(question =>{
                question.classList.remove("question--opened");
            })
            question.classList.add("question--opened");
        }
    })

    questionButton.addEventListener("click", ()=>{
        if(question.classList.contains("question--opened")){
            question.classList.remove("question--opened");
        } else {
            questions.forEach(question =>{
                question.classList.remove("question--opened");
            })
            question.classList.add("question--opened");
        }
    })

    question.addEventListener("mouseover", e =>{
        circles.forEach(circle => {
            circle.style.opacity = '0';
        });
    })
    question.addEventListener("mouseout", e =>{
        circles.forEach(circle => {
            circle.style.opacity = '1';
        });
    })
});