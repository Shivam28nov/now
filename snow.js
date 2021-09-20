class Snow{
    constructor(x,y,width,r1,r2) {

        var options = {
            'restitution':1,
            'friction':0,
        }

        this.body = Bodies.circle(x, y,this.r1, options);
        this.r1 = r1;
        this.r2 = r2;
        World.add(world, this.body);

      }
      display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r1, this.r2);
        Matter.Body.setVelocity(this.body,{x:0.01,y:0.4})
        pop();
      }
  }