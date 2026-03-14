// typing animation

const text = "Ahmed Sayed";
let index = 0;

function type(){

if(index < text.length){

document.querySelector(".typing").innerHTML += text.charAt(index);

index++;

setTimeout(type,120);

}

}

type();


// scroll animation

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top = window.scrollY;
const offset = sec.offsetTop - 400;

if(top >= offset){

sec.style.opacity="1";
sec.style.transform="translateX(0)";

}

});

});