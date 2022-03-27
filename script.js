const countDownDate = new Date("March 27, 2022 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

     if (today = 03 + '/' + 27) {
     document.getElementById("countdown").innerHTML = "TODAY IS THE DAY! " + "HAPPY BIRTHDAY QUINN ";
     }

}, 1000);

function clickIt() {
    alert("Uncle Dave is her favorite!!!");
}