class Mango{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Mango.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 35, 35);
        pop();
    }
}