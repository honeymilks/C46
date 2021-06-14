var bg,bgImg
var runner
var runnerImg
var gameState
function preload (){
 bgImg=loadImage("Images/bg.jpg")
 runnerImg=loadAnimation("Images/C1.png","Images/C2.png","Images/C3.png","Images/C4.png","Images/C5.png","Images/C6.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(width/2,height/2)
  bg.addImage(bgImg)
  bg.velocityX=-2
  bg.visible=false
runner=createSprite(100,height-40,20,20)
runner.addAnimation("runner",runnerImg)
}

function draw() {
  //background();  
if(gameState === undefined){
 welcomepg()
 if(keyDown("space")){
   gameState = "PLAY"
 }
}
if(gameState === "PLAY"){
  //background();
bg.visible=true
bg.scale=0.5
if(bg.x<200){
  bg.x=width/2;
}
//console.log(bg.x)
  drawSprites();
}

 
}
function welcomepg(){
  background("peachpuff")
  textSize(24)
  text("Welcome,Press the space bar to start the game.",width/2-150,height/2);
}