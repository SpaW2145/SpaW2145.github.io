var speed = 1
var x =500;
var y=250;


function setup() {
createCanvas(1080,720);
angleMode(DEGREES);
colorMode(HSB,360);
background(300,0,0)
}

function draw() {

    stroke(200,300,360);
    fill(200,300,360);
    ellipse(x+speed,y+speed,10,10);
    if(x >= 1080 ){speed = 1}


    

    
}
function mouseClicked() {
    if(mouseX >=500 && mouseY>=320 && mouseX <= 580 && mouseY <= 400){
        saveCanvas('Energy Profile', 'jpg');}
    

}
