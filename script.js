// ---------- MOBILE NAV MENU ----------
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

// DESKTOP NAV ANIMATION
const showAnim = gsap.from('#header', { 
  yPercent: -200,
  paused: true,
  duration: 0.4
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});

// PRELOADER
document.addEventListener("DOMContentLoaded", function() {
    // loader = document.getElementById('loader');
    // loadNow(1);
  $('#loader').show().delay(1000).fadeOut(500);
});
