var mybutton =document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function show(){
  document.querySelector(".nav-ul").classList.toggle("showNav");
}


function calculate(){
var video=document.getElementById("video");
var music=document.getElementById("music");
var social_media=document.getElementById("social_media");
var calls= document.getElementById("calls");
var data= document.getElementById("data");
var emails=document.getElementById("emails");
var answer = Number(video.value)*400 + Number(data.value)*3000 + Number(calls.value)*3420 + Number(social_media.value)*60 + Number(music.value)* 20 + Number(emails.value)* ((0.50*0.03) + (0.25*4) + (0.25)* 50);
document.getElementById("myform").style.display="none";
document.getElementById("calcButton").style.display='none';
var h1= document.createElement("h1");
h1.appendChild(document.createTextNode( (Math.round(100*(answer/1000))/100) + "kg"));
document.querySelector(".answer p").appendChild(h1);
var carVal= Math.round(100*(answer/650))/100;
var carbon= document.createElement("span");
carbon.appendChild(document.createTextNode("This quantity is equal to driving " + carVal + "km by car."));
document.querySelector(".answer .car_comp").appendChild(carbon);
document.querySelector(".answer").style.display='block';
console.log(answer);
}
  


