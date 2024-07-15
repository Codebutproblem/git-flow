
const timeLeft = document.getElementById('second-left');
const countdown = setInterval(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const difference = newYear - now;
    timeLeft.innerHTML = `${Math.floor(difference / (1000 * 60 * 60 * 24))} days ${Math.floor((difference / (1000 * 60 * 60)) % 24)} hours ${Math.floor((difference / 1000 / 60) % 60)} minutes ${Math.floor((difference / 1000) % 60)} seconds`;
}, 1000);


// Random String Generator
const randomButton = document.getElementById('random-button');
const randomResult = document.getElementById('random-result');
const randomLength = document.getElementById('random-length');
randomButton.addEventListener('click', () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = randomLength.value;
    let result = "";

    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    randomResult.innerHTML = result;
});