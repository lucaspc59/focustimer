import Controls from "./controls.js";
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
buttonPlay,
buttonPause,
buttonStop,
minutesDisplay,
secondsDisplay,
bPressCafe,
bPressFireplace,
bPressForest,
bPressRain
} from "./elements.js";


const controls = Controls ({

buttonPlay,
buttonPause,
buttonStop,
bPressForest,
bPressCafe,
bPressFireplace,
bPressRain


})

const timer = Timer({

minutesDisplay,
secondsDisplay,
resetControls: controls.reset
})


const sound = Sound ()

Events ({controls, timer, sound})