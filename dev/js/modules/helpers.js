export const loadWithoutScroll = () => {
  addEventListener('load', () => {
    if('scrollRestoration' in history) history.scrollRestoration = 'manual'
  })
}

loadWithoutScroll()
