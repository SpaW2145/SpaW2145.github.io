let xoff = 2.0;
let yoff = 1.0;



let xsp = 0.0003;
let ysp = 0.0003;

function setup() {

   let nseed = int(random(250));
    // noiseSeed(12);
  

    colorMode(HSB,360)
    rectMode(CENTER);
  createCanvas(1000, 1000);
  background(0);
  /*  createCanvas(1200, 900); */

    // text("noiseSeed:   " +﻿nseed,100,100);
  
}

function draw() {
  background(0, 15);
 
 
  /* background(255,10);  */
  for (let i = 0; i < 15; i++) {

    
    xoff += xsp;
    yoff += ysp;

    let x = map(noise(xoff), 0, 1, 0, width+200);
    let y = map(noise(yoff), 0, 1, 0, height+200);
    stroke(0,80)
    fill
      (map(x, width, length, 360, 0), 
      map(y, width, length, 200, 360), 
      map(x, width, length, 200, 255));
    ellipse(x, y, 50,15);
  }
}









// let xoff = 2.0;
// let yoff = 1.0;
// let rad = 0;
// let farbe = 0;

// let xsp = 0.001;
// let ysp = 0.001;

// function setup() {
//   rectMode(CENTER);
//    createCanvas(displayWidth, displayHeight);
//    /*  createCanvas(1200, 900); */
//   stroke(0,90);
//   strokeWeight(0.9);
// }

// function draw() {
//   /* background(255,10);  */
//   for (let i = 0; i < 100; i++) {
//      xsp = xsp;
//      ysp = ysp;

//     xoff = xoff + xsp;
//     yoff = yoff + ysp;

//     rad += 0.001;
//     let x = map(noise(xoff),0,1,0, width);
//     let y = map(noise(yoff),0,1,0, height);

//     fill
//     (map(rad,30,50,255,0), 
//     map(rad,-10,40,0,255), 
//     map(rad,-10,30,0,255),
//    );


//     if (rad >= 50) {
//       noLoop();
//     }


//     //  circle(x+25, y, rad);
//     rect(x, y, map(rad, 0, 50, 0, 50), map(rad, 0, 50, 0, 10));
//   }
// }

















// let xoff = 2.0;
// let yoff = 1.0;
// let rad = 50;
// let farbe = 0;

// let xsp = 0.008;
// let ysp = 0.008;

// function setup() {
//   rectMode(CENTER);
//   // createCanvas(displayWidth, displayHeight);
//     createCanvas(1200, 900);
//   stroke(0,90);
// }

// function draw() {
//   /* background(255,10);  */
//   for (let i = 0; i < 100; i++) {
//      xsp = map(rad, 50, -10, 0.008, 0);
//      ysp = map(rad, 50 , -10, 0.008, 0);

//     xoff = xoff + xsp;
//     yoff = yoff + ysp;

//     rad -= 0.001;
//     let x = map(noise(xoff),0,1,0, width);
//     let y = map(noise(yoff),0,1,0, height);

//     fill
//     (map(rad,50,30,255,0), 
//     map(rad,40,-10,0,255), 
//     map(rad,30,-10,0,255)
//     );


//     if (rad <= -10) {
//       noLoop();
//     }


//     //  circle(x+25, y, rad);
//     rect(x, y, map(rad, 50, 0, 0, 50), map(rad, 50, 0, 0, 10));
//   }
// }