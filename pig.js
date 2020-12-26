class Pig {

    constructor(x, y) {
        var options= {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.circle(x, y, 35, options)
        this.radius = 35
        World.add(world, this.body)
    }
    display () {
        var pos = this.body.position
        var ang = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(ang)
        ellipseMode(RADIUS)
        fill('green')
        ellipse(0, 0, this.radius, this.radius)
        pop()
    }
}