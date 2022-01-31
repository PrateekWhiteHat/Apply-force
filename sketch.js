
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
let engine;
let world;

var ball;
var ground;
var right;
var left;

function setup() 
{
 createCanvas(800, 800);

 engine = Engine.create();
 world = engine.world;

 var ground_options = {isStatic : true};
 ground = Bodies.rectangle(400,790,800,20,ground_options);
 World.add(world,ground);

 var left_options = {isStatic : true};
 left = Bodies.rectangle(570,730,20,100,left_options);
 World.add(world,left);

 var right_options = {isStatic : true};
 right = Bodies.rectangle(700,730,20,100,right_options);
 World.add(world,right);

 var ball_options = {isStatic : false , restitution : .3 , friction : 0, density :1.2};
 ball = Bodies.circle(100,10,20,ball_options);
 World.add(world,ball);

 rectMode(CENTER);
 ellipseMode(RADIUS);
}


function draw() 
{
 background(0);
 keyPressed();
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,15);
 rect(ground.position.x,ground.position.y,800,15)
 rect(left.position.x,left.position.y,20,100)
 rect(right.position.x,right.position.y,20,100)
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:2})
	}
}

