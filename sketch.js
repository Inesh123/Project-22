var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	 createCanvas(800, 700);
	 rectMode(CENTER);
	

	 packageSprite=createSprite(width/2, 80, 10,10);
	 packageSprite.addImage(packageIMG);
	 packageSprite.scale=0.2;

	 helicopterSprite=createSprite(width/2, 200, 10,10);
	 helicopterSprite.addImage(helicopterIMG);
	 helicopterSprite.scale=0.6;

	 groundSprite=createSprite(width/2, 670, width,10);
	 groundSprite.shapeColor="white";


	 engine = Engine.create();
	 world = engine.world;

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	 World.add(world, packageBody);
	

	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 

	 boxLeft=createSprite(300,600,50,100);
	 boxLeftBody=Bodies.rectangle(300,600,50,100,{isStatic:true});
	 World.add(world, boxLeftBody);
	 boxLeft.shapeColor="red";

	 boxRight=createSprite(600,600,50,100);
	 boxRightBody=Bodies.rectangle(600,600,50,100,{isStatic:true});
	 World.add(world, boxRightBody);
	 boxRight.shapeColor="red";

	 boxBottom=createSprite(450,650,350,25);
	 boxBottomBody=Bodies.rectangle(450,650,350,25,{isStatic:true});
	 World.add(world, boxBottomBody);
	 boxBottom.shapeColor="red";

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(ground);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
    
  }

 else if(keyCode === LEFT_ARROW){
	 helicopterSprite.x = helicopterSprite.x - 20;
	 Matter.Body.translate(packageBody,{x: -20 , y: 0});
 }

 else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 20;
	Matter.Body.translate(packageBody,{x: +20 , y: 0});
 }

}




