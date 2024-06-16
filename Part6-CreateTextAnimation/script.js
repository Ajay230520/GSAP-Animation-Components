function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var halfValue = splittedText.length/2;

  var clutter = "";
  splittedText.forEach(function (val,idx) {
   if(idx<halfValue){
    clutter+= `<span class="a">${val}</span>`
   }
   else{
    clutter+=`<span class="b">${val}</span>`
   }

  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a",{

    y:100,
    opacity:0,
    delay:0.5,
    duration:0.6,
    stagger:0.2
})
gsap.from("h1 .b",{

    y:80,
    opacity:0,
    delay:0.5,
    duration:0.6,
    stagger:-0.2
})