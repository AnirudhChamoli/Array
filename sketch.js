var num = 20;
console.log(num);

var name = "Anirudh";
console.log(name);

var bool = true;
console.log(bool);

var object;
console.log(object);

object = null;
console.log(null);

var arr1 = [10,20,30,40,50];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[4]);

var arr2 = [11, "Hello", false, num, name];
console.log(arr2);

var arr3 = [[2,4,6,8], [1,3,5,7,9], [10,20,30,40]]
console.log(arr3);
console.log(arr3[1][3]);

arr2.push(40);
console.log(arr2);

arr1.pop();
console.log(arr1);

var Gamestate = "Start"

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}


function mouseDragged(){
    if (Gamestate === "Start")
    {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    Gamestate = "Launched"
}

function keyPressed()
{
    if (keyCode === 32){
      //  slingshot.return(bird.body);
    }
}