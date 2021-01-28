class Dustbin{
    constructor (x,y,width,height){
    
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle (x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbinimage.png");
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
  image(this.image,0, 0, this.width, this.height);
    pop();
  }
};