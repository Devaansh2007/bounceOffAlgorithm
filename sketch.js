function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400, 100, 50, 80);  
 fixedRect.shapeColor="green"; 
 movingRect=createSprite(400,800,80,30);
 movingRect.shapeColor="green"; 
 gameObject1 = createSprite(100,200,80,30); 
  gameObject1.shapeColor = "green";
   gameObject2 = createSprite(200,200,80,30); 
   gameObject2.shapeColor = "green";
   gameObject3 = createSprite(300,200,80,30);
   gameObject3.shapeColor = "green"; 
   gameObject4 = createSprite(400,200,80,30);
   gameObject4.shapeColor = "green";
   movingRect.velocityY = -5;
   fixedRect.velocityY = +5;
}

function draw() {
  background(0);
  bounceOff(movingRect,fixedRect)
  
  // movingRect.x=World.mouseX;
  //  movingRect.y=World.mouseY;
  //  if(isTouching(movingRect,gameObject1)){  
   //    movingRect.shapeColor="red"; 
  //     gameObject1.shapeColor="red"; 
    //  }  
      //else
   //   { movingRect.shapeColor="green";
   //gameObject1.shapeColor="green"; }
   
  drawSprites();
    }
