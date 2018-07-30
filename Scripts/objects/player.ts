namespace objects {
    export class Player extends objects.GameObject {
      private _bulletSpawn:math.Vec2;
      /**
       * Creates an instance of Plane.
       * @memberof Plane
       */
      constructor() {
        super("player");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
          // check right boundary
          if(this.y > config.Screen.HEIGHT - this.halfHeight ) {
              this.y = config.Screen.HEIGHT - this.halfHeight;
          }
  
          // check left boundary
          if(this.y < this.halfHeight) {
              this.y = this.halfHeight;
          }
      }
  
      // public methods
      public Start(): void {
          this.regX = this.halfWidth;
          this.regY = this.halfHeight;
          this.x = 100;
          this._bulletSpawn = new math.Vec2();
      }
  
      public Update(): void {
          this.y = managers.Game.Stage.mouseY;
          this._checkBounds();
          this.BulletFire();
      }
  
      public Reset(): void {}
    
    public BulletFire():void{


        let ticker:number = createjs.Ticker.getTicks();

        
            if((ticker%10 ==0) && (managers.Game.keyboardManager.fire))
            {

            this._bulletSpawn=new math.Vec2(this.x ,this.y - this.height );
            let currentBullet = managers.Game.bulletManager.CurrentBullet;

            let bullet = managers.Game.bulletManager.Bullets[currentBullet];
            bullet.x = this._bulletSpawn.x;
            bullet.y = this._bulletSpawn.y;

            managers.Game.bulletManager.CurrentBullet++;

            if(managers.Game.bulletManager.CurrentBullet > 49){
                managers.Game.bulletManager.CurrentBullet = 0;
            }
            
            console.log("bulletFired");
            }
          

}
    }
  }
  