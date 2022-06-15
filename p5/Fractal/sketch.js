let instance;
var points = 5;
var wall = 10;
let size = 5;

function setup() {
    createCanvas(900, 900);
    instance = new Square();

}

function draw() {
    background(0);
    for(var u =0; u < 28;u++){
    instance.display();
    instance.move();
    translate(25,0)

    }
    
    



}

class Square {

    constructor(){
        this.x = 100;
        this.y = 100;
        this.length = size;
        this.speed = noise(frameCount*0.001);
    }
    move(){
        this.x += this.speed;
        this.y += this.speed;
    }
    display(){
        push()
        for (var x = 0; x < points; x++ ){
            if(x>=1){
                translate(0,5)
            }
            
            push()
            for (var y = 0; y < points; y++ ){
                
                translate(5,0)
    
                fill(255);
                rectMode(CENTER);
                push()
                
                rect(this.x,this.y,this.length,this.length);

                pop()
    
            }
            pop()
        }
        pop()

        

    }
}