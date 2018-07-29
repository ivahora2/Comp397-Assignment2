namespace objects {
    export class Bullet extends objects.GameObject {
      // member variables
     
      private _horizontalSpeed: number;
      private _player:objects.Player;
  
      /**
       * Creates an instance of Cloud.
       * @memberof Cloud
       */
      constructor() {
        super("Bullet");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.x > config.Screen.WIDTH ) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        
        this.Reset();
      }
  
      public Update(): void {
        
        this.x -= this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
      
        this._horizontalSpeed = Math.floor((Math.random() * 5) +1); // between -2 and 2 ppf
        this.x = config.Screen.WIDTH;
        this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
      }
    }
  }
  