import { SpaceShip } from "../objects/space-ship.js";
import { StarsBackground } from "../objects/stars-background.js";

export class ExplorationScene extends Phaser.Scene {
  /** @type {StarsBackground} */
  starsBackground;
  /** @type {SpaceShip} */
  spaceShip;

  constructor() {
    super("ExplorationScene");
  }

  preload() {
    this.load.pack("asset_pack", "assets/data/assets.json");
    this.load.image("staralpha", "assets/images/staralpha.png");
  }

  create() {
    // Create the stars background and spaceship objects
    this.starsBackground = new StarsBackground(this);
    this.spaceShip = new SpaceShip(this);
  }

  update() {
    // Get the spaceship's velocity and pass it to the background update method
    const spaceshipVelocity = this.spaceShip.getVelocity();
    this.starsBackground.backgroundObjsUpdate(spaceshipVelocity);

    // Update the spaceship
    this.spaceShip.update();
  }
}
