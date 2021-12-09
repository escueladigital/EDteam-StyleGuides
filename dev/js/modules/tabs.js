/*
* Funcionalidad de tabs
* */

export const edTabs = () => {
  let container = document.querySelector('.edui-tabs'),
      tabsContainer, panelsContainer, tabs, panels

    if(container) {
      tabsContainer = container.querySelector('.tabs')
      panelsContainer = container.querySelector('.panels')

      if(tabsContainer) tabs = [...tabsContainer.querySelectorAll('.tab')]
      if(panelsContainer) panels = [...panelsContainer.querySelectorAll('.panel')]
    }

  if(tabs && tabs.length > 0)  tabs[0].classList.add('active')
  if(panels && panels.length > 0) panels[0].classList.add('active')
  if(tabsContainer) {
    tabsContainer.setAttribute('data-tab','1')

    tabsContainer.addEventListener('click', e => {
      let t = e.target,
        i = tabs.indexOf(t);

      if(t.classList.contains('tab') || t.tagName === "IMG") {
        tabs.map( tab => tab.classList.remove('active'));
        panels.map( panel => panel.classList.remove('active'))
        tabsContainer.removeAttribute('data-tab');
        tabsContainer.setAttribute('data-tab', `${i+1}`)

        if(t.tagName === 'IMG') {
          t.parentElement.classList.add('active')
          i = tabs.indexOf(t.parentElement)
        } else {
          t.classList.add('active')
        }

        panels[i].classList.add('active')
      }
    })
  }
};
