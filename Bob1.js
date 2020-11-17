class Bob1 extends BaseClass{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0
        }
        super(x,y,width,height,options)
        this.image = loadImage("bob1.png");

    }
    display(){
        super.display();
    }
}