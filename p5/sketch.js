
let ball
let HUE =0;
let SAT = 150


function setup() {
createCanvas(1080,720);
colorMode(HSB,360);
ball = new Balls()
background(0,350)


}

function draw() {



    HUE += 2.5
    if(HUE >= 360){HUE = 0}
    SAT += 1.23
    if(SAT >= 360){SAT = 100}


    ball.move()
    ball.display()
}


class Balls{
    constructor(){
        this.x = 500
        this.y = 500
        this.diameter = 10
        this.xspeed = 7;
        this.yspeed = 7;
    }
    move() {
        let change = random(1,3)*random(0.5,2.2)
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x > width - this.diameter || this.x < this.diameter){
            if(this.xspeed > 0){this.xspeed +=change}
            if(this.xspeed < 0){this.xspeed -=change}
            this.xspeed = -this.xspeed;
            if(this.xspeed > 70){this.xspeed = random(-7,7)}
           // this.xspeed = this.xspeed * cos(random(PI *2))
           if(this.x > 1100 || this.x < -20){this.x=540}

        }
        if (this.y > height - this.diameter || this.y < this.diameter) {
            if(this.yspeed > 0){this.yspeed +=change}
            if(this.yspeed < 0){this.yspeed -=change}
            this.yspeed = -this.yspeed ;
            if(this.yspeed > 70){this.yspeed = random(-7,7)}
          //  this.yspeed = this.yspeed * sin(random(PI *2))
            if(this.y > 740 || this.y < -20){this.y=370}
    
        }


      }
    
      display() {
        stroke(HUE,300,360)
        fill(HUE,300,360)
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
}