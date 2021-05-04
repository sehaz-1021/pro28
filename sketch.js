const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper, ground, leftSide, bottom, rightSide; 
function setup() {
    createCanvas(800, 700);
    

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(400,600,800,20);
    paper = new Paper(100,590,10);
    
    leftSide = new Dustbin(610,580,100,20);
    bottom = new Dustbin(550,540,20,100);
    rightSide = new Dustbin(670,540,20,100)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  
    
  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 15,y: -15})
    }
  }
