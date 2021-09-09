var mainProcessId;

var editor = document.querySelector("#editor");

var tickDelay  = 100

function visualize(){
	// reset()
	eval(editor.value);
	allDots.forEach(
		(dot)=>{dot.visual(), dot.posfix(), dot.refresh(), dot.process()}
		)

}

function startProcess() {
	let start = new Date().getTime();
	mainProcess(start);

	mainProcessId = setInterval(mainProcess, tickDelay, start);
}

function mainProcess(start) {
	let end = new Date().getTime();
	time = end - start;
	allDots.forEach(function (instance) {
		instance.mainProcess(time);
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
	eval(editor.value);
	start();
	startButton.className = "resetongoing";
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
	startButton.className = "";

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