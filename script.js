const countDownDate = new Date("March 27, 2023 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var bday = date + month;

   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

     if (bday === 29) {
     document.getElementById("countdown").innerHTML = "TODAY IS THE DAY! " + "HAPPY BIRTHDAY QUINN ";
     console.log("hi");
     }

}, 1000);

function clickIt() {
    alert("Uncle Dave is her favorite!!!");
}