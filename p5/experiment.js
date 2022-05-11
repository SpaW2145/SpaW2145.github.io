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
	maxX = mouseX/20
	maxY = mouseY/20
	

		push()
		translate(width/2  ,height/2)
		ball.move()
		ball.display()
		/*rotateX(frameCount*0.01)	
		rotateY(frameCount*0.01)
		box(20)*/
		pop()
		
		}
class Boxes{
	move(){
		
		rotateX(-maxY*0.05)
		rotateY(maxX*0.05)
	
	}
	display(){
		noFill()
		stroke(0,0,360)
		box(400)
	}

}