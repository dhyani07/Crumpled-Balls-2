
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject, dustbinobject, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinobject = new Dustbin (500,500,200,200);
	paperobject = new Paper (100,300,20);
	ground - new Ground (400,600,800,10);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  //ground.display();
  dustbinobject.display();
  paperobject.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:105,y:-100});
	}
}




