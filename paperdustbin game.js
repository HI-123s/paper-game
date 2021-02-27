class Paper{
    constructor(x,y)
    {
        var options = {
            'density':1.5,
            'friction':1,
            'resitution':0.5
        }
        this.body- Bodies.rectangle(x,y,15,15,options);
        this.width=15;
        this.height=15;
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }

    display(){
         var pos=this.body.position
         pos.x=mouseX;
         pos.y=mouseY;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        Pop();
    };  
};