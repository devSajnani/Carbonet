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

document.querySelector(".answer").style.display="block";
document.getElementById("car-icon").style.display="flex";
document.getElementById("plane-icon").style.display="flex";
document.querySelector(".answer h1").appendChild(document.createTextNode( (Math.round(100*(answer/1000))/100) + "kg"));
var carVal= Math.round(100*(answer/200))/100;
var car_emission= document.createElement("p");
car_emission.appendChild(document.createTextNode("This quantity is equal to driving " + carVal + " km."));
document.querySelector(".car-equivalent").appendChild(car_emission);
var airVal= Math.round(100*(answer/170))/100;
var air_emission =document.createElement('p');
air_emission.appendChild(document.createTextNode("This quantity is equal to " + airVal + " km by plane. This value is quite high even though planes release a lot of emissions, since we're taking the emission of CO2e per person per km, and there are a lot of people on a plane."));
document.querySelector(".air-equivalent").appendChild(air_emission);

}

const showDialog = (Id) => {
  document.querySelectorAll('.popup')[Id].classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  document.querySelector(".mask").classList.add('disableDiv');
  var links= document.querySelectorAll('.link-github');
  for(var i=0; i<links.length; i++){
    links[i].classList.add('disabled-link');
  }
  const body = document.body;
  body.style.width="100%";
  body.style.position= 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeDialog = (Id) => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.querySelector(".mask").classList.remove('disableDiv');
  document.querySelectorAll('.popup')[Id].classList.remove('show');
  for(var i=0; i<links.length; i++){
    links[i].classList.remove('disabled-link');
  }
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

