import {jar} from "./editor.js"

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
		name: "primary colors",
		code: `
new Red().pos.x     = -240
new Green().pos.x   = -160
new Blue().pos.x    = -80
new Cyan().pos.x    = 0
new Magenta().pos.x = 80
new Yellow().pos.x  = 160
`
	},{
		name: "up n down smoothly",
		code: `
let a = new Yellow()
a.process = function(){
	this.pos.y = Math.sin(time/300)*200
}
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
	el.onclick = () => jar.updateCode(code.code)
}

function setupSnippets(){
	snippets.onclick = openSnippetsPanel
	snippetsPanel.onclick = closeSnippetsPanel

	snippetCodes.forEach(code => makeSnippetButton(code))

}


export {setupSnippets}