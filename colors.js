import {Ball} from './Ball.js'


class Red extends Ball {
	static color = "hsla(0, 100%, 50%, 0.8)"
}

class Green extends Ball {
	static color = "hsla(120, 100%, 50%, 0.8)"
}

class Blue extends Ball {
	static color = "hsla(240, 40%, 50%, 0.8)"
}


class Magenta extends Ball {
	static color = "hsla(300, 100%, 50%, 0.8)"
}

class Cyan extends Ball {
	static color = "hsla(180, 100%, 50%, 0.8)"
}


class Yellow extends Ball {
	static color = "hsla(60, 100%, 50%, 0.8)"
}


class White extends Ball {
	static color = "White"
}

class Black extends Ball {
	static color = "Black"
}


export {Red, Green, Blue, Magenta, Cyan, Yellow, White, Black}