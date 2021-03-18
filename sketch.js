var fixedRect,movingRect, edges;

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(200, 200, 50, 80);
  movingRect.shapeColor ="blue";

  fixedRect= createSprite(500, 200, 80, 30);
  fixedRect.shapeColor = "blue";

  fixedRect1= createSprite(200, 100, 50, 80);
  fixedRect1.shapeColor = "blue";


  edges = createEdgeSprites();
}

function draw() {
  background("red");  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
} 
else if(isTouching(movingRect, fixedRect1))
{
  movingRect.shapeColor = "green";
  fixedRect1.shapeColor = "green"; 
}
else {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  fixedRect1.shapeColor = "blue";
}

movingRect1.bounceOff(edges);
movingRect2.bounceOff(edges);

isTouching();

drawSprites();
}
