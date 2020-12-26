const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2, pig1, log1, log2, pig2, box3, box4, box5, log3, log4;

function setup(){
    var canvas = createCanvas(1525,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(762.5, 680, 1525, 40)
    box1 = new Box(1000,600,70,70);
    box2 = new Box(1200, 600, 70, 70)
    pig1 = new Pig(1100, 600)
    log1 = new Log(1100, 550, 270, PI/2)
    box3 = new Box(1000,500,70,70);
    box4 = new Box(1200, 500, 70, 70)
    pig2 = new Pig(1100, 500)
    log2 = new Log(1100, 450, 270, PI/2)
    box5 = new Box(1100, 400, 70, 70)
    log3 = new Log(1050, 350, 150, PI/4)
    log4 = new Log(1150, 350, 150, -PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}