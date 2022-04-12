var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 50;

function typeWriter () {
    if (i < txt.length) {
        document.getElementById("intro-1").innerHTML += txt.charAt(i);
           i++;
    setTimeout(typeWriter, speed);}
    }