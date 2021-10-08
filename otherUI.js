import {editorWrapper} from "./core.js"
let swapper = document.querySelector('#swapper')

function setupSwapper(){
	swapper.opened = true
	swapper.onclick = () => { 
		if(swapper.opened) {
			editorWrapper.style.width="10vw"
			swapper.opened = false
		}
		else {
			editorWrapper.style.width="50vw"
			swapper.opened = true
		}
	}
}

export {setupSwapper}