// import {Ball} from './Ball.js'
// import {V, Vector} from './Vector.js'

import {startProcess, mainProcess, stopProcess, start, restart, stop, reset} from './core.js'

import {setupSnippets} from "./snippets.js"
import {setupSwapper} from "./otherUI.js"
setupSnippets()

setupSwapper()

// resize tests

// var main = document.querySelector("#editorSide"), 
var main = document.querySelector("#editorWrapper"), 
	doc = document,
	x, dx, Dx

var startResize = function(evt) {
	Dx = 0

  x = evt.pageX;
};

var resize = function(evt) {
  dx = evt.pageX - x;

  Dx += dx

  x = evt.pageX;

  console.log(x,dx, Dx, main.clientWidth)

  main.style.width = x + "px"


      window.getSelection().removeAllRanges();


  // main.style.width = main.clientWidth + dx + "px"

  // main.style.width = parseInt(main.style.width.replace('px','',1)) + dx + "px";

};

document.querySelector('#resizeBar').addEventListener("mousedown", function(evt) {
  startResize(evt);

  doc.body.style.cursor = "e-resize"

  doc.body.addEventListener("mousemove", resize);
  doc.body.addEventListener("mouseup", function() {
    doc.body.removeEventListener("mousemove", resize);
    doc.body.style.cursor = ""

  });
});


// resize tests

// editor.value = `
// let d = new Ball()
// d.vel = V(4,4)

// new Lime()

// d.color='blue'

// class myc{
// 	static color = 'red'
// 	static radius = 60
// 	static vel = V(7,5)
// }

// new myc()

// `

// new Ball(45,60).vel=V(6,8)

// startProcess()

// restart()

// visualize()

// restart()
// reset()


var rs = [document.querySelector('#editorSide'), document.querySelector('#editorWrapper')]

function res(x){
	rs.forEach(r => r.style.width=x+"px" )
}

// res(90)