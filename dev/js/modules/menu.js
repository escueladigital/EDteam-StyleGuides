export const menu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      if(navId === 'main-menu') document.body.classList.toggle('main-menu-visible');
    })
  }
};

menu('main-menu-toggle', 'main-menu');
menu('vertical-menu-toggle', 'vertical-menu');
