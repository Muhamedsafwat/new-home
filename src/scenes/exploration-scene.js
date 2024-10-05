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
    this.planets = [];
  }

  init(data) {
    console.log(data)
    this.planets = data.planets ? data.planets : [];
  }
  preload() {
    this.load.pack("asset_pack", "assets/data/assets.json");
    this.load.image("staralpha", "assets/images/staralpha.png");
  }

  create() {
    console.log("Creating ExplorationScene");
    // Create the stars background and spaceship objects
    this.starsBackground = new StarsBackground(this);
    this.spaceShip = new SpaceShip(this);

    if (!this.planets.length){
      PLANETS_DATA.forEach((planet) => {
        const newPLanet = new Planet(
          this,
          planet.position.x,
          planet.position.y,
          planet.key,
          planet
        ).setScale(0.3);
        this.planets.push(newPLanet);

        // Add physics overlap check between spaceship and planet
        this.physics.add.overlap(
          this.spaceShip,
          newPLanet,
          this.handleOverlap,
          null,
          this
        );
      })}else{
        this.planets.forEach((planet) => {
          const newPLanet = new Planet(
            this,
            planet.planetData.position.x,
            planet.planetData.position.y,
            planet.planetData.key,
            planet
          ).setScale(0.3);
  
          // Add physics overlap check between spaceship and planet
          this.physics.add.overlap(
            this.spaceShip,
            newPLanet,
            this.handleOverlap,
            null,
            this
          );
        })
      };
  }

  handleOverlap(spaceShipGameObject, planetGameObject) {
    planetGameObject.planetData.isVisited = true;
    // @ts-ignore
    this.scene.start("ExaminePlanet", {
      planetData: planetGameObject.planetData.planetData?planetGameObject.planetData.planetData:planetGameObject.planetData,
      planetsData: this.planets,
    });
  }

  update() {
    // Get the spaceship's velocity and pass it to the background update method
    this.starsBackground.backgroundObjsUpdate();

    // Update the spaceship
    this.spaceShip.update();
  }
}
