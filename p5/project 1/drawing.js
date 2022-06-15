var pointsPerCircle = 100;
var radius = 300; 
var turn =0;

function setup() {
    createCanvas(700,700);
    angleMode(DEGREES);
    colorMode(HSL, 100);
    col1 = color(255,0,0);
    col2 = color(0,0,255);
}

function draw() {
    background(0);
    strokeWeight(10)

    var x = y = 0;
    var length = 0;
    var col;
    var modifier = 1;//map(mouseX, 0, width, 1, 32);
    var yMod = 100;//map(mouseY, 0, height, 100, 200);
    

    for (let t = 0; t <= millis()%10000; t+=1) {
      strokeWeight(yMod % 32);
      modifier = t / (t % width/2);
      col = color(t % 100, 50, 50);
      x = (sin(t) * length / modifier + width/2);
      y = (cos(t) * length / modifier + height/2);
      ax = (-sin(t) * length / modifier + width/2);
      ay = (-cos(t) * length / modifier + height/2);
      stroke(col);
      line(x, y, x, y);
      line(ax, y, ax, y);
      line(x, ay, x, ay);
      line(ax, ay, ax, ay);
      length = Math.abs(length-t*4);
    }
}