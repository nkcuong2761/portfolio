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
  "My hometown is half across the world from the US",
  "My second home is the gym",
  "I'm a UX Designer who can do SDE",
  "I prefer finding the right problem than solving it",
  "One Piece is the best manga ever",
  "I will start my own company one day",
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
