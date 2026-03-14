// loader

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});


// typing animation

const text="Ahmed Sayed";

let index=0;

function type(){

if(index<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(index);

index++;

setTimeout(type,120);

}

}

type();


// scroll reveal

const sections=document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

const top=window.scrollY;

sections.forEach(sec=>{

const offset=sec.offsetTop-400;

if(top>=offset){

sec.style.opacity="1";
sec.style.transform="translateY(0)";

}

});

});


// particles

particlesJS("particles-js",{

particles:{

number:{value:60},

size:{value:3},

move:{speed:2},

line_linked:{
enable:true,
color:"#7c5cff"
}

}

});
