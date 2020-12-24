var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var ground;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var i = 0; k <=width; i = i + 80) {
     divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
   }
  for (var i = 75; i <=width; i=i+50) 
    {
    plinkos.push(new Plinko(i,75));
    }
    for (var i = 50; i <=width; i=i+50) 
    {
    plinkos.push(new Plinko(i,175));
    }
    for (var i = 75; i <=width; i=i+50) 
    {
    plinkos.push(new Plinko(i,275));
    }
    for (var i = 50; i <=width; i=i+50) 
    {
    plinkos.push(new Plinko(j,375));
    }
  }
 


function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}