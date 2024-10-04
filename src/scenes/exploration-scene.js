import { SpaceShip } from "../objects/space-ship.js";
import { StarsBackground } from "../objects/stars-background.js";

export class ExplorationScene extends Phaser.Scene {
  /** @type {StarsBackground}*/
  starsBackground;
  constructor() {
    super("ExplorationScene");
  }

  preload() {
    this.load.pack("asset_pack", "assets/data/assets.json");
    this.load.image("staralpha", "assets/images/staralpha.png");
  }

  create() {
    this.starsBackground = new StarsBackground(this);
    const spaceShip = new SpaceShip(this);
  }

  update() {
    this.starsBackground.backgroundObjsUpdate();
  }
}
