let xoff = 500.0;
let yoff = 300.0;
let zoff = 30;

let uoff = 500.0;
let voff = 300.0;
let noff = 30;


let xsp = 0.003;
let ysp = 0.003;
let zsp = 0.003;

let usp = 0.003;
let vsp = 0.003;
let nsp = 0.003;

function setup() {


    frameRate(30);
  

    colorMode(HSB,360)
    rectMode(CENTER);
  var canvas = createCanvas(1080,720,WEBGL);
	canvas.parent('p5sketch')


  
}

function draw() {
  background(0,0,0, 300);
 
 
 
  

    
    xoff += xsp;
    yoff += ysp;
    zoff += zsp;

    uoff += usp;
    voff += vsp;
    noff += nsp;


    push()
    noiseSeed(80)
    stroke(0,80)
    let x = map(noise(xoff), 0, 1, -500, 500);
    let y = map(noise(yoff), 0, 1, -500, 500);
    let z = map(noise(zoff), 0, 1, -500, 500);
    translate(x,0,z)
    fill
    (map(x, -500, 500, 360, 0),map(z, -500, 500, 360, 0), 360);
    ellipse(0, 0, 30,30);
    pop()

    push()
    noiseSeed(99)
    stroke(0,80)
    let u = map(noise(uoff), 0, 1, -400, 400);
    let v = map(noise(voff), 0, 1, -400, 400);
    let n = map(noise(noff), 0, 1, -400, 400);
    translate(u,v,n)
    fill
    (map(u, -500, 500, 360, 0),map(n, -500, 500, 360, 0), 360);
    ellipse(0, 0, 30,30);
    pop()
    

    push()
    strokeWeight(50)
    stroke(260,360,360)
    fill(180,50,360)
    rotateY(frameCount*0.01)
    rotateX(frameCount*0.01)
    rotateZ(frameCount*0.01)
    sphere(38, 12, 12)
    pop()

    

    push()
    noStroke()
    //stroke(200,200,360)
    fill(180,80,360)
    rotateY(-frameCount*0.01)
    rotateX(-frameCount*0.01)
    rotateZ(-frameCount*0.01)
    sphere(50)
    pop()
    

}

class Orbiters{

}