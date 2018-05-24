const stickyCardCourse = (referId,cardId) => {
  const refer = document.getElementById(referId),
        card = document.getElementById(cardId),
        largeBp = matchMedia('(min-width: 1024px)')

  const stickyStyles = breakpointBoolean => {
    if(refer && card) {
      let t = refer.getBoundingClientRect().top,
        l = card.parentElement.getBoundingClientRect().left,
        w = card.parentElement.getBoundingClientRect().width

      const styles = breakpointBoolean ? `
        position: fixed;
        top: ${t}px;
        left: ${l}px;
        width: ${w}px;
      `
      : `
        position: static
      `
      card.setAttribute('style', styles)
    }
  }

  stickyStyles(largeBp.matches)
  addEventListener('resize', () => {
    stickyStyles(largeBp.matches)
  })
}

stickyCardCourse('course-title','course-card')
