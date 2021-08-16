var modal = document.getElementById("modal");
var ovl2 = document.getElementById("ovl2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var input1 = document.getElementById("name");
var input2 = document.getElementById("dd");
var da = document.getElementById("da");
var ho = document.getElementById("ho");
var mi = document.getElementById("mi");
var se = document.getElementById("se");
var title = document.getElementById("eventName");
var alertDate = document.getElementById("p");
function theEvent(x) {
  var now = new Date().getTime();
  remain = x - now;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var d = Math.floor(remain / day);
  var h = Math.floor((remain % day) / hour);
  var m = Math.floor((remain % hour) / minute);
  var s = Math.floor((remain % minute) / second);
  da.textContent = d;
  ho.textContent = h;
  mi.textContent = m;
  se.textContent = s;
}
window.onload = () => {
  ovl2.style.display = "block";
  modal.style.display = "flex";
};
btn1.addEventListener("click", () => {
  ovl2.style.display = "none";
  modal.style.display = "none";
});
btn2.addEventListener("click", (ev) => {
  ev.preventDefault();
  targetD = new Date(input2.value);
  if (targetD > new Date().getTime()) {
    title.textContent = input1.value;
    ovl2.style.display = "none";
    modal.style.display = "none";
    setInterval(() => {
      theEvent(targetD);
    }, 1000);
  } else {
    alertDate.style.display = "block";
  }
});
