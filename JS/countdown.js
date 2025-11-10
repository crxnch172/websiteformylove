// Change the date here using new Date(year, monthIndex (0-11), day, hours, minutes, seconds); month is zero-based (0 = January)
const anniversaryDate = new Date(2025, 10, 11, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const difference = anniversaryDate - now; 
    
    if (difference < 0) {
        document.getElementById('years').textContent = 0;
        document.getElementById('months').textContent = 0;
        document.getElementById('days').textContent = 0;
        document.getElementById('hours').textContent = 0;
        document.getElementById('minutes').textContent = 0;
        document.getElementById('seconds').textContent = 0;
        return;
    }
    
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    
    document.getElementById('years').textContent = 0;
    document.getElementById('months').textContent = 0;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = remainingHours;
    document.getElementById('minutes').textContent = remainingMinutes;
    document.getElementById('seconds').textContent = remainingSeconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);