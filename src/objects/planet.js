export class Planet extends Phaser.GameObjects.Container {
  #x;
  #y;
  #planetSprite;

  /** @param {Phaser.Scene} scene */
  constructor(scene, x, y, planetSprite) {
    super(scene, x, y);

    // Add the spaceship to the scene
    this.scene.add.existing(this);
    this.setDepth(3); // Ensure it renders above the stars background

    // Create the sprites
    this.#planetSprite = scene.add.sprite(this.#x, this.#y, planetSprite);

    // Add sprites to the container
    this.add([this.#planetSprite]);
  }
}
