
export default function Controls({

buttonPlay,
buttonPause,
bPressForest,
bPressFireplace,
bPressRain,
bPressCafe

}) {

function play() {

buttonPlay.classList.add('hide')
buttonPause.classList.remove('hide')

}

function pause() {

buttonPause.classList.add('hide')
buttonPlay.classList.remove('hide')

}

function stop () {
buttonPause.classList.add('hide')
buttonPlay.classList.remove('hide')

}


function cardForest () {
  bPressForest.classList.toggle('active')

}

function cardRain() {
  bPressRain.classList.toggle('active')
}

function cardCafe() {
  bPressCafe.classList.toggle('active')
}

function cardFireplace() {
  bPressFireplace.classList.toggle('active')
}


return{
cardRain,
cardFireplace,
cardCafe,
cardForest,
play,
pause,
stop
}

}



