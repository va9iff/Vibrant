// outputside=document.querySelector('#outputSide')
// visibleConsole=document.querySelector('#visibleConsole')

var time = 0
var consoleOutput=''

function print(something){
	consoleOutput+=something
	visibleConsole.innerHTML=consoleOutput
}

export {time
	// , consoleOutput, print
}