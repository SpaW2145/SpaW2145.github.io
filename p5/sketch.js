// Sketch One
var s = function( p ) { // p could be any variable name
    
let ball
let HUE =0;
let SAT = 150
let reverse
    p.setup = function() {
        p.createCanvas(1080,720);
        p.colorMode(HSB,360);
        ball = new p.Balls()
        p.background(0,350)

    };
  
    p.draw = function() {
        HUE += 3.5
        if(HUE >= 360){HUE = 0}
        SAT += 1.23
        if(SAT >= 360){SAT = 100}
    
    
        ball.move()
        ball.display()
    };
  };
  var myp5 = new p5(s, 'c1');
  
  // Sketch Two
  var t = function( p ) { 
    var x = 100.0; 
    var y = 100; 
    var speed = 2.5; 
    p.setup = function() {
      p.createCanvas(400, 200);
    };
  
    p.draw = function() {
      p.background(100);
      p.fill(1);
      x += speed; 
      if(x > p.width){
        x = 0; 
      }
      p.ellipse(x,y,50,50);
  
    };
  };
  var myp5 = new p5(t, 'c2');