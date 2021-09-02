var fixedRect, movingRect;
var r1,r2,r3,r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
 // movingRect.debug = true;

 r1 = createSprite(200,100,50,50);
 r1.shapeColor = "blue"

 r2 = createSprite(400,100,50,50);
 r2.shapeColor = "blue"

 r3 = createSprite(600,100,50,50);
 r3.shapeColor = "blue"

 r4 = createSprite(800,100,50,50);
 r4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touch(movingRect,r1)){
    movingRect.shapeColor = "red";
    r1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    r1.shapeColor = "blue";
  }
  
  drawSprites();
}

function touch(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;  //yes the rects are touching each other
}
else {
  return false;

}
}