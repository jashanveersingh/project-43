
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  
  ground= createSprite(400,350,900,10);
  ground.velociteX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  
bananaGroup=new Group();
  obstaclesGroup=new Group();
  score=0;
  
}


function draw() {

  background("white")
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
    score = score + Math.round(frameCount/60);

  
  
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
    monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground);
   
  
  
  spawnbanana();
  
  
  spawnObstacles();
  
  
  
  
  
  
  drawSprites();
     text("score "+ score, 500,50);
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
        monkey.velocityY=0;
obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);

}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(800,320,10,40);
   obstacle .velocityX = -6
   obstacle.addImage(obstacleImage);
      
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle)
   
 }
}

function spawnbanana() {
  
  if (frameCount % 60 === 0) {
    var banana= createSprite(600,120,40,10);
    banana.y=random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
   banana .velocityX = -3;
      
     //assign lifetime to the variable
    banana.lifetime = 200;
  
    
    
    
  }
}






