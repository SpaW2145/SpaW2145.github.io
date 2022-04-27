var margin = 75
var anzahl_punkte = 10;
var random_range = 5;

function setup() {
	createCanvas(1080, 720);
	frameRate(25);
	rectMode(CENTER);
	//	noLoop();
}

function draw() { // wird dauernd im loop aufgerufen
	background(255);
	noStroke();
	fill(0, 100);
	//	noFill();
	for (var iy = 0; iy < anzahl_punkte; iy++) {
		var y = map(iy, 0, anzahl_punkte - 1,margin, height - margin);
		for (var ix = 0; ix < anzahl_punkte; ix++) {
			var x = map(ix, 0, anzahl_punkte - 1, margin, width - margin );

			rect(x , y, 50, 50);
		}
	}

}