var points = 5;
var wall = 100;

function setup() {
    createCanvas(900,900);
    col1 = color(255,0,0);
    col2 = color(0,0,255);
    col3 = color(0,255,0);
}

function draw() {
    background(0);
    strokeWeight(2);
    //fill(map(mouseY, 0, width, 0, (width -wall)/1.5 ), 0, map(mouseX, 0, width, 0, (width -wall)/1.5 ));
    
    
    var points = int(map(mouseX, 0, width - wall, 2, 20));
    var size = mouseY/10;
    //if(size> 20){size = 20;}

    for (var x = 0; x < points; x++ ){
        var posX = map(x, 0, points - 1, wall, width - wall);
        for (var y = 0; y < points; y++ ){
            var posY = map(y, 0, points - 1, wall, height - wall);
            var col = lerpColor(col1,col2,map(x, 0, points-1, 0, 1));
            var colbis = lerpColor(col2,col3,map(y, 0, points-1, 0.15, 1));
            fill(col);
            rectMode(CENTER);
            rect(posX,posY, size,size);
            stroke(colbis)
            line(posX,posY, posY,posX);
            //line(posX,posY, posX,posY);
        }
    }

    

}