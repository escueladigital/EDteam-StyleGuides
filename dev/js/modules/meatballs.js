export const meatballsMenu = () => {

  let menu

  document.body.addEventListener('click', e => {
    let target = e.target
    if (target.classList.contains('meatballs-menu__button')) {
      e.stopPropagation()
      removeClass()
      menu = target.nextElementSibling
      menu.classList.add('active')
    }
  })

  const removeClass = () => {
    if (menu != undefined && menu.classList.contains('active'))
      menu.classList.remove('active')
  }

  window.addEventListener('click', () => {
    removeClass()
  })

  window.addEventListener('keyup', e => {
    if (e.key === 'Escape') removeClass()
  })

}

meatballsMenu()