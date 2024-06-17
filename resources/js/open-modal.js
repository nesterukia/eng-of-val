const menuButton = document.querySelector(".menu__button");
const body = document.querySelector("body");
// const crossButton = document.querySelector("registration__cross-button");
menuButton.addEventListener('click', openModal);







function openModal(event){
    event.preventDefault();
    const regModal = document.createElement("div");
    regModal.classList.add("registration-modal");

    const container = document.createElement("div");
    container.classList.add("container");

    const regFlex = document.createElement("div");
    regFlex.classList.add("registration-flex");

    const crossButton = document.createElement("button");
    crossButton.classList.add("registration__cross-button");
    crossButton.innerHTML = '<img src="resources/images/icons/cross.svg" alt="exit">';

    const regTitle = document.createElement("h1");
    const regTitleText = document.createTextNode("Подача заявки");
    regTitle.classList.add("registration__title");
    regTitle.appendChild(regTitleText);

    regFlex.appendChild(crossButton);
    regFlex.appendChild(regTitle);

    container.appendChild(regFlex);
    regModal.appendChild(container);

    body.appendChild(regModal);
    regModal.classList.add('registration-modal--visible');
    body.classList.add('body--no-scroll');

    circles.forEach(circle => {
        circle.style.display = 'none';
    });

    crossButton.addEventListener('click', e =>{
        regModal.remove();
        regModal.classList.remove('registration-modal--visible');
        body.classList.remove('body--no-scroll');
    
        circles.forEach(circle => {
            circle.style.display = 'block';
        });
    }); 
}