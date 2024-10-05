import Phaser from "../lib/phaser.js";
import { PlanetChoiceCard } from "../components/planet-choice-card.js";
import { TextPanel } from "../components/text-panel.js";
export class ChoosePlanetScene extends Phaser.Scene {
  #correctPlanet = "planet 2";
  #planets = [];
  #textPanel;
  constructor() {
    super("ChoosePlanetScene");
  }

  init(data) {
    this.#planets = data.planets;
  }
  preload() {
    this.load.image("text-panel", "assets/images/ui/text-panel.png");
    this.load.image(
      "character",
      "assets/images/characters/astronaut-cutscenes.png"
    );
    this.load.image("space-bg", "assets/images/choose-planet-bg.jpg");
    this.load.image("planet1", "assets/images/planets/planet1.png");
    this.load.image("planet2", "assets/images/planets/planet2.png");
    this.load.image("planet3", "assets/images/planets/planet3.png");
    this.load.image("planet4", "assets/images/planets/planet4.png");
    this.load.image("planet5", "assets/images/planets/planet5.png");
  }

  create() {
    //add background image
    const background = this.add.image(0, 0, "space-bg");
    background.setOrigin(0, 0);
    background.setDisplaySize(this.scale.width, this.scale.height);
    //add planets and text
    this.#planets.forEach((planet, index) => {
      planet = planet.planetData;
      const planetCard = new PlanetChoiceCard(this, planet.name, planet.key,planet.testResult);
      this.add.existing(planetCard);
      planetCard.setPosition(
        (this.scale.width / 5) * index + 100,
        this.scale.height / 2
      );
      //add event listener for planet card

      planetCard.setInteractive().on("pointerdown", () => {
        
          //create text panel
          this.#textPanel = new TextPanel(this, [planetCard.testResult]);
          this.add.existing(this.#textPanel);
          this.#textPanel.setPosition(
            this.scale.width / 2 - 200,
            this.scale.height - 180
          );
          // Add event listener for the Enter key
          this.input.keyboard.on("keydown-ENTER", () => {
            this.#textPanel.setVisible(false);
          });
         
        this.#textPanel.setVisible(true); // Make the text panel visible
      });
    });

    //add text
    const text = this.add.text(
      this.scale.width / 2,
      200,
      "After learning about the conditions suitable for life, which planet do you thing is the most hapitable",
      {
        font: "36px Handjet",
        color: "#fff",
        wordWrap: { width: this.scale.width * 0.6 },
        align: "center",
      }
    );
    text.setOrigin(0.5);
    text.setDepth(1); // make sure the text is always on top of the planets
  }
}
