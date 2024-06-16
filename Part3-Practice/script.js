var tl = gsap.timeline();

tl.from("nav", {
  y: -200,
  opacity: 0,
});

tl.from("nav h1", {
  y: -40,
  opacity: 0,
});
tl.from(".part2 h4", {
  opacity: 0,
  y: 20,
  stagger: 0.2,
});
tl.from(".page1 h1",{
opacity:0,
stagger:0.2,

})
tl.to(".page1 h1",{
opacity:1,


})
tl.to(".page1 h1",{
    scale:1.5,
    y:400,
   
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"body",
        start:"top 20%",
        scrub:2,
        // markers:true
    }
})

tl.to(".page2",{
 backgroundColor:"#0070e8",
 scrollTrigger:{
  trigger:".page2",
  scroller:"body",

 }

})
gsap.to(".page2 h1", {
   backgroundColor:"white",
    transform: "translateX(-50%)",
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
    //   markers: true,
      start:"top 0%",
      end:"top -150%",
      scrub:2,
      pin:true,
      
    },
  });