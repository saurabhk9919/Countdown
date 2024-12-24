const endDate = new Date("20 Feb, 2025 00:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneYearInMillis = 24 * 60 * 60 * 1000 * 365; 
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneHourInMillis = 60 * 60 * 1000;
    const oneMinInMillis = 60 * 1000;
    const oneSecondInMillis = 1000;

    
    const years = Math.floor(distancePending / oneYearInMillis); 
    const remainingAfterYears = distancePending % oneYearInMillis;

    const days = Math.floor(remainingAfterYears / oneDayInMillis);
    const remainingAfterDays = remainingAfterYears % oneDayInMillis;

    const hrs = Math.floor(remainingAfterDays / oneHourInMillis); 
    const remainingAfterHours = remainingAfterDays % oneHourInMillis;

    const mins = Math.floor(remainingAfterHours / oneMinInMillis); 
    const secs = Math.floor((remainingAfterHours % oneMinInMillis) / oneSecondInMillis); 
    

    document.getElementById("years").innerHTML = years;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered / totalDistance) * 100;

  
    document.getElementById("progressbar").style.width = Math.min(percentageDistance, 100) + "%";

    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The Wait is Over";
        document.getElementById("progressbar").style.width = "100%";
    }
}, 1000);
