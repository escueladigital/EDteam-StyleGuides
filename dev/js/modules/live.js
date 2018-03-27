const video = document.getElementById('live-video')
const chat = document.getElementById('live-chat')
const largeBp = matchMedia('(min-width: 1024px)')
let height, chatInput, chatMessages;

export const liveLayout = () => {
  height = video.getBoundingClientRect().height
  chatInput = chat.querySelector('.chat__send')
  chatMessages = chat.querySelector('.chat__messages')
  chatMessages.style.height = `calc(${height - chatInput.getBoundingClientRect().height}px - 1rem)`
}

const fixedVideoLive = () => {
  video.classList.add('video-fixed')
  video.nextElementSibling.style.marginTop = `${video.getBoundingClientRect().height}px`
}

if (video && chat) {
  if (largeBp.matches) {
    addEventListener('DOMContentLoaded', liveLayout)
    addEventListener('resize', liveLayout)
  } else {
    addEventListener('DOMContentLoaded', fixedVideoLive)
    addEventListener('resize', fixedVideoLive)
  }
}
