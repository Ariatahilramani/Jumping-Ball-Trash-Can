
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 box1= new Box(800,320,160,160);
	box2= new Box(750,310,20,130);
	box3= new Box(840,310,20,130);
	ball= new Ball(200,200,40);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink");
  rect(ground.position.x,ground.position.y, width,10);


  box2.display();
  box3.display();
  box1.display();
  ball.display();

  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


