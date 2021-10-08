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