let angle = 0
let z = -400
let offset = 100
let fade =0
let fade2 = 100
let angle2 =0
let u =400
var reverse = false;

function setup() {
  createCanvas(800, 800, WEBGL);
  rectMode(CENTER)
  colorMode(HSB,100)

  
}

function draw() {
  background(0);
  noFill()
  strokeWeight(3)

    angle += 0.02
    fade += 0.1;
    fade2 -= 0.1;
    for (let i = 0; i < 50; i++) {
      translate(0, 0, z)
      rotateZ(angle)
      
      col = color(fade, 80,70)
      col2 = color(fade2,80,70)
      if (fade>100){fade=0;}
      stroke(col);
      rect(0, 0, 1000, 1000)
      stroke(col2);
      ellipse(0,0,700,700)
      if (fade2<0){fade2=100;}
      if (reverse == false){z += 0.1}
      
    }
    if (z >= 800 || reverse == true) {
      z -= 1
      reverse = true;
      if(z <= -400){reverse = false}

    }
  /*angle2 -= 0.01
  for (let x = 0; x < 50; x++) {
    translate(0, 0, u)
    rotateZ(angle2)
    
    col = color(fade, 80,70)
    col2 = color(fade2,80,70)
    if (fade>100){fade=0;}
    stroke(col2);
    rect(0, 0, 200, 200)
    stroke(col);
    ellipse(0,0,400,400)
    if (fade2<0){fade2=100;}

   
    u -= 0.1
    
  }
  if (u <= 0) {
    u = +400

  }*/
}