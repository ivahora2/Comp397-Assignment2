module objects{
  export class Bullet extends objects.GameObject{
    

    constructor(){
      super("Bullet");
      this.Start();
    }

    public Start():void{
      this._dx=10;
      this._dy=0;

    }

    public Update():void{
      this.y += this._dx;
      this.CheckBounds();
    }
    public Reset():void{
      
    }
    public Maint():void{
      
    }
    public CheckBounds():void{
      if(this.x >= this.width){
        this.Reset();
      }
    }
  }
}