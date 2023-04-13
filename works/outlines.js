function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const sideBar = document.querySelector('.side-bar')
const sections = new Set()
$(sideBar).children().each((i, element) => {
  sections.add(document.querySelector($(element).attr('href')))
  $(element).click(function(e) {
    e.preventDefault()
    const sectionId = $(this).attr('href')
    const section = document.querySelector(sectionId)
    $('html, body').animate({
      scrollTop: section.offsetTop
    }, 0)
  })
});

let currentView = null

document.addEventListener('scroll', function() {
   for (const item of sections) {
    if (isInViewport(item)) {
      if (currentView != item) {
        $(currentView).removeClass('in-view')
      }
      currentView = document.querySelector('#outline-'+item.id)
      $(currentView).addClass('in-view')
    }
   }
})