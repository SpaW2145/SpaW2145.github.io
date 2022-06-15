let count;
let rotX,rotY = 0;
let offset = 0;
let offset2 = 0;
let col;
let countdown = 0;
margin = 105;



function setup() {
    createCanvas(800,800, WEBGL);
    colorMode(HSB,100);
    count = 5;
    rectMode(CENTER);
}

function draw() {
    background(0);


    //offset += 0.1
    rotX = frameCount * 0.01;
    rotY = frameCount * 0.01;
    

    
    strokeWeight(2);
    noFill();

    for(var i = 0; i < count; i++){
        
        for(var u = 0; u < count; u++){
            push()
            
            translate(map(i, 0, count-1, -width/2 + margin, width/2 - margin), 
                      map(u, 0, count-1, -height/2 + margin, height/2 - margin));
                      
            rotateX(noise(offset* width *0.001));
            offset +=0.001;
            //rotX += 0.1;
            rotateY(noise(offset2* height*0.001));
            offset2 -=0.001;
            //rotY -= 0.1;

            col = color(random(0,100),100,80);

            stroke(col);
            box(50);
            

            /*countdown += 0.01;
            //print(countdown);
            if(countdown >100){
                count =(random(2,5));
                countdown = 0;
            }*/

            
            
            pop()
            
        }
    }


}