class Sling {
  constructor(body, anchor) {
    var options = { bodyA: body, pointB: anchor, stiffness: 0.004, length: 10 };

    this.bodyA = body;
    this.pointB = anchor;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  
     attach(body) {
       this.launcher.bodyB = body;
     }
    
     fly() {
       this.launcher.bodyB = null;
     }

  

   display() {
    if (this.sling.bodyA) {
      var pointA = this.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
