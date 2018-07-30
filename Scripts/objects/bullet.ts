//Author’s name--- Ishratben Vahora
//Student Number-- 300986257
 //Last Modified by Ishratben Vahora
 //Date last Modified -- 2018-07-30
module objects{
  export class Bullet extends objects.GameObject{
    

    constructor(){
      super("Bullet");
      this.Start();
    }

    public Start():void{
      this._dx=0;
      this._dy=-10;
      this.Reset();

    }

    public Update():void{
      this.y += this._dy;
      this.CheckBounds();
    }
    public Reset():void{
      this.x=-5000;
      this.y= -5000;
      
    }
    public Maint():void{
      
    }
    public CheckBounds():void{
      if(this.y <= -this.height){
        this.Reset();
      }
    }
  }
}