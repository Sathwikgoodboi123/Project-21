var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    fixedRect = createSprite(300,550,200,100);
    fixedRect.shapeColor = "blue";
    fixedRect2 = createSprite(500,550,200,100);
    fixedRect2.shapeColor = "pink";
    fixedRect3 = createSprite(700,550,200,100);
    fixedRect3.shapeColor = "orange";
    fixedRect4 = createSprite(100,550,200,100);
    fixedRect4.shapeColor = "green";
    movingRect = createSprite(400,100,30,30);
    movingRect.shapeColor = "red";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    if (keyDown(LEFT_ARROW)) {
        movingRect.x = movingRect.x - 10;
    }
    if (keyDown(RIGHT_ARROW)) {
        movingRect.x = movingRect.x + 10;
    }
    if (keyDown(DOWN_ARROW)) {
        movingRect.y = movingRect.y + 10;
    }
    if (keyDown(UP_ARROW)) {
        movingRect.y = movingRect.y - 10;
    }
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
        && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 || movingRect.x - fixedRect4.x < fixedRect4.width/2 + movingRect.width/2
        && fixedRect4.x - movingRect.x < fixedRect4.width/2 + movingRect.width/2
        && movingRect.y - fixedRect4.y < fixedRect4.height/2 + movingRect.height/2
        && fixedRect4.y - movingRect.y < fixedRect4.height/2 + movingRect.height/2 || movingRect.x - fixedRect2.x < fixedRect2.width/2 + movingRect.width/2
        && fixedRect2.x - movingRect.x < fixedRect2.width/2 + movingRect.width/2
        && movingRect.y - fixedRect2.y < fixedRect2.height/2 + movingRect.height/2
        && fixedRect2.y - movingRect.y < fixedRect2.height/2 + movingRect.height/2 || movingRect.x - fixedRect3.x < fixedRect3.width/2 + movingRect.width/2
        && fixedRect3.x - movingRect.x < fixedRect3.width/2 + movingRect.width/2
        && movingRect.y - fixedRect3.y < fixedRect3.height/2 + movingRect.height/2
        && fixedRect3.y - movingRect.y < fixedRect3.height/2 + movingRect.height/2) {
      
            if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
         && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
         && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
         && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
         movingRect.shapeColor = fixedRect.shapeColor;
         }
         if (movingRect.x - fixedRect4.x < fixedRect4.width/2 + movingRect.width/2
         && fixedRect4.x - movingRect.x < fixedRect4.width/2 + movingRect.width/2
         && movingRect.y - fixedRect4.y < fixedRect4.height/2 + movingRect.height/2
         && fixedRect4.y - movingRect.y < fixedRect4.height/2 + movingRect.height/2) {
         movingRect.shapeColor = fixedRect4.shapeColor;
         }
         if (movingRect.x - fixedRect2.x < fixedRect2.width/2 + movingRect.width/2
         && fixedRect2.x - movingRect.x < fixedRect2.width/2 + movingRect.width/2
         && movingRect.y - fixedRect2.y < fixedRect2.height/2 + movingRect.height/2
         && fixedRect2.y - movingRect.y < fixedRect2.height/2 + movingRect.height/2) {
         movingRect.shapeColor = fixedRect2.shapeColor;
      
         }
         if (movingRect.x - fixedRect3.x < fixedRect3.width/2 + movingRect.width/2
         && fixedRect3.x - movingRect.x < fixedRect3.width/2 + movingRect.width/2
         && movingRect.y - fixedRect3.y < fixedRect3.height/2 + movingRect.height/2
         && fixedRect3.y - movingRect.y < fixedRect3.height/2 + movingRect.height/2) {
         movingRect.shapeColor = fixedRect3.shapeColor;
         }
        }
 drawSprites();
}