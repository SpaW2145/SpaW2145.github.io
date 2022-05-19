let x = 540
let y = 360


function setup() {
	createCanvas(1080, 720);
	colorMode(HSB,360)
	background(0);


}

function draw() { // wird dauernd im loop aufgerufen

	for(var i = 0; i< 100;i+20){
		stroke(120,300,300)
		ellipse(x+i,y+i,20)

	}
}