class Missile {
    constructor(x, y, w, h, angle) {
        var options={
            friction: 1.0,
            restitution: 0.8
        }
        this.width=w;
        this.height=h;
        this.image=loadImage("missile.png");
        this.launched=false;

        this.body=Bodies.rectangle(x, y, this.width, this.height, options);
        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);
    }

    display(angle) {
        var pos=this.body.position;
        var thisangle=this.body.angle;

        Matter.Body.setAngle(this.body, angle);

        push();
        translate(pos.x, pos.y);
        rotate(thisangle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    launch(launchangle) {
        this.launched=true;
        var velocity=p5.Vector.fromAngle(launchangle);
        velocity.mult(25);
        Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y});
    }
}