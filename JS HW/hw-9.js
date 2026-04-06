let firstButton = document.querySelector('button');
firstButton.addEventListener('click', () => {
    const firstText = document.querySelector('.content');
    let textStatus = firstText.style.display;
    if (textStatus === 'block') {
        textStatus === 'none';
        firstButton.textContent = "Показать текст";
    } else if (textStatus === 'none') {
        textStatus === 'block';
        firstButton.textContent = "Скрыть текст";
    }
});