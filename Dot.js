import {V, Vector} from './Vector.js'

var output = document.querySelector('#output')
var allDots = []

class Dot{
  // color =  'hsl(306, 94%, 54%)'

  static color = '#f03'

  static radius = 20
  _radius = this.constructor.radius

  processFuns = []

  collide(colliding){

  }

  colorAsFun(){
    return '#f2f'
    // return '#333'
  }

  static pos = V(0,0)
  static vel = V(0,0)

  constructor(x,y){
    // this.pos = V(x,y)
    this.pos = V(this.constructor.pos.x? this.constructor.pos.x:0, this.constructor.pos.y? this.constructor.pos.y:0)
    this.vel = V(this.constructor.vel.x? this.constructor.vel.x:0, this.constructor.vel.y? this.constructor.vel.y:0)

    this.visual()
    this.color = this.constructor.color
    this.radius = this.constructor.radius
    // this.

    allDots.push(this)
    this.process=this.constructor.process
  }

  set color(newcolor){
    this.vis.style.backgroundColor = newcolor
  }

  get radius(){
    return this._radius
  }
  set radius(newradius){
    this._radius = newradius
    this.vis.style.width = newradius*2 + 'px'
    this.vis.style.height = newradius*2 + 'px'
  }

  refresh(){
    this.color=this.color
    this.radius=this.radius
  }

  visual() {
    let vis = document.createElement("div");
    vis.style.transitionDuration = this.constructor.tick + "ms";
    vis.style.position= "absolute";
    vis.className = "Dot";
    vis.innerHTML = 'AFSD'
    // vis.style.left = '0px'
    // vis.style.backgroundColor = this.color
    // vis.style.backgroundColor = this.color
    // vis.style.width = this.radius + 'px'
    // vis.style.height = this.radius + 'px'

    output.append(vis)

    this.vis = vis
    return vis;
  }

  remove(){
    allDots=allDots.filter((el)=>el!=this)
    this.vis.remove()
  }

  // just add its velocity to position. the most basic physics simulation
  processDynamic() {
    this.pos = this.pos["+"](this.vel);
    // this.lookAt(this.vel)
    // this.posfix();
  }

  lookAt(vec){
    this.vis.style.transform = "rotate("+(vec.angle())+"rad)"
  }

  // it is just a custom method for fixing its visual to real position
  posfix() {
    this.vis.style.left = this.pos.x + "px";
    this.vis.style.top = this.pos.y + "px";
  }

  static process(){
    
  // }
  // do whatever you want here without calling super.process()
  // static process() {
  // it is static. we will make instance's 
  // process this function in constructor anyway.
  // this way, we can say Pink.process=function(){}
  // and override the default. and the default is this.
  // process() {
    // console.log(time)

    // this.vel=V(4,4)
    // console.log(this.radius)
    // console.log(this.vis.parentElement.offsetWidth )
    // console.log(time)

    this.keepInBox()
    this.processDynamic();
  }

  keepInBox(){
    let absvel=[Math.abs(this.vel.x),Math.abs(this.vel.y)]
    let borders = [output.offsetWidth, output.offsetHeight]

    if (this.pos.x> borders[0]- this.radius){this.vel.x=-absvel[0]; this.pos.x=(borders[0])-this.radius}
    if (this.pos.y> borders[1] - this.radius){this.vel.y=-absvel[1]; this.pos.y=(borders[1])-this.radius}
    if (this.pos.x<-borders[0] + this.radius){this.vel.x=absvel[0]; this.pos.x=-(borders[0])+this.radius}
    if (this.pos.y<-borders[1] + this.radius){this.vel.y=absvel[1]; this.pos.y=-(borders[1])+this.radius}

  }

  mainProcess(){
    this.processDynamic()
    this.process()
    this.posfix();
  }
}

export { Dot, allDots };