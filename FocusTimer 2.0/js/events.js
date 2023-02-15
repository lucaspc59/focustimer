import {
buttonPause,
buttonPlay,
buttonStop,
buttonMoreMinutes,
buttonLessMinutes,
bPressCafe,
bPressFireplace,
bPressForest,
bPressRain

} from "./elements.js"



export default function ({controls, timer, sound}) {

 buttonPlay.addEventListener('click', function() {
   controls.play()
   timer.countdown()

 })

  buttonPause.addEventListener('click', function() {

   controls.pause()
   timer.hold()

  })


 buttonStop.addEventListener('click', function(){
  controls.stop()
  timer.reset()

 })


buttonLessMinutes.addEventListener('click', function () {
   timer.lessTime()
  
})


buttonMoreMinutes.addEventListener('click', function () {
   timer.moreTime()


})


bPressForest.addEventListener('click', function () {
  controls.cardForest()
  sound.pressButton()
  sound.audioForest()


})


bPressCafe.addEventListener('click', function () {
   controls.cardCafe()
   sound.pressButton()
   sound.audioCafe()
})


bPressFireplace.addEventListener('click', function () {
   controls.cardFireplace()
   sound.pressButton()
   sound.audioFireplace()

})


bPressRain.addEventListener('click',function () {
   controls.cardRain()
   sound.pressButton()
   sound.audioRain()
})

}


