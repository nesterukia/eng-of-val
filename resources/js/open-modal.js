const scriptURL = "https://script.google.com/macros/s/AKfycbzoLCR_EKH_K6foxCuH-0SMORD4I_b0KvIs44gbA8fLqynOmG5kSVr69e1KI_uhamXv/exec";
const menuButton = document.querySelector(".menu__button");
const body = document.querySelector("body");
menuButton.addEventListener('click', openModal);


function validateFields(form, fieldsArray){
    fieldsArray.forEach(field => {
        field.classList.remove("input-error");
        if(field.value.trim() == ""){
            field.classList.add("input-error");
        }
    });

    const errorFields = form.querySelectorAll(".input-error");

    return errorFields.length == 0;
}


function openModal(event){
    event.preventDefault();
    const regModal = document.createElement("div");
    regModal.classList.add("registration-modal");
    const container = document.createElement("div");
    container.classList.add("container");
    const regFlex = document.createElement("div");
    regFlex.classList.add("registration-flex");
    regModal.appendChild(container);
    container.appendChild(regFlex);

    fetch("resources/data/reg-modal-inner.html")
    .then((res) => res.text())
    .then((text) => {
        regFlex.innerHTML = text;
        const crossButton = document.querySelector(".registration__cross-button");
        crossButton.addEventListener('click', e =>{
            regModal.classList.remove('registration-modal--visible');
            regModal.remove();
            body.classList.remove('body--no-scroll');
            circles.forEach(circle => {
                circle.style.display = 'block';
            });
        }); 

        const form = document.querySelector(".form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const fields = document.querySelectorAll(".form__input");
            const isValid = validateFields(form, fields);
            if(isValid){
                regFlex.innerHTML = '<div class="form__loader"><div class="loader"></div>';
                let data = new FormData(form);
                data.forEach((value, key) => {
                    console.log(value, key);
                });
                fetch(scriptURL, {
                    method: "POST",
                    body: data
                })
                    .then(res => res.json())
                    .then(data => {
                        regFlex.innerHTML = "";
                        regFlex.appendChild(crossButton);
                        const message = document.createElement("div");
                        message.classList.add("form__message");
                        regFlex.appendChild(message);
                        let messageText;
                        if(data.result == 'success'){
                            messageText = document.createTextNode("Ваша заявка успешно отправлена!");
                            message.appendChild(messageText);
                            const checkmark = document.createElement("div");
                            checkmark.classList.add("form__checkmark");
                            message.after(checkmark);
                            fetch("resources/data/checkmark.html")
                                .then((res) => res.text())
                                .then((text) => {
                                    checkmark.innerHTML = text;
                                });
                        } else{
                            messageText = document.createTextNode("Что-то пошло не так. Попробуйте позже.");
                            message.appendChild(messageText);
                        }
                    });
            } else console.log("invalid!");
        });
     })
    .catch((e) => console.error(e));

    body.appendChild(regModal);
    regModal.classList.add('registration-modal--visible');
    body.classList.add('body--no-scroll');

    circles.forEach(circle => {
        circle.style.display = 'none';
    });
}