var tl = gsap.timeline({paused:true});

var showMenu = document.querySelector("#nav i");
var hideMenu = document.querySelector("#full i");

tl.to("#full",{
    right:0,
    duration:0.4,
 })
 
 tl.from("#full h4",{
     opacity:0,
     x:50,
     stagger:0.1
 })
 
 tl.from("#full i",{
     opacity:0,
 })

 tl.pause();

showMenu.addEventListener("click",function(){
   tl.play();
})

hideMenu.addEventListener("click",function(){
    tl.reverse();
})