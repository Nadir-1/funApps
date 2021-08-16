function clock() {
    const deg = 6;
    var h = document.getElementById("h");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var today = document.getElementById("Date")
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;
    h.style.transform = `rotateZ(${hh + (mm / 12)}deg`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    today.textContent = day.toDateString();
    setTimeout(clock, 1000);
}
clock();