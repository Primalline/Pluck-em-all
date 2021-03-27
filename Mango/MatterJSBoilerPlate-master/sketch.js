const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImage = loadImage("Images/boyy.jpg");
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 495);

    boy = new Boy(220, 444, 170, 188);

	mango1 = new Mango(550, 250);
    mango2 = new Mango(650, 250);
    mango3 = new Mango(600, 100);
    mango4 = new Mango(700, 170);
    mango5 = new Mango(720, 250);

	tree = new Tree(100, 590);

    rock = new Rock(175, 395, 20, 20);

    launcher = new Launcher(rock.body, {x:175, y:408});

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(200);
  	Engine.update(engine);
	
    tree.display();
	ground.display();

	mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();

    boy.display();

    rock.display();

    launcher.display();

  	drawSprites();
 
}

function detectCollision(Rock, Mango){
	mangoBodyPosition = Mango.body.position;
    rockBodyPosition = Rock.body.position;

    var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, rockBodyPosition.x, rockBodyPosition.y);
    if(distance <= Mango.r - Rock.r){
        Matter.Body.setStatic(Mango.body,false);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}