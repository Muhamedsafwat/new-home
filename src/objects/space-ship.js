export class SpaceShip extends Phaser.GameObjects.Container {
  #shipSprite;
  #shipEngineSprite;
  #shipEngineThrusterSprite;

  /** @param {Phaser.Scene} scene */
  constructor(scene) {
    super(scene, scene.scale.width / 2, scene.scale.height - 64, []);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setSize(64, 64);
    this.body.setOffset(-32, -32);
    this.body.setCollideWorldBounds(true);
    this.setDepth(2);

    this.#shipSprite = scene.add.sprite(0, 0, "ship").setScale(2);
    this.#shipEngineSprite = scene.add.sprite(0, 0, "ship_engine").setScale(2);
    this.#shipEngineThrusterSprite = scene.add.sprite(
      0,
      0,
      "ship_engine_thruster"
    ).setScale(2);
    this.#shipEngineThrusterSprite.play("ship_engine_thruster");
    this.add([
      this.#shipEngineThrusterSprite,
      this.#shipEngineSprite,
      this.#shipSprite,
    ]);
  }
}
