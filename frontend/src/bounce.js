var circles;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var image_array;
var MARGIN = 40;
var circle_image;
function preload() {
	circle_image = loadImage("circle.png");
	c1 = loadImage("Asset_3.png");
	c2 = loadImage("Asset_4.png");
	c3 = loadImage("Asset_5.png");
	c4 = loadImage("Asset_6.png");
	c5 = loadImage("Asset_7.png");
	c6 = loadImage("Asset_8.png");
	c7 = loadImage("Asset_9.png");
	c8 = loadImage("Asset_10.png");
	image_array = [c1,c2];//,c3,c4,c5,c6,c7,c8];
}

function setup() {
  createCanvas(300,400);  
  
  circles = new Group();
  
  for(var i=0; i<image_array.length; i++)
  {
		var circle = createSprite(random(0,width),random(0,height));
		//circle.addAnimation("normal", circle_image,  circle_image);
		circle.addImage("normal", image_array[i]);
		circle.setCollider("circle", 0,0,30);
		circle.setSpeed(random(2,3), random(0, 360));

		//scale affects the size of the collider
		circle.scale = random(0.5, 1);
		//mass determines the force exchange in case of bounce
		circle.mass = circle.scale;
		//restitution is the dispersion of energy at each bounce
		//if = 1 the circles will bounce forever
		//if < 1 the circles will slow down
		//if > 1 the circles will accelerate until they glitch
		//circle.restitution = 0.9;
		circles.add(circle);
  }
}

function draw() {
  background(255,255,255);  
  
  //circles bounce against each others and against boxes
  circles.bounce(circles);
  
  //all sprites bounce at the screen edges
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x-20<0) {
    s.position.x = 20;
    s.velocity.x = abs(s.velocity.x);
  }
  
  if(s.position.x+20>width) {
    s.position.x = width-20;
    s.velocity.x = -abs(s.velocity.x);
    }
  
  if(s.position.y-20<0) {
    s.position.y = 20;
    s.velocity.y = abs(s.velocity.y);
  }
  
  if(s.position.y+20>height) {
    s.position.y = height-20;
    s.velocity.y = -abs(s.velocity.y);
    } 
  }
    
  drawSprites();
  
}