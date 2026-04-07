let colorText = document.querySelector('p');
let colorButton = document.querySelector('button');
colorText.style.color = 'black';
colorButton.addEventListener('click', () => {
    if (colorText.style.color === 'black') {
        colorText.style.color = 'blue';
    } else {
        colorText.style.color = 'black';
    }
});