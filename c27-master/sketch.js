const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,holder,ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,250,50,50);
    holder = new Ground(200,100,200,20);

    ground = new Ground(200,330,400,20);

    var options = {
        bodyA : ball,
        bodyB : holder,
        stiffness:0.004,
        length : 100
    }

    var string = Constraint.create(options);
    World.add(world, string);

    fill("white");
    
}



function draw(){
   background(0);
    
    Engine.update(engine);

   
    strokeWeight(8);
stroke("white");
line(ball.pos.x,ball.pos.y,holder.position.x,holder.position.y);

ball.display();
holder.display();
ground.display();

}


if (keyCode === 32){
  ball.position.x = mouseX;  
  ball.position.y = mouseY;
}
else if(keyCode === ENTER){
ball.position.x = 200;
}


