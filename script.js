var emails=new Array();
emails["less"]="70";
emails["medium"]="200";
emails["high"]="400";

function getEmail(){
  var emailNumber=0;
 var form= document.getElementById("myform");
  var Mail=document.querySelectorAll(".mail");
  for(var i=0; i<Mail.length; i++){
    if(Mail[i].checked){
      emailNumber= emails[Mail[i].value];
      break;
    }
  }
  return emailNumber;
}


function Calculate(){
var video=document.getElementById("video");
var music=document.getElementById("music");
var social_media=document.getElementById("social_media");
var calls= document.getElementById("calls");
var data= document.getElementById("data");
var answer = Number(video.value)*400 +
 Number(data.value)*3000 + Number(calls.value)*3420
  + Number(social_media.value)*60 + Number(music.value)* 20 
  + Number(getEmail())* ((0.50*0.03) + (0.25*4) + (0.25)* 50);
document.getElementById("myform").style.display='none';


document.getElementById("car-icon").style.display="flex";
document.getElementById("plane-icon").style.display="flex";
document.querySelector(".answer h1").appendChild(document.createTextNode( (Math.round(100*(answer/1000))/100) + "kg"));
var carVal= Math.round(100*(answer/650))/100;
var carbon= document.createElement("p");
carbon.appendChild(document.createTextNode("This quantity is equal to driving " + carVal + " km."));
document.querySelector(".car-equivalent").appendChild(carbon);
document.querySelector(".car-equivalant").style.display='block';
document.querySelector(".air-equivalent").style.display='block';
}



