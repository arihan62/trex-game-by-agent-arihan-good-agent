

var ReinDeer_Jump;
var ReinDeer_Run;
var ReinDeer__Land;
var restart;
var gameover;
var game_background;
var ground2Img;
var checkPointSound,jumpSound,dieSound;
var obstacle1,obstacle2,obstacle3;


function preload(){
  ReinDeer_Run=loadAnimation("ReinDeer_Run.png","ReinDeer_Jump.png","ReinDeer_Land.png");
  game_backgroundImg=loadImage("game_background.jpg");
  ground2Img=loadImage("ground2.png");
  gameoverImg=loadImage("gameover.png");
  restart=loadImage("restart.png");
  checkPointSound=loadSound("checkPoint.mp3");
  jumpSound=loadSound("jump.mp3");
  dieSound=loadSound("die.mp3");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.jpeg");
  obstacle3=loadImage("obstacle3.jpg");
  
}
function setup(){
  createCanvas(1000,1000);
  game_background=createSprite(0,0,1000,1000);
  game_background.addImage("game_background",game_backgroundImg);
  game_background.scale=2.5;
  game_background.velocityX=-5;
ReinDeer =createSprite(200,400,200,100);
ReinDeer.addAnimation("running",ReinDeer_Run);
gameover=createSprite(600,400,100,100);
gameover.addImage("gameOver",gameoverImg);
ground=createSprite(980,980,300,50);
ground.addImage("ground2",ground2Img);
ground.x = ground.width /2;
ground2Img.visible=true;
ground2Img.veloctyX=4;
ReinDeer.scale=0.5;



obstacleGroup=new Group();



score=0;
}
function draw(){
  
  
   gameover.visible=false;
  text("Score:"+score,200,150);
  


  
  spawnobstacles();

  drawSprites();
}
function spawnobstacles(){
if(frameCount%60 === 0){


  var obstacle=createSprite(600,165,10,40);
  obstacle.velocityX=-6;

  var rand=Math.round(random(1,3));
  switch (rand){
  case 1:obstacle.addImage(obstacle1);
  break;
  case 2:obstacle.addImage(obstacle2);
  break;
  case 3:obstacle.addImage(obsatcle3);
  break;
  default: break;

  }
obstacle.scale=0.5;
obstacle.lifetime=700;
obstaclesGroup.add(obstacle);
}
}