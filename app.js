function faqParagraphHandeling(){
  document.querySelectorAll('.faqParagraph').forEach(e => {
    if(!e.classList.contains('hidden')) {
      e.classList.add('hidden')
      document.querySelectorAll('.faqQuestion > h2').forEach(e => {
        e.style.fontWeight = 40
        e.style.color = 'hsl(240, 6%, 50%)'
      })

      document.querySelectorAll('.arrow').forEach(e => {
        e.style.transform = "rotate(360deg)"
      })
    }
  })
}

function showHiddenContent(paragraph, element, arrow) {
  if (paragraph.classList.contains('hidden')) {
      paragraph.classList.remove('hidden');
      element.style.fontWeight = 700;
      arrow.style.transform = "rotate(180deg)";
      element.style.color = 'hsl(238, 29%, 16%)';
  }
}


document.querySelectorAll('.arrow').forEach(e => {
    e.addEventListener('click', (e) => {
      const elementoDiv = e.target.parentNode
      const paragraph = elementoDiv.nextElementSibling

      faqParagraphHandeling()
      showHiddenContent(paragraph, elementoDiv.firstElementChild, e);
    })
})


document.querySelectorAll('.faqQuestion > h2').forEach(e => {
    e.addEventListener('click', (e) => {
      const h2 = e.target
      const arrow = h2.nextElementSibling
      const paragraph = h2.parentNode.nextElementSibling

      faqParagraphHandeling()
      showHiddenContent(paragraph, h2, arrow);
    })
})