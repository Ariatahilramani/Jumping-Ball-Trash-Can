class Ball {
    constructor(x, y, radius) {
        var ball_options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1,
         }
      
      this.ball = Bodies.circle(x, y, radius, ball_options);
      this.image=loadImage("paper.png")
      this.radius=radius;
      World.add(world, this.ball);
      
    }
    display(){
     
      imageMode(CENTER);
      
      image(this.image,this.ball.position.x,this.ball.position.y,this.radius,this.radius);
      
    }
    
}
