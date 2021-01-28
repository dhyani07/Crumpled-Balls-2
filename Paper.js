class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':1.5,
          'density': 2.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image=loadImage("paperimage.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      //ellipseMode(RADIUS);
      //ellipse(0, 0, this.radius, this.radius);
    image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };