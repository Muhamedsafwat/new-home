import Phaser from "../lib/phaser.js";
import { TextPanel } from "../components/text-panel.js";
import { Tablet } from "../components/tablet.js";
export class ExaminePlanet extends Phaser.Scene {
  #planetData;
  #planetsData
  #timesClicked = 0;
  #textPanel;
  #textArray;
  #tablet;
  constructor(planetData) {
    super("ExaminePlanet");
    this.#textArray = [
      `ها قد وصلنا الي وجهتنا بنجاح الي هذا الكوكب الرائع`,
      "نحتاج اولا استكشاف خواص هذا الكوكب لمعرفة ما اذا كان مناسب للحياة",
      "هيا بنا نستكشف خواص هذا الكوكب",
    ];
    this.#planetData = planetData;
    this.#timesClicked = 0;
  }

  preload() {
    this.load.image("bg-1", `assets/images/planets/backgrounds/bg-1.jpg`);
    this.load.image("bg-2", `assets/images/planets/backgrounds/bg-2.jpg`);
    this.load.image("bg-3", `assets/images/planets/backgrounds/bg-3.jpg`);
    this.load.image("bg-4", `assets/images/planets/backgrounds/bg-4.jpg`);
    this.load.image("bg-5", `assets/images/planets/backgrounds/bg-5.jpg`);
    this.load.image("text-panel", "assets/images/ui/text-panel.png");
    this.load.image(
      "character",
      "assets/images/characters/astronaut-cutscenes.png"
    );
    this.load.image("tablet", "assets/images/tablet.png");
  }

  init(data) {
    console.log("zebi",data)
    this.#planetData = data.planetData;
    this.#planetsData = data.planetsData;
  }

  create() {
    //add background image
    const background = this.add.image(0, 0, this.#planetData.background);
    background.setOrigin(0, 0);
    background.setDisplaySize(this.scale.width, this.scale.height);
    //create text panel
    this.#textPanel = new TextPanel(this, this.#textArray);
    this.add.existing(this.#textPanel);
    this.#textPanel.setPosition(
      this.scale.width / 2 - 200,
      this.scale.height - 180
    ); // Adjust position as needed
    console.log("555",this.#planetsData)
    //create tablet instance
    console.log(this.#planetData)
    this.#tablet = new Tablet(this, "tablet", this.#planetData.properties,this.#planetsData);

    this.#tablet.setPosition(this.scale.width / 2 - 100, this.scale.height / 2); // Adjust position as needed

    // Add event listener for space key
    this.input.keyboard.on("keydown-SPACE", this.handleSpacePress.bind(this));
  }
  // New method to handle space key press
  handleSpacePress() {
    // Logic to execute when space is pressed
    if (this.#timesClicked >= this.#textArray.length - 1) {
      this.add.existing(this.#tablet);
      this.#timesClicked = 0;
    } else {
      this.#timesClicked++;
    }
  }
}
