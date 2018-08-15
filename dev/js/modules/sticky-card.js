export const stickyCard = (topReferId, bottomReferId, cardId, breakpoint = '(min-width: 1024px)') => {
  const topRefer = document.getElementById(topReferId),
        bottomRefer = document.getElementById(bottomReferId),
        card = document.getElementById(cardId),
        largeBp = matchMedia(breakpoint)

  const stickyStyles = breakpointBoolean => {
    if (topRefer && card) {
      let t = topRefer.getBoundingClientRect().top + scrollY,
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

      addEventListener("scroll", () => {
        let b = bottomRefer.getBoundingClientRect().bottom
        if (b <= card.getBoundingClientRect().bottom && breakpointBoolean) {
          const stylesAbsolute = `
            position: absolute;
            top: auto;
            bottom: 0;
          `
          card.setAttribute('style', stylesAbsolute)
          card.parentElement.style.position = "relative"

          if (card.getBoundingClientRect().top >= t) {
            card.setAttribute('style', styles)
          }
        }
      })
    }
  }

  stickyStyles(largeBp.matches)
  addEventListener('resize', () => {
    stickyStyles(largeBp.matches)
  })
}


