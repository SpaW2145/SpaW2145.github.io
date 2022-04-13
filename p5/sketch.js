var speed = 1
var x;
var y;


function setup() {
createCanvas(1080,720);
angleMode(DEGREES);
colorMode(HSB,360);
background(300,0,0,200)
x = 50
y = 50
}

function draw() {

    Stroke(180,300,360);
    ellipset(x+speed,y+speed,10,10)

    speed += 0.5

    

    
}
function mouseClicked() {
    if(mouseX >=500 && mouseY>=320 && mouseX <= 580 && mouseY <= 400){
        saveCanvas('Energy Profile', 'jpg');}
    

}
