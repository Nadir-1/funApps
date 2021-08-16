function clock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  document.getElementById("date").textContent = date.toDateString();
  document.getElementById("Hours").textContent = h;
  document.getElementById("Minutes").textContent = m;
  document.getElementById("Seconds").textContent = s;
  setTimeout(clock, 1000);
}
clock();
