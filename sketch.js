var bg,enemy1Group;
var player1
var score=0
var form
var gameState = 0


function preload (){
  bg= loadImage("War.png");
  enemy= loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png","attack5.png","attack6.png")
  player=loadAnimation("warrior1.png","warrior2.png","warrior3.png")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form()
  player1=createSprite(200,200,50,50)
  player1.addAnimation("play",player)
  player1.scale=0.25


  enemy1Group=createGroup()
  player1.debug=true
  player1.setCollider("rectangle",0,0,300,300)
}



function draw() {
  background(0); 
  if(gameState === 0){
    form.display()
  }

  if(gameState === 1){
    background(bg); 
    spawnenemy() 
    
    if(player1.isTouching(enemy1Group)){
      enemy1Group.destroyEach();
      score=score+1;
    }
    player1.y = World.mouseY
    drawSprites();
    textSize(30)
    fill("yellow")
    text("enemykill "+score,100,100)

  }

  if(gameState === 2){
    textSize(30)
    fill("yellow")
    text("story",50,50)
    text("kjsdfkjhavsdlkvlds;//change this to story",50,100)
    text("used your mouse to move player up and down",50,400)
    
  }
  
  
}
function spawnenemy() {
  
  if (frameCount % 120 === 0) {
    enemy1 = createSprite(displayWidth,120,40,10);
    enemy1.y = Math.round(random(100,displayHeight-200));
    enemy1.addAnimation("enmy",enemy)
    enemy1.scale=0.2
    enemy1.velocityX = -10;
    enemy1.lifetime = 600;
    
    enemy1.debug = true
    enemy1.setCollider("rectangle",0,0,300,300)

    enemy1Group.add(enemy1);
  }
}