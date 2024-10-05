export class Planet extends Phaser.GameObjects.Container {
  planetData;
  #x;
  #y;
  #planetSprite;
  /** @param {Phaser.Scene} scene */
  constructor(scene, x, y, planetSprite, planetData, planetName) {
    // Added planetName parameter
    super(scene, x, y);
    this.planetData = planetData;

    // Add the spaceship to the scene
    // Add the planet to the scene
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this); // Enable physics body for planets
    this.body.setSize(1000, 1000); // Make sure the body size matches the ship's visual size
    this.body.setOffset(-500, -500); // Center the body relative to the sprite

    this.body.setCollideWorldBounds(true); // Prevent going off screen
    this.body.setImmovable(true); // Set immovable since planet should not move
    this.setDepth(1); // Ensure it renders above the stars background
    // Create the sprites
    this.#planetSprite = scene.add.sprite(this.#x, this.#y, planetSprite);
    // Add sprites and text to the container
    this.add([this.#planetSprite]); // Added text to the container
  }
}
