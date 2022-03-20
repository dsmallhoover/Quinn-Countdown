const countDownDate = new Date("March 27, 2022 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   if (distance < 0) {
       document.getElementById("demo").innerHTML = "TODAY IS THE DAY! " + "HAPPY BIRTHDAY QUINN ";
   }

}, 1000);

function clickIt() {
    alert("Uncle Dave is her favorite!!!");
}