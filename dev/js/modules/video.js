// Functions for show video responsive and adjust it to viewport
// const breakpointVideoSize = matchMedia('(min-aspect-ratio: 8 / 5)')
// const breakpointVideoFixed = matchMedia('(max-width: 960px) and (orientation: portrait)')

const largeBp = matchMedia('(min-width: 1024px) and (min-aspect-ratio: 8 / 5)')
const fixedBp = matchMedia('(min-width:960px)')
const videoElement = document.getElementById('video-element')
const videoElementAlt = document.getElementById('video-element-alt')
const videoClass = document.getElementById('video-class')
const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize)
let scrollFinal = innerHeight - (remValue * 3)
let footer
if(videoClass) footer = videoClass.querySelector('footer');


export const scrollPageUp = () => {
  scrollTo(0, 0)
  document.body.classList.remove('scroll')
  videoElement.style.position = 'static'
  videoSize(largeBp)
  videoClass.appendChild(footer)
}

const scrollPageDown = () => {
  scrollTo(0, scrollFinal)
  scrollVideoFixed();
  videoElementAlt.insertAdjacentElement('afterend', footer);
}

addEventListener('scroll', () => {
  if(largeBp.matches) {
    if (scrollY > 20 && scrollY < 120) {
      scrollPageDown()
    } else if (scrollY < scrollFinal - 20 && scrollY > scrollFinal - 120) {
      scrollPageUp()
    }
  }
})

const videoSize = (mq) => {
  let viewportWidth = document.body.getBoundingClientRect().width

  let unit = mq.matches
    ? (innerHeight - (11 * remValue)) / 9
    : viewportWidth / 16

  if (videoElement) {
    videoElement.style.width = `${unit * 16}px`
    videoElement.style.height = `${unit * 9}px`
  }

  return viewportWidth
}
// videoLayout mq = min-width: 1024px
export const videoLayout = (mq1,mq2) => {
  let viewportWidth = videoSize(mq1)

  if (videoElement) {
    let e = videoElement.parentElement.nextElementSibling,
        h = (viewportWidth / 16) * 9;

    // Video footer position
    if (mq2.matches) {
      e.style.marginTop = '0';
    } else {
      e.style.marginTop = `${h}px`
    }
  }
}

const scrollVideoFixed = () => {
  if(videoElement && videoElementAlt) {
    const h = videoElementAlt.getBoundingClientRect().height
    const w = videoElementAlt.getBoundingClientRect().width
    videoElement.style.position = 'fixed'
    videoElement.style.right = '1rem'
    videoElement.style.top = '5rem'
    videoElement.style.width = `${w}px`
    videoElement.style.height = `${h}px`
  }
}

addEventListener('DOMContentLoaded', () => {
  videoLayout(largeBp,fixedBp)
})

addEventListener('resize', () => {
  videoLayout(largeBp,fixedBp)
})
