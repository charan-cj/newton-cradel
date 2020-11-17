class Bob extends BaseClass{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:1.5
        }
        super(x,y,width,height,options)
        this.image = loadImage("bob1.png");

    }
    display(){
        super.display();
    }
}