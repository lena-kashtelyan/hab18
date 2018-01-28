export default function sketchDesktop (p) {

  // let centerX = 0.0, centerY = 0.0;
  //
  // let radius = 45, rotAngle = -90;
  // let accelX = 0.0, accelY = 0.0;
  // let deltaX = 0.0, deltaY = 0.0;
  // let springing = 0.0009, damping = 0.98;
  //
  // //corner nodes
  // let nodes = 5;
  //
  // //zero fill arrays
  // let nodeStartX = [];
  // let nodeStartY = [];
  // let nodeX = [];
  // let nodeY = [];
  // let angle = [];
  // let frequency = [];
  //
  // // soft-body dynamics
  // let organicConstant = 1.0;
  //
  // p.setup = function () {
  //   p.createCanvas(400, 400);
  //
  //   //center shape in window
  //   centerX = p.width/2;
  //   centerY = p.height/2;
  //
  //   //initialize arrays to 0
  //   for (var i=0; i<nodes; i++){
  //     nodeStartX[i] = 0;
  //     nodeStartY[i] = 0;
  //     nodeY[i] = 0;
  //     nodeY[i] = 0;
  //     angle[i] = 0;
  //   }
  //
  //   // iniitalize frequencies for corner nodes
  //   for (var i=0; i<nodes; i++){
  //     frequency[i] = p.random(5, 12);
  //   }
  //
  //   p.noStroke();
  //   p.frameRate(30);
  // };
  //
  // p.draw = function () {
  //   //fade background
  //   p.fill(0, 100);
  //   p.rect(0,0,p.width, p.height);
  //   p.drawShape();
  //   p.moveShape();
  // };
  //
  // p.drawShape = function() {
  //   //  calculate node  starting locations
  //   for (var i=0; i<nodes; i++){
  //     nodeStartX[i] = centerX+p.cos(p.radians(rotAngle))*radius;
  //     nodeStartY[i] = centerY+p.sin(p.radians(rotAngle))*radius;
  //     rotAngle += 360.0/nodes;
  //   }
  //
  //   // draw polygon
  //   p.curveTightness(organicConstant);
  //   p.fill(255);
  //   p.beginShape();
  //   for (var i=0; i<nodes; i++){
  //     p.curveVertex(nodeX[i], nodeY[i]);
  //   }
  //   for (var i=0; i<nodes-1; i++){
  //     p.curveVertex(nodeX[i], nodeY[i]);
  //   }
  //   p.endShape(p.CLOSE);
  // };
  //
  // p.moveShape = function() {
  //   //move center point
  //   deltaX = p.mouseX-centerX;
  //   deltaY = p.mouseY-centerY;
  //
  //   // create springing effect
  //   deltaX *= springing;
  //   deltaY *= springing;
  //   accelX += deltaX;
  //   accelY += deltaY;
  //
  //   // move predator's center
  //   centerX += accelX;
  //   centerY += accelY;
  //
  //   // slow down springing
  //   accelX *= damping;
  //   accelY *= damping;
  //
  //   // change curve tightness
  //   organicConstant = 1-((p.abs(accelX)+p.abs(accelY))*0.1);
  //
  //   //move nodes
  //   for (var i=0; i<nodes; i++){
  //     nodeX[i] = nodeStartX[i]+p.sin(p.radians(angle[i]))*(accelX*2);
  //     nodeY[i] = nodeStartY[i]+p.sin(p.radians(angle[i]))*(accelY*2);
  //     angle[i] += frequency[i];
  //   }
  // };

  var x = 180;
  var y = 180;
  var xspeed = 4;
  var yspeed = 8;
  var c1;

  var circles = [];
  var images = [];

  p.setup = function() {
    p.createCanvas(300,420);
    p.background (25);
    // c1 = p.loadImage("assets/Asset3.png");
    // c2 = p.loadImage("assets/Asset4.png");
    // c3 = p.loadImage("assets/Asset5.png");
    // c4 = p.loadImage("assets/Asset6.png");
    // c5 = p.loadImage("assets/Asset7.png");
    // c6 = p.loadImage("assets/Asset8.png");
    // c7 = p.loadImage("assets/Asset9.png");
    // c8 = p.loadImage("assets/Asset10.png");
    images = [];//[c1,c2,c3,c4,c5,c6,c7,c8,c1,c2,c3,c4,c5,c6,c7,c8];
    for (var i = 0; i < 10; i++) {
      circles.push(new p.Ball(images[i]));
    }
  }

  p.draw = function() {

    p.clear();

    for (var i = 0; i < circles.length; i++) {
      circles[i].move();
      circles[i].display();
    }

  }

  p.Ball = function (img) {
    this.x = p.random(10,170);
    this.y = p.random(10,230);
    this.diameter = p.random(40,70);
    this.xspeed = p.random(1, 3);
    this.yspeed = p.random(1, 3);

    this.move = function() {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;

      if (this.x > 150|| this.x < 10)  {
        this.xspeed = -this.xspeed;
      }

      //bouncing veritcally
      this.y = this.y + this.yspeed;

      if (this.y > 200 || this.y < 10) {
        this.yspeed = -this.yspeed;
      }
    }

    this.display = function() {
      // image(img, this.x, this.y, this.diameter, this.diameter);
      p.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

};
