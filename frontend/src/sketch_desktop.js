export default function sketchDesktop (p) {

  let centerX = 0.0, centerY = 0.0;

  let radius = 45, rotAngle = -90;
  let accelX = 0.0, accelY = 0.0;
  let deltaX = 0.0, deltaY = 0.0;
  let springing = 0.0009, damping = 0.98;

  //corner nodes
  let nodes = 5;

  //zero fill arrays
  let nodeStartX = [];
  let nodeStartY = [];
  let nodeX = [];
  let nodeY = [];
  let angle = [];
  let frequency = [];

  // soft-body dynamics
  let organicConstant = 1.0;

  p.setup = function () {
    p.createCanvas(400, 400);

    //center shape in window
    centerX = p.width/2;
    centerY = p.height/2;

    //initialize arrays to 0
    for (var i=0; i<nodes; i++){
      nodeStartX[i] = 0;
      nodeStartY[i] = 0;
      nodeY[i] = 0;
      nodeY[i] = 0;
      angle[i] = 0;
    }

    // iniitalize frequencies for corner nodes
    for (var i=0; i<nodes; i++){
      frequency[i] = p.random(5, 12);
    }

    p.noStroke();
    p.frameRate(30);
  };

  p.draw = function () {
    //fade background
    p.fill(0, 100);
    p.rect(0,0,p.width, p.height);
    p.drawShape();
    p.moveShape();
  };

  p.drawShape = function() {
    //  calculate node  starting locations
    for (var i=0; i<nodes; i++){
      nodeStartX[i] = centerX+p.cos(p.radians(rotAngle))*radius;
      nodeStartY[i] = centerY+p.sin(p.radians(rotAngle))*radius;
      rotAngle += 360.0/nodes;
    }

    // draw polygon
    p.curveTightness(organicConstant);
    p.fill(255);
    p.beginShape();
    for (var i=0; i<nodes; i++){
      p.curveVertex(nodeX[i], nodeY[i]);
    }
    for (var i=0; i<nodes-1; i++){
      p.curveVertex(nodeX[i], nodeY[i]);
    }
    p.endShape(p.CLOSE);
  };

  p.moveShape = function() {
    //move center point
    deltaX = p.mouseX-centerX;
    deltaY = p.mouseY-centerY;

    // create springing effect
    deltaX *= springing;
    deltaY *= springing;
    accelX += deltaX;
    accelY += deltaY;

    // move predator's center
    centerX += accelX;
    centerY += accelY;

    // slow down springing
    accelX *= damping;
    accelY *= damping;

    // change curve tightness
    organicConstant = 1-((p.abs(accelX)+p.abs(accelY))*0.1);

    //move nodes
    for (var i=0; i<nodes; i++){
      nodeX[i] = nodeStartX[i]+p.sin(p.radians(angle[i]))*(accelX*2);
      nodeY[i] = nodeStartY[i]+p.sin(p.radians(angle[i]))*(accelY*2);
      angle[i] += frequency[i];
    }
  };
};
