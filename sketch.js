var a,b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(100, 200, 80, 400);
  a.shapeColor = "green"
  b.shapeColor = "green"
  a.velocityX = -4
  
}

function draw() {
 background(0);  
 
bounceOff(a,b);


  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 
    && object2.x-object1.x<object1.width/2+object2.width/2 )
    { object1.velocityX = object1.velocityX *-1
      object2.velocityX = object2.velocityX *-1
    }
    if (object1.y-object2.y<object1.height/2+object2.height/2 
      && object2.y-object1.y<object1.height/2+object2.height/2)
  {object1.velocityY = object1.velocityY *-1
    object2.velocityY = object2.velocityY *-1

  }
      
    //a.shapeColor = "red"
    //b.shapeColor = "red"
  }
   
   // a.shapeColor = "green"
   // b.shapeColor = "green"
  
