
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var base1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
	bob1 = new Bob(250,400,50,50);
	bob2 = new Bob1(300,400,50,50);
	bob3 = new Bob1(350,400,50,50);
	bob4 = new Bob1(400,400,50,50);
	bob5 = new Bob(450,400,50,50);
	// base1 = new Base(350,150,400,50);
	chain1 = new Chain(bob1.body,{x:250,y:200});
	chain2 = new Chain(bob2.body,{x:300,y:200});
	chain3 = new Chain(bob3.body,{x:350,y:200});
	chain4 = new Chain(bob4.body,{x:400,y:200});
	chain5 = new Chain(bob5.body,{x:450,y:200});
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
//   base1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
	Matter.Body.setStatic(bob1.body,false);
	Matter.Body.setStatic(bob2.body,false);
	Matter.Body.setStatic(bob3.body,false);
	Matter.Body.setStatic(bob4.body,false);
	Matter.Body.setStatic(bob5.body,false);
}


