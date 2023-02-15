import {
bPressCafe,
bPressFireplace,
bPressForest,
bPressRain

  
} from "./elements.js"


export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudioCafe = new Audio("./sounds/Cafeteria.wav")
  const bgAudioRain = new Audio("./sounds/Chuva.wav")
  const bgAudioForest = new Audio("./sounds/Floresta.wav")
  const bgAudioFireplace = new Audio ("./sounds/Lareira.wav")


  bgAudioCafe.loop = true
  bgAudioFireplace.loop = true
  bgAudioForest.loop = true
  bgAudioRain.loop =  true

  function pressButton() {
    buttonPressAudio.play()
}

  function timeEnd() {
    kitchenTimer.play()
}

function audioForest() {
    bPressForest.classList.contains('active')
    ? bgAudioForest.play()
    : bgAudioForest.pause()
}

function audioRain() {
    bPressRain.classList.contains('active')
    ? bgAudioRain.play()
    : bgAudioRain.pause()
}

function audioCafe() {
    bPressCafe.classList.contains('active')
    ? bgAudioCafe.play()
    : bgAudioCafe.pause()
}

function audioFireplace() {
    bPressFireplace.classList.contains('active')
    ? bgAudioFireplace.play()
    : bgAudioFireplace.pause()
}
return {
  pressButton,
  timeEnd,
  audioForest,
  audioRain,
  audioCafe,
  audioFireplace,
}
}
