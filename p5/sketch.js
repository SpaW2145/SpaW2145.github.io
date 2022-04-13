
let ball
let HUE =0;


function setup() {
createCanvas(1080,720);
colorMode(HSB,360);
ball = new Balls()
background(0,360)

}

function draw() {

    HUE += 0.5
    if(HUE == 360){HUE = 0}


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
        let change = random(1,3)*random(0.5,2.2)
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x > width - this.diameter || this.x < this.diameter){
            if(this.xspeed > 0){this.xspeed +=change}
            if(this.xspeed < 0){this.xspeed -=change}
            this.xspeed = -this.xspeed;
           // this.xspeed = this.xspeed * cos(random(PI *2))

        }
        if (this.y > height - this.diameter || this.y < this.diameter) {
            if(this.yspeed > 0){this.yspeed +=change}
            if(this.yspeed < 0){this.yspeed -=change}
            this.yspeed = -this.yspeed ;
          //  this.yspeed = this.yspeed * sin(random(PI *2))
    
        }
      }
    
      display() {
        stroke(HUE,300,360)
        fill(HUE,300,360)
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
}