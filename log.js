class Log {
    constructor(x, y, h, ang){
        var options= {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, h, options)
        this.width = 20
        this.height = h
        Matter.Body.setAngle(this.body, ang)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        var ang = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(ang)
        fill('peach')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop()
    }
}