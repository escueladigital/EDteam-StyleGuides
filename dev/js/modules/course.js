export const cloneCardCourse = (cardId,referId,breakpoint = '(max-width:1024px)') => {
  const card = document.getElementById(cardId),
        refer = document.getElementById(referId),
        bp = matchMedia(breakpoint)
  let newCard

  const cloneCard = () => {
    if(card && refer && bp.matches) {
      newCard = card.cloneNode(true)
      newCard.id = 'course-card-clone'
      newCard.style.position = 'static'
      newCard.style.width = '100%'
      refer.after(newCard)
    }
  }

  cloneCard()
  addEventListener('resize', () => {
    if(refer.nextElementSibling !== newCard) cloneCard()
    if(refer.nextElementSibling === newCard && !bp.matches) newCard.remove()
  })
}

cloneCardCourse('course-card', 'course-temary')
