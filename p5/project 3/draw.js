var pointsPerCircle = 100;
var radius = 300; 
var turn =0;

function setup() {
    createCanvas(700,700);
    angleMode(DEGREES);
    col1 = color(255,0,0);
    col2 = color(0,0,255);
}

function draw() {
    background(0);
    for (var angle = 0; angle < 360; angle = angle + (360/pointsPerCircle)) {
        var posX = cos(angle + turn)*radius;
        var posY = sin(angle + turn)*radius;
        var col = lerpColor(col1,col2,map(mouseY, 0, height, 0.0, 1.0));
        stroke(col);
        line(width/2,height/2,(width/2)+posX,(height/2)+posY)

    }
    turn = turn + 0.2;
    radius = 250 +(200 *sin(millis()*0.1))

}