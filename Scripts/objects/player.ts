namespace objects {
    export class Player extends objects.GameObject {
      
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
      }
  
      public Update(): void {
          this.y = managers.Game.Stage.mouseY;
          this._checkBounds();
      }
  
      public Reset(): void {}
    }
  }
  