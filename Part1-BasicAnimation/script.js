// /Time Line

var tl = gsap.timeline();

tl.from("nav",{
    y:-40,
    opacity:0,
    duration:0.5

})
tl.from(".logo",{
    x:-50,
    opacity:0,
    color:"red",

})
tl.from(".part2 h4",{
    opacity:0,
    y:20,
    color:"green",
    stagger:0.1
})


tl.from(".content",{
    opacity:0,
    y:100,
    duration:0.5,
    scale:0.3
})

// gsap.to(".box",{
//     x:400,
//     rotate:180,
//     backgroundColor:"green",
//     duration:0.88,
//     delay:0.5,
//     scale:0.8,


// })

// gsap.to(".box2",{
//     x:400,
//     rotate:-140,
//     delay:3,
//     scale:0.6,
//     backgroundColor:"red",
//     duration:2,

// })


// gsap.to(".box3",{a
//     x:400,
//     rotate:230,
//     scale:1.5,
    
//     delay:5,
//     backgroundColor:"yellow",
//     duration:2,

// })




















// // gsap.to(".box", {
// //   x: 200,
// //   duration: 2,
// //   delay: 2,
// //   width: 10,
// //   height: 10,
// //   rotate: 120,
// //   backgroundColor: "green",
// // });
// // gsap.from(".box2", {
// //   y: 200,
// //   scale: 0.2,
// //   rotate: 120,
// //   duration: 2,
// //   delay: 2,
// //   borderRadius: "100px",
// // });

// // gsap.from(".t-1", {
// //   opacity: 0,
// //   duration: 2,
// //   delay: 1,
// // });

// // gsap.to(".t-1", {
// //   opacity: 1,
// //   duration: 2,
// //   delay: 1,
// // });
// // gsap.from(".t-2", {
// //   opacity: 0,
// //   y: 20,
// //   duration: 2,
// //   delay: 1,
// // });

// // gsap.to(".t-2", {
// //   opacity: 1,
// //   x: 0,
// //   duration: 2,
// //   delay: 2,

// // });

// // gsap.to(".text",{
// //     opacity:0,
// //     y:20,
// //     duration:1,
// //     stagger:1
// //     ,
// //     repeat:-1

// // })
// // gsap.to(".box", {
// //   scale: 0.2,
// //   backgroundColor: "green",
// //   rotate:360,
// //   repeat:-1,
// //   duration: 2,
// //   borderRadius: "50%",
// //   yoyo:true,

// // });
