class Ground{
        constructor(){
            var options ={
           isStatic : true,
            }
            this.body = Bodies.rectangle(450,390,900,20,options)
            World.add(world,this.body)
    
        }
        display(){
        strokeWeight(2)
        fill("black")
        rectMode(CENTER)
        rectMode(this.ground.position.x,this.ground.position.y,900,20)
        }
    }