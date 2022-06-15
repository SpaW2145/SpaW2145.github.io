let fade = 0;
let fade2 = 100;
let col;
let fade3 = 50;
let rev = false;
let d;



function setup() {
    createCanvas(windowWidth, windowHeight);
    d = createGraphics(width, height,WEBGL);
    rectMode(CENTER);
    d.rectMode(CENTER);
    colorMode(HSB,100);
    
}

function draw() {
    fade += 0.1;
    fade2 -= 0.1;
    col = color(fade,70,70);
    let col2 = color(fade2,70,70);
    let col3 = color(fade3,70,70);
    d.clear();

    background(0,10)
    d.background(0,10);

    
    
    d.push()
    d.stroke(col);
    //translate(width/2, height/2);
    d.rotate(frameCount*0.04)
    d.noFill()
    d.rect(0,0,width/5 + fade2 *10,height/5);
    d.pop()

    d.push()
    d.stroke(col);
    d.noFill()
    //translate(width/2, height/2);
    d.rotate(frameCount*0.04+4.71)
    d.rect(0,0,width/5 + fade*10 ,height/5);
    
    for(var i = 0; i < 20; i ++){
        d.stroke(col2);
        d.ellipse(0,0, fade*10-i*100,fade*10-i*100);
    }
    
    d.pop()

    d.push()
    d. translate(0,0, 200)
    d.rotateX(frameCount*0.02);
    d.rotateY(frameCount*0.02);
    d.rotateZ(frameCount*0.02);
    d.noFill();
    d.stroke(col3);
    d.box(100);
    d.pop()


    if(fade>100){
        fade = 0;
    }
    if(fade2<0){
        fade2 = 100;
    }
    if(rev == true ){
        fade3-=0.1;
        if(fade3<0){
            rev = false;
        }
    }
    if(rev == false){
        fade3 +=0.1
        if(fade3>100){
            rev = true;
        }
    }
    image(d, 0 ,0)

}