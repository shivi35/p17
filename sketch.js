
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}




  
function setup() {
  createCanvas(800, 600);
  monkey=createSprite(70,390,20,30);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  ground = createSprite(400,350,900,10);
  ground.velocity=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}

function draw() {
  background(220);
stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score , 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime : "+survivalTime,100,50);
drawSprites()
  
}








