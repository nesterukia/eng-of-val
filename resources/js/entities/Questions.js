let questionsList = document.querySelector(".questions__list");

const questionsArr = [
    {
        body: "Как добраться?",
        response: "Карта внизу"
    },
    {
        body: "Кто такой Сергей Михайлович?",
        response: "Не знаю((((("
    }
];

questionsArr.forEach(question =>{
    const questionBlock = document.createElement("li");
    ["question", "questions__item"].forEach(cl => questionBlock.classList.add(cl));

    const questionText = document.createElement("div");
    questionText.classList.add("question__text");

    const questionBody = document.createElement("h2");
    questionBody.classList.add("question__body");
    questionBody.innerText = question.body;

    const questionResponse = document.createElement("div");
    questionResponse.classList.add("question__answer");
    questionResponse.innerText = question.response;

    [questionBody, questionResponse].forEach(e => questionText.appendChild(e));

    const crossButton = document.createElement("img");
    crossButton.classList.add("question__button");
    crossButton.src = "resources/images/icons/cross.svg"
    crossButton.alt = "cross";

    [questionText, crossButton].forEach(e => questionBlock.appendChild(e));
    questionsList.appendChild(questionBlock);
});