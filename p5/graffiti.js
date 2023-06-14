

function setup() {
  
  sat1 = new Orbiters()
  sat2 = new Orbiters()
  sat3 = new Orbiters()


    frameRate(30);
    
  

    colorMode(HSB,360)
    rectMode(CENTER);
  var canvas = createCanvas(1080,720,WEBGL);
	canvas.parent('p5sketch')
  background(0,0,0)

 

  
}

function draw() {
  background(0,0,0)

  push()
  noiseSeed(20)
  sat1.move()
  sat1.display()
  pop()

  push()
  noiseSeed(80)
  sat2.move()
  sat2.display()
  pop()

  push()
  noiseSeed(99)
  sat3.move()
  sat3.display()
  pop()
  



    push()
    strokeWeight(50)
    stroke(260,360,360)
    fill(180,50,360)
    rotateY(frameCount*0.01)
    rotateX(frameCount*0.01)
    rotateZ(frameCount*0.01)
    sphere(48, 12, 12)
    pop()

    push()
    noStroke()
 
    fill(180,80,360)
    rotateY(-frameCount*0.01)
    rotateX(-frameCount*0.01)
    rotateZ(-frameCount*0.01)
    sphere(60)
    pop()

    
    

}

class Orbiters{
	constructor(){

		this.xoff = 500.0;
    this.yoff = 300.0;
    this.zoff = 30;

    this.hue = random(0,360)
    this.hu = random(0,360)

    this.xsp = random(0.003,0.005);
    this.ysp = random(0.003,0.005);
    this.zsp = random(0.003,0.005);
	}
	move(){
    
    this.xoff += this.xsp;
    this.yoff += this.ysp;
    this.zoff += this.zsp;
		
    
    this.x = map(noise(this.xoff), 0, 1, -500, 500);
    this.y = map(noise(this.yoff), 0, 1, -100, 100);
    this.z = map(noise(this.zoff), 0, 1, -500, 500);

    translate(this.x,this.y,this.z)

	
	}
	display(){

		stroke(this.hue,360,300)
    fill(this.hue,360, 360);
    sphere(20)
    push()
    rotateX(30)
    stroke(this.hu,360,300)
    fill(this.hu,360, 360);
    sphere(20)
    pop()

	}
}

