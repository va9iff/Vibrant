// import {time} from './builtIns.js'
import {allDots, Ball} from './Ball.js'
import {Red, Green, Blue,Magenta,Cyan,Yellow,White,Black} from "./colors.js"
import {Vector, V} from "./Vector.js"
import {jar} from './editor.js'

var editor = document.querySelector("#editor");
var editorWrapper = document.querySelector("#editorWrapper");

var time = 0
var delta = 0
var oldend = 0
var startTime = new Date().getTime()

if (localStorage.DATA) {
	var DATA = JSON.parse(window.localStorage.DATA);
	console.log('get saved data', window.localStorage.DATA)
}else{
	var DATA = {
		CODE: `//write the code here
`,
		EDITORWIDTH: 0
	}
	localStorage.DATA = JSON.stringify(DATA)
	console.log('set new data', window.localStorage.DATA)
}
DATA.save = function(){
	window.localStorage.DATA = JSON.stringify(DATA)//this = DATA
}

// DATA IS READY

jar.updateCode(DATA.CODE)
// on the refreshing the page, this may help the editor to expand quicker
// editorWrapper.style.transition = "none"
// editor.style.transition = 0
editorWrapper.style.width = DATA.EDITORWIDTH + 'px'
// setTimeout(editorWrapper.style.transitionDuration = 400 + 'ms')


var borderWrapper = document.querySelector("#borderWrapper")


// loop things
let secondsPassed = 1;
let oldTimeStamp = 1;
let fps = 1;

var run = false

function gameLoop(timeStamp) {

		// Calculate the number of seconds passed since the last frame
		secondsPassed = (timeStamp - oldTimeStamp) / 1000;
		oldTimeStamp = timeStamp;

		time+=delta
		// console.log(time)

		// Calculate fps
		fps = Math.round(1 / secondsPassed);

		mainProcess(secondsPassed)


		// The loop function has reached it's end. Keep requesting new frames

		if(run) window.requestAnimationFrame(gameLoop)
}
var loop = gameLoop



// loop things





function runUserScript(){
eval(jar.toString())
}

var mainProcessId;


var tickDelay  = 1000

function visualize(){
	// reset()
	// eval(editor.value);
	runUserScript()
	allDots.forEach(
		(dot)=>{dot.visual(), dot.posfix(), dot.refresh(), dot.process()}
		)

}

function startProcess() {
	// let start = new Date().getTime();
	// mainProcess(start);

	// mainProcessId = setInterval(mainProcess, tickDelay, start);
	startTime = new Date().getTime()
	loop()
}

function mainProcess() {
	let end = new Date().getTime();
	delta = end - oldend
	oldend = end
	let time = end - startTime;
	

	allDots.forEach(function (instance) {
		instance.mainProcess();
	});
}

function stopProcess() {
	// clearInterval(mainProcessId);
	run = false
	// startTime = new Date().getTime()


}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * after pausing, it looks like it's continueing. but it is not.
 * the time (and||or delta) is continue to count. we need to
 * reset the start time to the time when you press continue
 *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

function start() {
	run = true
	delta = 0
	startTime = new Date().getTime()
	oldend = startTime

	startButton.classList.add("resetongoing");
	
	
	startProcess();
	startButton.onclick = reset;

	// borderWrapper.style.transform = "scale(1.1)"
	startButton.innerHTML = "reset";
}
function restart() {
	// eval(editor.value);
	runUserScript()
	start();
	// startButton.classList.add("resetongoing");
}

function stop() {
	stopProcess();
	startButton.onclick = start;
	startButton.innerHTML = "start";
}

function reset() {

	stop();
	time = 0
	// delta = 0
	allDots.forEach((dot) => dot.remove());




	// page's gonna refresh anyway
	// startButton.innerHTML = "(re)start";

	startButton.classList.remove("resetongoing")
	// borderWrapper.style.transform = "scale(1)"

	// maybe later
	// consoleOutput = "";
	// visibleConsole.innerHTML = "";

	// is a variant
	// location.replace(location.href.split('#')[0]);


	DATA.CODE = jar.toString()
	DATA.EDITORWIDTH = editorWrapper.clientWidth
	DATA.save()
	window.location.reload(false); 

	// better for page resetting
	// 
	
	// startButton.onclick = restart; //don't let double click do something
	startButton.onclick = ()=>null;
	editorWrapper.style.width="10vw"
	// jar.updateCode("")




}

var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

startButton.onclick = restart;
pauseButton.onclick = stop;
// document.querySelector('#start').click()


// restart()



export {startProcess, mainProcess, stopProcess, start, restart, stop, reset,

time, delta, 
editorWrapper}
