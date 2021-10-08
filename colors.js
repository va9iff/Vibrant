import {Ball} from './Ball.js'


class Red extends Ball {
	static color = "hsl(0, 100%, 40%)"
}

class Green extends Ball {
	static color = "hsl(120, 100%, 40%)"
}

class Blue extends Ball {
	static color = "hsl(240, 40%, 50%)"
}


class Magenta extends Ball {
	static color = "hsl(300, 100%, 40%)"
}

class Cyan extends Ball {
	static color = "hsl(180, 100%, 40%)"
}


class Yellow extends Ball {
	static color = "hsl(60, 100%, 40%)"
}


class White extends Ball {
	static color = "White"
}

class Black extends Ball {
	static color = "Black"
}


export {Red, Green, Blue, Magenta, Cyan, Yellow, White, Black}