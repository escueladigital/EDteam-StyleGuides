/*
* Layout de página de live
* */

const video = document.getElementById('live-video')
const chat = document.getElementById('live-chat')
const largeBp = matchMedia('(min-width: 1024px)')
let chatInput, chatMessages;

export const liveLayout = () => {
  if(largeBp.matches) {
    let h = getVideoSize()
    chatInput = chat.querySelector('.chat__send')
    chatMessages = chat.querySelector('.chat__messages')
    chatMessages.style.height = `calc(${h} - ${chatInput.getBoundingClientRect().height}px - 1rem)`
  }
}

const getVideoSize = () => {
  let w = video.getBoundingClientRect().width
  let h = `${w / 16 * 9}px`
  video.style.height = h
  return h
}

const fixedVideoLive = () => {
  const videoSibling = video.nextElementSibling;
  let h = getVideoSize()
  if(!largeBp.matches) {
    video.classList.add('video-fixed')
    videoSibling.style.marginTop = h
  } else {
    video.classList.remove('video-fixed')
    videoSibling.style.marginTop = '0'
  }
}

if (video && chat) {
    addEventListener('DOMContentLoaded', () => {
      liveLayout();
      fixedVideoLive();
    })
    addEventListener('resize', () => {
      liveLayout()
      fixedVideoLive();
    })
}
