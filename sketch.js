const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var bgColour = "#382C2C";

// ground, hexagon, & sling varibles and ground x, y, w, & h
var ground, floor, hexagon;
var groundX = 800, groundY = 500;
var groundW = 270, groundH = 15;

// blocks variables and width & height of blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block0;
var blockW = 45, blockH = 60;

// helps calculate x and y
var f = blockW/2;
var g = groundY - (blockH/2 + groundH/2);

// x and y of blocks
var xPos1 = groundX-f*3, xPos2 = groundX-f*2, xPos3 = groundX-f, xPos4 = groundX, xPos5 = groundX+f, xPos6 = groundX+f*2, xPos7 = groundX+f*3;
var yRow1 = g-blockH*3, yRow2 = g-blockH*2, yRow3 = g-blockH, yRow4 = g;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,800);
  stroke(255);
  
  //camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2);


  hexagon = new Hexagon(200,400,80,80);
  ground = new Ground(groundX, groundY, groundW, groundH);
  floor = new Ground(600,800,1200,20);
  sling = new Sling(hexagon.body, {x:300, y:300});

  block1 = new Block(xPos4, yRow1, blockW, blockH);

  block2 = new Block(xPos3, yRow2, blockW, blockH);
  block3 = new Block(xPos5, yRow2, blockW, blockH);

  block4 = new Block(xPos2, yRow3, blockW, blockH);
  block5 = new Block(xPos4, yRow3, blockW, blockH);
  block6 = new Block(xPos6, yRow3, blockW, blockH);

  block7 = new Block(xPos1, yRow4, blockW, blockH);
  block8 = new Block(xPos3, yRow4, blockW, blockH);
  block9 = new Block(xPos5, yRow4, blockW, blockH);
  block0 = new Block(xPos7, yRow4, blockW, blockH);

  Engine.run(engine);
}

function draw() {
  //camera.zoom=camera.zoom+1;
  background(bgColour);  
  
  Engine.update(engine);
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01;
  //camera.position={x:width/2,y:a};
 


  for (i=0;i<circles.length;i++)
  {
    fill(bgColour);
    noStroke();
	  circle(circles[i], height/2,20)
  }
  
  if(camera.position.x%width===0)
  {
	  circles.push(camera.position.x+width/2)
  }



  //camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);


  ground.display("darkred");
  floor.display("darkred");
  hexagon.display();
  sling.display();

  block1.display("blue");

  block2.display("teal");
  block3.display("teal");

  block4.display("aqua");
  block5.display("aqua");
  block6.display("aqua");

  block7.display("lightblue");
  block8.display("lightblue");
  block9.display("lightblue");
  block0.display("lightblue");

  //console.log(block1.body.position.y);

  drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged () {

  Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {

  sling.fly();
}