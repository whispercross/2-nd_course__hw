let firstButton = document.querySelector('button');
let firstText = document.querySelector('h1');
firstText.style.display = 'block';
firstButton.addEventListener('click', () => {
    if (firstText.style.display === 'block') {
        firstText.style.display = 'none';
        firstButton.textContent = 'Показать текст';
    } else {
        firstText.style.display = 'block';
        firstButton.textContent = 'Скрыть текст';
    }
});