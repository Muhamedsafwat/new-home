import { PLANETS_DATA } from "../constants/index.js";
import { Planet } from "../objects/planet.js";
import { SpaceShip } from "../objects/space-ship.js";
import { StarsBackground } from "../objects/stars-background.js";

export class ExplorationScene extends Phaser.Scene {
  /** @type {StarsBackground} */
  starsBackground;
  /** @type {SpaceShip} */
  spaceShip;
  /** @type {Planet[]} */
  planets = [];

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

    PLANETS_DATA.forEach((planet) => {
      this.planets.push(
        new Planet(
          this,
          planet.position.x,
          planet.position.y,
          planet.name
        ).setScale(0.3)
      );
    });
  }

  update() {
    // Get the spaceship's velocity and pass it to the background update method
    this.starsBackground.backgroundObjsUpdate();

    // Update the spaceship
    this.spaceShip.update();
  }
}
