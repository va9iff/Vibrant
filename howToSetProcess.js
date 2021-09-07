log = console.log
  
class A {
  real(){
		log('default real')    
  }
  static pretty(na){
    this.real=na
    log('sets real with pretty setter')
  }
  constructor(){
    this.real = this.constructor.pretty
  }
}

A.pretty=function(){
  console.log('the set real from pretty')
}


a = new A()

a.real()


//////////////////////////////////////////////

/*
real() is the real process function that will 
be called every tick.

pretty() is class's process function. it's not useful,
we'll never call it. but this way, we can write
Pink.process = function(){...}
and make the instance's process this.
*/