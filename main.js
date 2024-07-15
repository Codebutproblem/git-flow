
const timeLeft = document.getElementById('second-left');
const countdown = setInterval(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const difference = newYear - now;
    timeLeft.innerHTML = `${Math.floor(difference / (1000 * 60 * 60 * 24))} days ${Math.floor((difference / (1000 * 60 * 60)) % 24)} hours ${Math.floor((difference / 1000 / 60) % 60)} minutes ${Math.floor((difference / 1000) % 60)} seconds`;
}, 1000);