class Rope {
    constructor(body1,body2,offsetX,offsetY) {
var options = {
    bodyA : body1 , 
    bodyB : body2 ,
    pointB:{x:this.offsetX,y:this.offsetY},
    stiffness :0.04 ,
    length : 10



}
this.rope = Matter.Constraint.create (options)
World.add (world,this.rope)
}
display() {
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
line(pointB.x,pointB.y);    
}
}