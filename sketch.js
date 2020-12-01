const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot;

function setup(){
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(750,700,1500,50);
  ground2 = new Ground(500,450,300,15);
  ground3 = new Ground(1000,350,210,15);

  //'b'stands for brick 
  //level 1
  //bottom floor
  b1 = new Brick(395,417,35,50);
  b2 = new Brick(430,417,35,50);
  b3 = new Brick(465,417,35,50);
  b4 = new Brick(500,417,35,50);
  b5 = new Brick(535,417,35,50);
  b6 = new Brick(570,417,35,50);
  b7 = new Brick(605,417,35,50);

  //1st floor
  b8 = new Brick(430,367,35,50);
  b9 = new Brick(465,367,35,50);
  b10 = new Brick(500,367,35,50);
  b11 = new Brick(535,367,35,50);
  b12 = new Brick(570,367,35,50);

  //2nd floor
  b13 = new Brick(465,317,35,50);
  b14 = new Brick(500,317,35,50);
  b15 = new Brick(535,317,35,50);

  //3rd floor
  b16 = new Brick(500,267,35,50);

  //level 2
  //bottom floor
  b17 = new Brick(930,317,35,50);
  b18 = new Brick(965,317,35,50);
  b19 = new Brick(1000,317,35,50);
  b20 = new Brick(1035,317,35,50);
  b21 = new Brick(1070,317,35,50);

  //1st floor
  b22 = new Brick(965,267,35,50);
  b23 = new Brick(1000,267,35,50);
  b24 = new Brick(1035,267,35,50);

  //2nd floor
  b25 = new Brick(1000,217,35,50);

  polygon = new Polygon(150,300,30);

  slingShot = new SlingShot(polygon.body,{x: 170, y: 300});

}

function draw(){
  background(100,0,100);
  Engine.update(engine);

  textSize(25);
  fill(255,100,0);
  stroke(0,0,0);
  strokeWeight(3);
  text("Click on SpaceBar to make the Polygon come back",50 ,50);

  ground1.display();
  ground2.display();
  ground3.display();

  fill(255,0,100);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill(255,0,255);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  fill(255,100,100);
  b13.display();
  b14.display();
  b15.display();

  fill("white");
  b16.display();

  fill(0,100,255);
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  fill(100,100,255);
  b22.display();
  b23.display();
  b24.display();

  fill("white");
  b25.display();

  polygon.display();

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(polygon.body,{x:170, y:300});
    slingShot = new SlingShot(polygon.body,{x: 170, y: 300});
    slingShot.attach(polygon.body,{x: 170, y: 300});
  }
}