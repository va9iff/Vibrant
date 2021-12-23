import {jar} from "./editor.js"
let startButton = document.querySelector('#start')

let snippets = document.querySelector('#snippets')
let snippetsPanel = document.querySelector('#snippetsPanel')

let snippetCodes = [
	{
		name: "Spiral",
		code: `
for(let i=1; i<30; i++){
	let a = new Red()
	a.vel = new Vector(1,1)
	a.vel.setLen(i)
	a.vel.setAngle(i/10*Math.PI)
} 
`
	},{
		name: "Standard Colors",
		code: `
new Red().pos.x     = -240
new Green().pos.x   = -160
new Blue().pos.x    = -80
new Cyan().pos.x    = 0
new Magenta().pos.x = 80
new Yellow().pos.x  = 160
`
	},{
		name: "Sinusoid",
		code: `
let a = new Yellow()
a.vel.x=100
a.process = function(){
	this.pos.y = Math.sin(time/300)*200
}
`
	},{
		name: "All For One",
		code:`
let r = new Red()
r.vel = V(60,80)
Blue.process = function(){
	this.vel = this.pos.vectorTo(r.pos).setLen(50)
}
Blue.populate(20)
`
	},{
		name: "Red Dance",
		code: `
Red.process = function(){
	this.vel.add(this.pos.vectorTo(V(0,0)).mul(0.2))
}
Red.populate(20)
`
	},{
		name: "Black Hole",
		code:`
class Matter extends Blue{
	process(){
		this.vel.add(this.pos["*"](-1)).rotate(1).max(50)
	}
}
Matter.populate(25)
`
	},{
		name:"Drip",
		code:`
Cyan.init = function(){
	this.vel.add(Vector.random(100))
	setTimeout(()=>this.remove(),1500)
}
Cyan.process = function(){
	this.vel.y-=5
}
setInterval(()=>new Cyan(), 50)
`
	}


]

function openSnippetsPanel(){
	snippetsPanel.style.display = "flex"
	console.log(snippetsPanel)
	// alert(snippets.style.dipslay)
}	

function closeSnippetsPanel(){
	snippetsPanel.style.display = "none"
}

function makeSnippetButton(code){
	let el = document.createElement('div')
	el.className = "snippet"
	el.innerHTML = code.name
	snippetsPanel.appendChild(el)
	el.onclick = () => {
		jar.updateCode(code.code)
		startButton.style.boxShadow = "0 0 28px 0 hsl(150, 100%,50%)"
	}
}

function setupSnippets(){
	snippets.onclick = openSnippetsPanel
	snippetsPanel.onclick = closeSnippetsPanel

	snippetCodes.forEach(code => makeSnippetButton(code))

}


export {setupSnippets}