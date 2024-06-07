const menuToggle=document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
let a = document.getElementById("submit");

function displymsg(){
    a.addEventListener("click",()=>{
        alert("Resonse Submitted!");
    })
}

menuToggle.addEventListener("click",() =>{
    nav.classList.toggle('open');
})

const modeToggle=document.querySelector(".mode-toggle");
const body = document.querySelector('body');

modeToggle.addEventListener("click",()=>{
    body.classList.toggle('ligh-mode');
})