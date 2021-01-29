
var movingRect,fixedRect


function setup() {
  createCanvas(800, 600);

  movingRect = createSprite(100,200,50,50);
  movingRect.shapeColor="red";
  movingRect.debug=true
  movingRect.velocityX = 5

  fixedRect = createSprite(500,200,50,50)
  fixedRect.shapeColor="red";
  fixedRect.debug=true
  fixedRect.velocityX	 = -5
}


function draw() {
  background(0);


  

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
	  movingRect.shapeColor="orange"
	  fixedRect.shapeColor="orange"

  }else if ( movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 ){ 

	movingRect.shapeColor="red"
	fixedRect.shapeColor="red"
  }

  drawSprites();
 
}


