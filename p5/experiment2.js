var margin = 50
var maxX = 20	
var maxY = 15


function setup() {
	createCanvas(1080, 720,WEBGL);
	colorMode(HSB,360)
	rectMode(CENTER);
	//	noLoop();
	ball = new Boxes()
}

function draw() { // wird dauernd im loop aufgerufen
	background(0);
	fill(50,50,150)
	translate(-540,-360)
	maxX = mouseX/54
	maxY = mouseY/55
	for(var x=0; x <maxX ; x+= 1){
		for(var y=0; y<maxY;y++){


		push()
		translate(50*x +margin  ,50*y+margin)
		ball.move()
		ball.display()
		pop()
		
		}
	}
	


}

class Boxes{
	/*constructor(){
		this.hue = random(0,360)
		this.sat = random(280,360)
		this.bri = 360

	}*/
	move(){
		
		rotateX(frameCount*0.01)
		rotateY(frameCount*0.01)
	
	}
	display(){
		fill(random(0,360),random(280,360),360)
		box(30)
	}

}
