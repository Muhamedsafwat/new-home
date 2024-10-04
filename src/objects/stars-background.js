export class StarsBackground extends Phaser.GameObjects.Container {
  starsCountdown;
  starsGroup;
  parallaxFactor = 0.2; // Factor to make stars move slower than the spaceship

  /** @param {Phaser.Scene} scene */
  constructor(scene) {
    super(scene);
    this.starsCountdown = 0;
    /** @type {Phaser.GameObjects.Group} */
    this.starsGroup = this.scene.add.group();
  }

  // Update method that accepts spaceship velocity for parallax effect
  backgroundObjsUpdate(spaceshipVelocity) {
    // update background objects
    this.starsGroup.getChildren().forEach((star) => {
      /** @type {Phaser.GameObjects.Image} */

      // @ts-ignore
      const starObj = star; // Cast to Image or Sprite
      if (starObj.active) {
        // Move stars in the opposite direction of the spaceship's movement, slower by the parallax factor
        starObj.y -= spaceshipVelocity.y * this.parallaxFactor;
        starObj.x -= spaceshipVelocity.x * this.parallaxFactor;

        // Remove stars when they reach top of screen
        if (starObj.y < -64 || starObj.y > this.scene.scale.height + 64 || starObj.x < -64 || starObj.x > this.scene.scale.width + 64) {
          starObj.setActive(false).setVisible(false); // Phaser 3 method to "kill"
        }
      }
    });

    // Add more stars
    this.starsCountdown -= 1;
    if (this.starsCountdown <= 0) {
      // add random background object
      var x = Phaser.Math.Between(0, this.scene.scale.width - 32);
      var y = Phaser.Math.Between(0, this.scene.scale.height);
      // recycle old background objects
      var newobj = this.starsGroup.getFirstDead(false);

      // if there aren't any available, create a new one
      if (!newobj) {
        newobj = this.scene.add.image(x, y, "staralpha");
        this.starsGroup.add(newobj);
      } else {
        newobj.setPosition(x, y);
        newobj.setActive(true).setVisible(true);
      }

      var scale = Phaser.Math.FloatBetween(0.2, 0.6);
      newobj.setScale(scale);
      newobj.health = scale; // for sorting

      // random countdown to new background object
      this.starsCountdown = Phaser.Math.Between(15, 40);
    }
  }
}
