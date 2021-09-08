var output = document.querySelector('#output')
var allDots = []

class Dot{
  // color =  'hsl(306, 94%, 54%)'
  color =  '#555'
  radius = 40

  processFuns = []

  collide(colliding){

  }

  constructor(x,y){
    // this.init(x, y)
    this.args=[...arguments]
    allDots.push(this)
  }

  init(x, y){    
    this.pos = V(x,y)
    this.vel = V(2,3)


    this.visual()
    this.color= this.color
    this.radius = this.radius

    allDots.push(this)
    this.process=this.constructor.process
  }

  // defines how to look. it takes the node that which to add itself as argument
  visual() {
    let vis = document.createElement("div");
    vis.style.transitionDuration = this.constructor.tick + "ms";
    vis.style.position= "absolute";
    vis.className = "Dot";
    vis.innerHTML = 'AFSD'
    // vis.style.left = '0px'
    vis.style.backgroundColor = this.color
    vis.style.width = this.radius + 'px'
    vis.style.height = this.radius + 'px'

    output.append(vis)

    this.vis = vis
    return vis;
  }

  remove(){
    allDots=allDots.filter((el)=>el!=this)
    this.vis.remove()
  }

  set color(ncolor){
    this.vis.style.backgroundColor = ncolor
  }

  set radius(nradius){
    this.vis.style.height = nradius + 'px'
    this.vis.style.width = nradius + 'px'
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
    console.log(time)

    // this.vel=V(4,4)
    if (this.pos.x>output.offsetWidth){this.vel.x=-4}
    if (this.pos.y>output.offsetHeight){this.vel.y=-4}
    if (this.pos.x<-output.offsetWidth){this.vel.x=4}
    if (this.pos.y<-output.offsetHeight){this.vel.y=4}
    // console.log(this.vis.parentElement.offsetWidth )
    // console.log(time)
    this.processDynamic();
  }

  mainProcess(){
    this.processDynamic()
    this.process()
    this.posfix();
  }
}

// export { Dynamic };