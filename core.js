var mainProcessId
var time = 0

var editor = document.querySelector('#editor')

function startProcess() {
	let start = new Date().getTime();
	mainProcess(start);

	mainProcessId = setInterval(mainProcess, 200, start);
}

function mainProcess(start) {
	let end = new Date().getTime();
	time = end - start;
	allDots.forEach(function (instance) {
		instance.process(time);
	});
}

function stopProcess() {
	clearInterval(mainProcessId);
}

function start(){
	startProcess()
	startButton.onclick = reset
	startButton.innerHTML = 'reset'

}
function restart(){
	eval(editor.value)
	start()
	startButton.className = 'resetongoing'

}

function stop(){
	stopProcess()
	startButton.onclick = start
	startButton.innerHTML = 'start'
}

function reset(){
	stop()
	allDots.forEach((dot)=>dot.remove())
	startButton.onclick = restart
	startButton.innerHTML = '(re)start'
	startButton.className = ''
}

var startButton = document.querySelector('#start')
var pauseButton = document.querySelector('#pause')

startButton.onclick = restart
pauseButton.onclick = stop
// document.querySelector('#start').click()