// ANIMATION SET-UP
gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#space', // start animation when "#space" enters the viewport
    start: 'top top', // triggerElement, viewPort
    end: 'bottom bottom', // triggerElement, viewPort
    scrub: 0.5,
    pin: false
  },
})
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#space',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.8,
    pin: false
  },
})
let tlStartup = gsap.timeline({
  duration: 1
})

// PORTRAIT
const canvas = document.getElementById("portrait");
const context = canvas.getContext("2d");
canvas.width = 1080;
canvas.height = 1280;
const frameCount = 68;
const currentFrame = index => (
  `/assets/png/portrait-${index.toString()}.png`
);
const images = []
const portrait = {
  frame: 0
};
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// RIPPED PAPER DIVIDER
// const canvasDivider = document.getElementById("ripped");
// const contextDivider = canvasDivider.getContext("2d");
// canvasDivider.width = window.innerWidth;
// canvasDivider.height = 400;
// const frameCountDivider = 4;
// const currentFrameDivider = index => (
//   `/assets/ripped/${index.toString()}.png`
// );
// const imagesDivider = []
// const divider = {
//   frame: 0
// };
// for (let i = 0; i < frameCountDivider; i++) {
//   const img = new Image();
//   img.src = currentFrameDivider(i);
//   imagesDivider.push(img);
// }

// CALL ANIMATION
tlStartup
  .from('.bl2', {rotation:"-10deg", x:"-100%"})
  .from('.br1', {rotation:"10deg", x:"100%"}, '<10%')
  .from('.bl1', {rotation:"-10deg", x:"-100%"}, '<20%')
  .from('.br2', {rotation:"10deg", x:"100%"}, '<30%')
  .from('.tl', {rotation:"-60deg", x:"-100%"}, '<40%')
  .from('.tr', {rotation:"60deg", x:"100%"}, '<')

tl.from('#portrait', {scale:1.5, skewX: 2}, '<')
  .from('#portrait', {y:"10%"}, "<")
  .to('#portrait', {x:"90%", ease: "slow.inOut"}, "<40%")
  .to('#portrait', {scale:0.8}, "<70%")

tl2.from('.scr-bg', {scale:1.3, skewX: 4, skewY: 2})
  .to('.bl2', {rotation:"-60deg", x:"-100%"}, '<5%')
  .to('.br1', {rotation:"60deg", x:"100%"}, '<1%')
  .to('.bl1', {rotation:"-60deg", x:"-100%"}, '<1%')
  .to('.br2', {rotation:"60deg", x:"100%"}, '<1%')
  .to('.tl', {rotation:"-90deg", x:"-100%"}, '<1%')
  .to('.tr', {rotation:"90deg", x:"100%"}, '<1%')

gsap.to(portrait, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.8
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});
// gsap.to(divider, {
//   frame: frameCountDivider - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     scrub: 1,
//     trigger: "#ripped",
//     start: "top bottom",
//   },
//   onUpdate: renderDivider, // use animation onUpdate instead of scrollTrigger's onUpdate
//   repeat: 2
// });

images[0].onload = render;
// imagesDivider[0].onload = renderDivider;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[portrait.frame], 0, 0); 
}
// function renderDivider() {
//   contextDivider.clearRect(0, 0, canvasDivider.width, canvasDivider.height);
//   contextDivider.drawImage(imagesDivider[divider.frame], 0, 0); 
// }

// NAV MENU
dropdown_active = false

function openMenu() {
  var menu_icon = document.getElementById("menu-icon")
  var menu = document.getElementById("dropdown-menu")
  if (!dropdown_active) {
    menu_icon.src = "/assets/icons/close.svg"
    menu.style.display = "flex"
    dropdown_active = true
  } else {
    menu_icon.src = "/assets/icons/menu.svg"
    menu.style.display = "none"
    dropdown_active = false
  }
}

$(".link-icon").each(function() {
  $(this).hover(function() {
    $(this).children().eq(1).fadeOut(200)
  },
  function() {
    $(this).children().eq(1).fadeIn(200)
  })
})

$(".card-work").each(function() {
  $(this).hover(function() {
    $(this).children('img').css("transform", "scale(1.2)")
  },
  function() {
    $(this).children('img').css("transform", "scale(1)")
  })
})

var heading = $('#changingText')
// console.log(heading.text())
const textArray = [
  "I started designing at the age of 15",
  "I'm a Product Designer who can do SDE",
  "I always seek to learn new skill sets",
  "My second home is the gym",
  "I prefer finding the right problem before solving it",
  "One Piece is the best manga ever",
  "One day, I will start my own company",
  "I love playing boardgames and TCGs",
]
// console.log(textArray[7])
var index = 0
var len = textArray.length
setInterval(function() {
  // console.log(index)
  heading.fadeOut(220, function() {
    heading.text(textArray[index]).fadeIn(220)
  })
  index += 1
  index %= len
}, 2500)

// PRELOADER
// var loader;
// function loadNow(opacity) {
//     if (opacity <= 0) {
//         displayContent();
//     } else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function() {
//             loadNow(opacity - 0.1);
//         }, 500);
//     }
// }
// function displayContent() {
//     loader.style.display = 'none';
// }
document.addEventListener("DOMContentLoaded", function() {
    // loader = document.getElementById('loader');
    // loadNow(1);
  $('#loader').show().delay(1000).fadeOut(500);
});
// $(window).on('load', function () {
//   $('#loader').fadeOut(500);
// })
