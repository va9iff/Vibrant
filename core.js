// import {time} from './builtIns.js'
import {allDots,Dot} from './Dot.js'
import {Vector, V} from "./Vector.js"
import {jar} from './editor.js'

var time = 0
var delta = 0
var oldend = 0
var startTime = new Date().getTime()

// loop things
let secondsPassed = 1;
let oldTimeStamp = 1;
let fps = 1;


// so basic. no delta
// function loop(){
// 	mainProcess(100)

// 	window.requestAnimationFrame(loop)
// }

function gameLoop(timeStamp) {

    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    // Draw number to the screen
    // context.fillStyle = 'white';
    // context.fillRect(0, 0, 200, 100);
    // context.font = '25px Arial';
    // context.fillStyle = 'black';
    // context.fillText("FPS: " + fps, 10, 30);
    // console.log(fps)

    // Perform the drawing operation
    // draw();

    mainProcess(secondsPassed)


    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}
var loop = gameLoop



// loop things





function runUserScript(){
eval(jar.toString())
}

var mainProcessId;

var editor = document.querySelector("#editor");

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
	clearInterval(mainProcessId);
}

function start() {
	startProcess();
	startButton.onclick = reset;
	startButton.innerHTML = "reset";
}
function restart() {
	// eval(editor.value);
	runUserScript()
	start();
	startButton.classList.add("resetongoing");
}

function stop() {
	stopProcess();
	startButton.onclick = start;
	startButton.innerHTML = "start";
}

function reset() {
	stop();
	allDots.forEach((dot) => dot.remove());
	startButton.onclick = restart;
	startButton.innerHTML = "(re)start";
	startButton.classList.remove("resetongoing")

	// maybe later
	// consoleOutput = "";
	// visibleConsole.innerHTML = "";
}

var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

startButton.onclick = restart;
pauseButton.onclick = stop;
// document.querySelector('#start').click()


// restart()



export {startProcess, mainProcess, stopProcess, start, restart, stop, reset,

time, delta}
