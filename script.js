function startCountdown() {
    const countdown = document.getElementById("countdown");
    let targetTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 4; // 4 days countdown

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetTime - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (timeLeft < 0) {
            targetTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 4; // Reset to 4 days
        }
    }

    setInterval(updateCountdown, 1000);
}

startCountdown();