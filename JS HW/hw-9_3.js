let greeting = document.querySelector('h1');
let greetingButton = document.querySelector('button');
greetingButton.addEventListener('click', () => {
    greeting.textContent = 'Привет, мир!';
});