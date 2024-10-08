export class StarsBackground extends Phaser.GameObjects.Container {
  starsCountdown;
  starsGroup;

  /** @param {Phaser.Scene} scene */
  constructor(scene) {
      super(scene);
      this.starsCountdown = 0;
      /** @type {Phaser.GameObjects.Group} */
      this.starsGroup = this.scene.add.group();
  }

  backgroundObjsUpdate() {
      // update background objects
      this.starsGroup.getChildren().forEach((star) => {
        /** @type {Phaser.GameObjects.Image}*/
          // @ts-ignore
          const starObj = star ; // Cast to Image or Sprite
          if (starObj.active) {
              // stars move faster in foreground than in background layer
              starObj.y -= starObj.scaleY * 1.2; // *2 = all stars move faster

              // remove stars when they reach top of screen
              if (starObj.y < -64) {
                  starObj.setActive(false).setVisible(false); // Phaser 3 method to "kill"
              }
          }
      });

      // add more stars?
      this.starsCountdown -= 1;
      if (this.starsCountdown <= 0) {
          // add random background object
          var x = Phaser.Math.Between(0, this.scene.scale.width );
          var y = Phaser.Math.Between(0, this.scene.scale.height);
          // recycle old background objects
          var newobj = this.starsGroup.getFirstDead(false);

          // if there aren't any available, create a new one
          if (!newobj) {
              newobj = this.scene.add.image(x, y, 'staralpha');
              this.starsGroup.add(newobj);
          } else {
              newobj.setPosition(x, y);
              newobj.setActive(true).setVisible(true);
          }

          var scale = Phaser.Math.FloatBetween(0.2, 0.6);
          newobj.setScale(scale);
          newobj.health = scale; // for sorting

          // random countdown to new background object
          this.starsCountdown = Phaser.Math.Between(15, 20);
      }
  }
}
