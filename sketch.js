var trex , trex_img;
//create a ground

function preload(){
  trex_img = loadAnimation("trex1.png","trex3.png","trex4.png");
//load the image for the ground
}


function setup(){
trex = createSprite(200,200,50,50);
trex.addAnimation("trex",trex_img);

//give the position of the ground
//and make trex stand on the ground
}

function draw(){
background("purple");

if(keyDown("space")){
  trex.velocityY = -9;
}

trex.velocityY = trex.velocityY + 0.2 
//make the trex collide with the ground

trex.display();
//display the ground
drawSprites();
}
