var margin = 60
var maxX = 20	
var maxY = 15
let boxes =[]
let boxes2 = []
let json ={}


function setup() {
	var canvas = createCanvas(1080,720,WEBGL);
	canvas.parent('p5sketch')
	//createCanvas(1080, 720,WEBGL);
	colorMode(HSB,720)
	rectMode(CENTER);
	//	noLoop();
	//ball = new Boxes()
}

function draw() { // wird dauernd im loop aufgerufen

	background(0);
	fill(50,50,150)
	translate(-540,-360)
	maxX = mouseX/54
	maxY = mouseY/55

	for(var x=0; x <maxX ; x+= 1){

		boxes.push(new Boxes(x))
		for(var y=0; y<maxY;y++){

 
		boxes2.push(new Boxes(y))



		push()
		translate(50*x +margin ,50*y+margin)
		boxes[x].move()
		boxes[x].display()
		boxes2[y].move() 
		boxes2[y].display()

		pop()

		
		}
	}
	


}

class Boxes{
	constructor(){

		this.hue = random(0,720)
		this.sat = random(450,720)
		this.bri = 720
		this.id = (random(0.01,0.022))

		

	}
	move(){
		
		rotateX(noise(frameCount*this.id))
		rotateY(noise(frameCount*this.id))
	
	}
	display(){
		noStroke()
		fill(this.hue,this.sat,720)
		sphere(20)

	}

}
