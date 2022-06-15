/*var circleW = 620;
var circleH = 235;


function setup() {
    createCanvas(1000, 1000);

}

function draw() {
    background(0);
    fill(0);
    stroke(255);
    for(var x =0; x < circleW; x++){
        
        for (var y = 0; y < circleH; y++ ){
            
            ellipse(width/2, height/2, millis()% (x+100), 235);
        }
    }
    
}*/
var pointsPerCircle;
var radius;
var drehung = 5;

function setup() {
  createCanvas(700, 700);

}

function draw() {
  background(0);
  translate(mouseX,mouseY);
  branch(150);
  translate(0,-150);
  rotate(PI/4);
  branch(150 * 0.75);


  /*pointsPerCircle = int (map(100, 0, width, 3, 100));
  radius = map(100, 0, height, 100, 1);
  background(0);
  fill (0);
  stroke ((millis()*0.01)%255, 82, 50);
  strokeWeight(0.8);
  for (var angle = 0; angle < 520; angle = angle + (180 / pointsPerCircle)) {
    var xpos = cos(angle + drehung) * radius*2;
    var ypos = sin(angle*2 + drehung*2) * radius;
    ellipse(width / 2, height / 2, (width / 8) + xpos*2, (height / 8) + ypos);
  }
  drehung = drehung - 0.015;*/
  

}
function branch(length){
  stroke(10,50,200);
  line(0,0,0, -length)
}