class Ball {
    constructor(x,y,width,height) {
      var options = {
        restitution : 1.0,
        density : 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(position.x, position.y, this.width, this.height);
    }
  };
