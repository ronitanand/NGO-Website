const  dot_one=document.querySelector('#change p:nth-child(1)');
const  dot_two=document.querySelector('#change p:nth-child(2)');
const  dot_three=document.querySelector('#change p:nth-child(3)');
const img=document.querySelector('.intro-header img');
const scroll=document.querySelector('.scroll');
const hamburger=document.querySelector('.hamburger');
const navmenu=document.querySelector('.navmenu');


dot_two.addEventListener('click',()=>{
img.src='https://preview.colorlib.com/theme/chariter/assets/img/hero/h1_hero3.jpg';
})

scroll.addEventListener('click',()=>{
    window.scrollTo(10,10);
})

console.log(hamburger);
hamburger.addEventListener('click',(evt)=>{
navmenu.classList.toggle('show-menu');



})