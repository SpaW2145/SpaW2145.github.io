var y=0
var HUE = 0
var SAT = 20
var u =0
var v = 0

function setup() {
createCanvas(1080,720);
angleMode(DEGREES);
colorMode(HSB,360);
background(360,0,0)

}

function draw() {
    
    rect(0,0,200,200)
    fill(0)

    for(var i =0;i< height; i++){
        HUE = map(i   ,0,height,   0,360)
        stroke(HUE,360,300)
        line(0,i,width,i)
    }
    stroke(360,360,360,100)
    ellipse(u,v,10,10)
    u++
    v++



 
}
