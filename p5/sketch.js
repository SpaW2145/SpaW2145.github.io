
let ball
let HUE =0;


function setup() {
createCanvas(1080,720);
angleMode(DEGREES);
colorMode(HSB,360);
ball = new Balls()

}

function draw() {
    background(0,150)
    HUE += 1


    ball.move()
    ball.display()
}

class Balls{
    constructor(){
        this.x = 500
        this.y = 500
        this.diameter = 10
        this.xspeed = 2;
        this.yspeed = 2;
    }
    move() {
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x > width - this.diameter || this.x < this.diameter){
            if(this.xspeed > 0){this.xspeed +=1.5}
            if(this.xspeed < 0){this.xspeed -=1}
            this.xspeed = -this.xspeed;
        }
        if (this.y > height - this.diameter || this.y < this.diameter) {
            if(this.yspeed > 0){this.yspeed +=1.5}
            if(this.yspeed < 0){this.yspeed -=1}
            this.yspeed = -this.yspeed ;
    
        }
      }
    
      display() {
        stroke(HUE,300,360)
        fill(HUE,300,360)
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
}