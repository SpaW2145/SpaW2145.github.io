var margin = 50
var maxX = 20	
var maxY = 15


function setup() {
	createCanvas(1080, 720,WEBGL);
	rectMode(CENTER);
	//	noLoop();
}

function draw() { // wird dauernd im loop aufgerufen
	background(0);
	fill(50,50,150)
	translate(-540,-360)
	maxX = mouseX/20
	maxY = mouseY/20
	for(var x=0; x <maxX ; x+= 1){
		for(var y=0; y<maxY;y++){


		push()
		translate(50*x +margin  ,50*y+margin)
		rotateX(frameCount*0.01)	
		rotateY(frameCount*0.01)
		box(20)
		pop()
		
		}
	}
	

	/*push()
	translate(margin,margin)
	rotateX(frameCount*0.01)	
	rotateY(frameCount*0.01)
	box(20)
	pop()
	push()
	translate(margin,margin)
	box(20)
	pop()
	rect(50,50,50,50)*/
}