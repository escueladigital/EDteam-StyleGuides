// Functions for show video responsive and adjust it to viewport

const breakpointVideoSize = matchMedia('(min-aspect-ratio: 8 / 5)')
const breakpointVideoFixed = matchMedia('(max-width: 960px) and (orientation: portrait)')
const videoElement = document.getElementById('video-element')
const videoClass = document.getElementById('video-class')


// define size for video by media query
export const videoSize = mq => {
  let viewportWidth = document.body.getBoundingClientRect().width
  let unit = mq.matches
    ? (innerHeight - (11 * 16)) / 9
    : viewportWidth / 16

  if (videoElement) {
    videoElement.style.width = `${unit * 16}px`
    videoElement.style.height = `${unit * 9}px`
  }
}

const fixedVideo = mq => {
  let viewportWidth = document.body.getBoundingClientRect().width
  if(videoElement) {
    let e = videoElement.parentElement.nextElementSibling,
        h = (viewportWidth / 16) * 9;
    if (mq.matches) {
      e.style.marginTop = `${h}px`
    } else {
      e.style.marginTop = '0';
    }
  }
}

addEventListener('DOMContentLoaded', () => {
  videoSize(breakpointVideoSize)
  fixedVideo(breakpointVideoFixed)
})

addEventListener('resize', () => {
  videoSize(breakpointVideoSize)
  fixedVideo(breakpointVideoFixed)
})
