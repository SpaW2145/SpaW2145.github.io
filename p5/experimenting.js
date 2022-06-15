


function setup() {
	createCanvas(1200, 800);
	colorMode(HSB,360)
	background(0);
	eye = new Eye


}

function draw() { // wird dauernd im loop aufgerufen
	

	
	eye.display()



	//curveVertex(x, y)

}
class Eye{
	constructor(){

		this.x = 80
		this.y = 110
		this.bri = 720
		this.id = (random(0.01,0.022))

		

	}
	display(){
		stroke(300,300,300)
		noFill()
		beginShape()
		curveVertex(80,110)// x, y
		curveVertex(80, 110)// x,y
		curveVertex(100, 100)//x +x/4 ,y - y/10
		curveVertex(140, 70)//
		curveVertex(180,50)//
		curveVertex(220,50)//
		curveVertex(260,70)//
		curveVertex(300,100)//
		curveVertex(320,110)//
		curveVertex(320,110)//
		endShape()
		beginShape()
		curveVertex(80,110)//
		curveVertex(80, 110)//
		curveVertex(100, 120)//
		curveVertex(130, 135)//
		curveVertex(180,150)//
		curveVertex(220,150)//
		curveVertex(270,135)//
		curveVertex(300,120)//
		curveVertex(320,110)//
		curveVertex(320,110)//
		endShape()
	}
	

}