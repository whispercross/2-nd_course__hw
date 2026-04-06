const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'Новый абзац';
    document.body.appendChild(newElement);
});