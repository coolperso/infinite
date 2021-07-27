var spaceImg,space 
var rocketImg,rocket 
var asteroidImg,asteroid,asteroidsGroup
var invisibleBlockGroup,invisibleBlock
var gameState="play"



function preload(){
    spaceImg=loadImage("maxresdefault.jpg")
    rocketImg=loadImage("rocketship.webp")
    asteroidImg=loadImage("asteroid.png")

}

function setup() {
    createCanvas(600,600)
    space=createSprite(300,300)
    space.addImage("space",spaceImg)
    

    rocket=createSprite(200,400,20,20)
    rocket.addImage("rocket",rocketImg)
    rocket.scale=.3
    

    asteroidsGroup=new Group ()
    invisibleBlockGroup=new Group()
 
}

function draw() {
    background(0);
    if(gameState=="play") {

    if(space.y>400){
          space.y=300
      }  
    
    if(keyDown("left_arrow")) {
        rocket.x=rocket.x-3
    }
    if(keyDown("right_arrow")) {
        rocket.x=rocket.x+3
    }
    if(keyDown("space")) {
        rocket.velocityY=-10
    }
    

spawnAsteroids()
drawSprites()
    }
    if(asteroidsGroup.isTouching(rocket)){
        rocket.velocityY=0
    }
    if(invisibleBlockGroup.isTouching(rocket)|| rocket.y>600){
        rocket.destroy()
        gamesState="end"
    }

    if(gameState=="end"){
        stroke("pink")
        fill("pink")
        textSize(50)
        text("GAME OVER",150,300)
    }




 
}



function spawnAsteroids(){
    if(frameCount%240==0){
        asteoid=createSprite(200,-50)
        invisibleBlock=createSprite(200,15)
        invisibleBlock.height=2

        asteroid.addImage("asteroid",asteroidImg)
        
        asteroid.x=Math.round(random(120,400))

        asteroid.depth=rocket.depth
        rocket.depth=rocket.depth+1

        asteroid.velocityY=1
        invisibleBlock.velocityY=1

        invisibleBlock.debug=true

        asteroidsGroup.add(asteroid)
        invisibleBlockGroup.add(invisibleBlock)

        asteroid.lifetime=800
        invisibleBlock.lifetime=800
    }
}



