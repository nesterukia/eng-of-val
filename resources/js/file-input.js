const fileInputBlocks = document.querySelectorAll('.form__block--file-input');

fileInputBlocks.forEach(block =>{
    const input = block.querySelector(".file-input");
    const buttonText = block.querySelector(".file-input__button-text");
});



input.onChange = function(){
    let countFiles = '';
    if (this.files && this.files.length >= 1){
        countFiles = this.files.length;
    }
    if (countFiles){
        buttonText.innerText = 'Выбрано файлов: ' + countFiles;
    } else{
        const fileName = (block.querySelector(".file-input__filename")).value;
        buttonText.innerText = fileName;
    }
    console.log(buttonText.innerText);
};