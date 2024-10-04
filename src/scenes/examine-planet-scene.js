import Phaser from "../lib/phaser.js"
import { TextPanel } from "../components/text-panel.js";
import { Tablet } from "../components/tablet.js";
export class ExaminePlanet extends Phaser.Scene {
    #timesClicked = 0
    #textPanel;
    #textArray;
    #tablet;
    constructor() {
      super('ExaminePlanet');
      this.#textArray = [`ها قد وصلنا الي وجهتنا بنجاح الي هذا الكوكب الرائع`, "نحتاج اولا استكشاف خواص هذا الكوكب لمعرفة ما اذا كان مناسب للحياة", "هيا بنا نستكشف خواص هذا الكوكب" ];
    }
  
    preload() {
      this.load.image('exoplanet', 'assets/images/exoplanet.jpg');
      this.load.image('text-panel', 'assets/images/ui/text-panel.png');
      this.load.image('character', "assets/images/characters/astronaut-cutscenes.png")
      this.load.image('tablet', 'assets/images/tablet.png');
    }
  
    create() {
        //add background image
      const background = this.add.image(0, 0, 'exoplanet');
      background.setOrigin(0, 0);
      background.setDisplaySize(this.scale.width, this.scale.height);
      //create text panel
      this.#textPanel = new TextPanel(this, this.#textArray)
      this.add.existing(this.#textPanel);
      this.#textPanel.setPosition((this.scale.width / 2) - 200, this.scale.height - 180); // Adjust position as needed
      //add event listener to switch between different objects when finishing the text
      this.input.keyboard.on('keydown-SPACE', this.handleSpacePress.bind(this)); // Moved here

      //create tablet instance 
      this.#tablet = new Tablet(this, "tablet");
     
      this.#tablet.setPosition((this.scale.width / 2) - 100, this.scale.height / 2); // Adjust position as needed
    }
    // New method to handle space key press
    handleSpacePress() {
        // Logic to execute when space is pressed
       if (this.#timesClicked >= this.#textArray.length - 1) { 
        this.add.existing(this.#tablet);
       } else {
        this.#timesClicked++;
       }
    }
  }
