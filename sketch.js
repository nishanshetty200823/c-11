var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png");
//Choose the correct option by uncommenting the right line to load the animation for ship.
  //shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityx=-5;
  sea.scale=0.3;
  edges =createEdgeSprites();

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  ship.x =90;
  ship.y =300;
}

function draw() {
  background("0");

 sea.velocityy =-3;
 sea.x=-3;
 sea.velocityx=-3;
 sea.velocityx=3;

  if (sea.x<0){
    sea.x =sea.width/8;
  }
  if(keyDown("left")){
  ship.velocityX=-5;
}
  
if(keyDown("right")){
  ship.velocityX=5;
}

if(keyDown("space")){
 ship.velocityX=0;
}

  
    
  drawSprites();
}
