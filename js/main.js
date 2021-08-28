const anchors = document.getElementsByClassName("sc-btn")

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('id');

    document.getElementsByClassName(blockID)[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}