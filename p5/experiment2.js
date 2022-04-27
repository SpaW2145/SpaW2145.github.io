

function setup() {
	createCanvas(1080, 720,WEBGL);
	rectMode(CENTER);
	//	noLoop();
}

function draw() { // wird dauernd im loop aufgerufen
	background(255);
	fill(50,50,150)
	
	rotateX(frameCount*0.01)	
	rotateY(frameCount*0.01)
	box(50)
}