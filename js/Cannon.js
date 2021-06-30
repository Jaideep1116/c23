class Cannon{
    constructor(x, y, width, height,angle) {
        var options = {
          isStatic: true
        };
        this.x=x;
        this.y=y;
        this.angle=angle;
        this.width = width;
        this.height = height;
       
      }
      display() {
        fill("#676e6a");  
        push();
        translate(this.x,this.y);
        rectMode(CENTER);
        rect(-10, -20, this.width, this.height);
        pop();
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI);
        noFill();
      }

}