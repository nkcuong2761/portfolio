// PORTRAIT-2
const frameCountBW = 3;
const currentFrameBW = index => (
  `/assets/png-bw/portrait-${index.toString()}.png`
);
const imagesBW = []
for (let i = 0; i < frameCountBW; i++) {
  const img = new Image();
  img.src = currentFrameBW(i);
  imagesBW.push(img);
}
const canvasBW = document.getElementById("portraitBW");
const contextBW = canvasBW.getContext("2d");
canvasBW.width = 1080;
canvasBW.height = 1280;

// ANIMATION SET-UP
gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#space', // start animation when "#space" enters the viewport
    start: 'top top', // subject, triggerElement
    end: 'bottom bottom', // subject, triggerElement
    scrub: 0.5,
    pin: false
  },
})
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#space',
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',// enter leave enterBack leaveBack
    scrub: 0.8,
    pin: false
  }
})
let tlStartup = gsap.timeline({
  duration: 1
})
let tlElements = gsap.timeline({
  scrollTrigger: {
    trigger: '#space',
    start: 'top+=40% top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',// enter leave enterBack leaveBack
    // markers: true
  }
})

// PORTRAIT
const canvas = document.getElementById("portrait");
const context = canvas.getContext("2d");
canvas.width = 1080;
canvas.height = 1280;
const frameCount = 60;
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
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[portrait.frame], 0, 0); 
}

// CALL ANIMATION
tlStartup
  .from('.bl2', {rotation:"-10deg", x:"-100%"})
  .from('.br1', {rotation:"10deg", x:"100%"}, '<10%')
  .from('.bl1', {rotation:"-10deg", x:"-100%"}, '<20%')
  .from('.br2', {rotation:"10deg", x:"100%"}, '<30%')
  .from('.tl', {rotation:"-60deg", x:"-100%"}, '<40%')
  .from('.tr', {rotation:"60deg", x:"100%"}, '<')
  .to(".lottie-scroll", {autoAlpha: 0}, '>5')

tl.from('#portrait', {scale:1.5, skewX: 2}, '<')
  .from('#portrait', {y:"-40%"}, "<")
  .to('#portrait', {x:"-40%", ease: "back.inOut"}, "<40%")
  .to('#portrait', {scale:0.8}, "<70%")

tl2
  .from('.scr-bg', {scale:1.3, skewX: 4, skewY: 2})
  .to('.bl2', {rotation:"-60deg", x:"-100%", ease: 'back.in(1)', duration:0.2}, '<5%')
  .to('.br1', {rotation:"60deg", x:"100%", ease: 'back.in(1)', duration:0.2}, '<1%')
  .to('.bl1', {rotation:"-60deg", x:"-100%", ease: 'back.in(1)', duration:0.2}, '<1%')
  .to('.br2', {rotation:"60deg", x:"100%", ease: 'back.in(1)', duration:0.2}, '<1%')
  .to('.tl', {rotation:"-90deg", x:"-100%", ease: 'back.in(1)', duration:0.2}, '<1%')
  .to('.tr', {rotation:"90deg", x:"100%", ease: 'back.in(1)', duration:0.2}, '<1%')

tlElements
  .to('.scr-title.t1', {autoAlpha: 1, duration: 0.1})
  .to('.scr-title.t2', {autoAlpha: 1, duration: 0.1}, '>1')
  .to('.scr-title.t3', {autoAlpha: 1, duration: 0.1}, '>1')
  .to('#portraitBW', {scale:0.83}, "<")
  .from('#portraitBW', {x:'100%', ease: 'power4.out', duration: 4}, '<')
  .to('.scr-title.scr-divider', {autoAlpha: 1, duration: 0.1}, '<30%')
  .to('.scr-title.t4', {autoAlpha: 1, duration: 0.1}, '>0.4')
  .from('.scr-top', {y:'-100%', ease: 'back.out'}, '<')
  .from('.scr-bot', {y:'100%', ease:'back.out'}, '<50%')
  .from('.scr-stamp', {y:'200%', ease: 'back.out(0.2)'}, '>')
  .from('.scr-airplane', {y:'100%', ease: 'back.out(0.1)'}, '>')

gsap.to(portrait, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.8
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});
let autoPlay = gsap.delayedCall(1, renderBW);
let indexBW = 0;
function renderBW() {
  autoPlay.restart(true); // start the autoplay delay over again
  contextBW.clearRect(0, 0, canvasBW.width, canvasBW.height);
  contextBW.drawImage(imagesBW[indexBW%frameCountBW], 0, 0); 
  indexBW += 1;
}

images[0].onload = render;

// FORCE TO SCROLL TO TOP WHEN RELOAD
history.scrollRestoration = "manual";
$(document).on('beforeunload', function(){
  $(this).scrollTop(0);
  console.log('scroll top');
});

// --------- CHANGING HEADING ---------
// var heading = $('#changingText')
// console.log(heading.text())
// const textArray = [
//   "I started designing at the age of 15",
//   "I'm a Product Designer who can do SDE",
//   "I always seek to learn new skill sets",
//   "My second home is the gym",
//   "I prefer finding the right problem before solving it",
//   "One Piece is the best manga ever",
//   "One day, I will start my own company",
//   "I love playing boardgames and TCGs",
// ]
// var index = 0
// var len = textArray.length
// setInterval(function() {
//   heading.fadeOut(220, function() {
//     heading.text(textArray[index]).fadeIn(220)
//   })
//   index += 1
//   index %= len
// }, 2500)