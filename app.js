editor.value = `
let d = new Dot()
d.vel = V(4,4)
new Dot()
new Dot(14,18)

new Lime(-50,0)
new Mint(-25,-25).vel=V(-5,-8)

class MyClass extends Lime{
	static color = 'red'
	static radius = 20
	vel = V(0,-4) //make vel and all others static too to convenience
}

new MyClass()
`

restart()