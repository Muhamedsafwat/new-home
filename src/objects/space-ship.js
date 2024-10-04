export class SpaceShip extends Phaser.GameObjects.Container {
  #shipSprite;
  #shipEngineSprite;
  #shipEngineThrusterSprite;
  cursors;

  /** @param {Phaser.Scene} scene */
  constructor(scene) {
    super(scene, scene.scale.width / 2, scene.scale.height - 64, []);

    // Add the spaceship to the scene
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setSize(64, 64);
    this.body.setOffset(-32, -32);
    this.body.setCollideWorldBounds(false); // Disable world bounds
    this.setDepth(2);

    // Create the sprites
    this.#shipSprite = scene.add.sprite(0, 0, "ship").setScale(2);
    this.#shipEngineSprite = scene.add.sprite(0, 0, "ship_engine").setScale(2);
    this.#shipEngineThrusterSprite = scene.add
      .sprite(0, 0, "ship_engine_thruster")
      .setScale(2);
    this.#shipEngineThrusterSprite.play("ship_engine_thruster");

    // Add sprites to the container
    this.add([this.#shipEngineThrusterSprite, this.#shipEngineSprite, this.#shipSprite]);

    // Create keyboard cursors (arrow keys)
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 25;
    this.body.setVelocity(0); // Reset velocity

    // Handle input for movement and angle change
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-speed);
      this.setAngle(-90); // Face left
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(speed);
      this.setAngle(90); // Face right
    }

    if (this.cursors.up.isDown) {
      this.body.setVelocityY(-speed);
      this.setAngle(0); // Face up
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(speed);
      this.setAngle(180); // Face down
    }
  }

  // Function to retrieve the velocity of the spaceship
  getVelocity() {
    return this.body.velocity;
  }
}
