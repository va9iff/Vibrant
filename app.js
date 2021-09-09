editor.value = `
let d = new Dot()
d.vel = V(4,4)

new Lime()

d.color='blue'

class myc{
	static color = 'red'
	static radius = 60
	static vel = V(7,5)
}

new myc()

`

// new Dot(45,60)

restart()

// visualize()