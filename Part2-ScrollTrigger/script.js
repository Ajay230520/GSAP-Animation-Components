gsap.to("#page2 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true,
    
  },
});

gsap.to("",{
  
})

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// })

//  IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIImppppppppppppp

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 10%",
//         markers:true,
//         scrub:5
//     }
// })
// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:200,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"

//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     x:-200,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"

//     }
// })
