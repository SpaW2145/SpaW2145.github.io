var margin = 50
var maxX = 20	
var maxY = 15
let posX,posY,posZ;
var time =0;
var time_speed = 0.1;
var radius = 50


function setup() {
	createCanvas(1080, 720,WEBGL);
	colorMode(HSB,360)
	rectMode(CENTER);
	//	noLoop();
	ball = new Boxes()
	bee = new Mover()
}

function draw() { // wird dauernd im loop aufgerufen
	background(0,300);
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
		bee.move()
		bee.display()
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
class Mover{

	move(){
		this.posX = cos(time* noise(1.5,3)) * radius
		this.posY =  sin(time*noise(1.5,3)) * radius
		this.posZ = (cos(time)+sin(time))/noise(1.5/2.2) * radius
		translate(this.posX, this.posY,this.posZ)
		time+=0.1

	
	}
	display(){
		fill(180,360,360)
		box(40)
	}
}