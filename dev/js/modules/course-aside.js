const stickyCardCourse = (referId, cardId) => {
  const refer = document.getElementById(referId),
    card = document.getElementById(cardId),
    largeBp = matchMedia('(min-width: 1024px)')

  const stickyStyles = breakpointBoolean => {
    if (refer && card) {
      let t = refer.getBoundingClientRect().top,
        l = card.parentElement.getBoundingClientRect().left,
        w = card.parentElement.getBoundingClientRect().width

      const styles = breakpointBoolean ? `
        position: fixed;
        top: ${t}px;
        left: ${l}px;
        width: ${w}px;
      ` :
        `
      position: static
      `
      card.setAttribute('style', styles)

      const temary = document.querySelector(".course-temary");

      addEventListener("scroll", () => {
        let temaryBottom = temary.getBoundingClientRect().bottom;
        if (temaryBottom <= card.getBoundingClientRect().bottom) {
          // El card no debe superar al temario
          const stylesAbsolute = `
            position: absolute;
            top: auto;
            bottom: 0;
          `
          card.setAttribute('style', stylesAbsolute)
          card.parentElement.style.position = "relative"
        } 
      })

    }

  }

  stickyStyles(largeBp.matches)
  addEventListener('resize', () => {
    stickyStyles(largeBp.matches)
  })

}

stickyCardCourse('course-title', 'course-card')
