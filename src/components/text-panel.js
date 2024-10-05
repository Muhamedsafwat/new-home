import Phaser from "../lib/phaser.js";

//takes an array of strings and switches between them when player presses space
export class TextPanel extends Phaser.GameObjects.Container {
  #panel;
  #textObject;
  #text;
  #character;
  #currentTextIndex = 0;

  constructor(scene, text) {
    super(scene, 0, 0); // Call super with initial x and y coordinates
    this.#text = text;
    this.create(); // Call create in the constructor

    // Add event listener for space key
    this.scene.input.keyboard.on(
      "keydown-SPACE",
      this.handleSpacePress.bind(this)
    );
  }

  create() {
    // Add text panel image
    this.#panel = this.scene.add.image(100, 0, "text-panel");
    this.#panel.setOrigin(0.5);
    this.#panel.setDisplaySize(
      this.scene.scale.width * 0.7,
      this.scene.scale.height * 0.3
    );
    this.add(this.#panel); // Add panel to the container
    // Position character image in the bottom right corner
    this.#character = this.scene.add.image(650, -450, "character");
    this.#character.setOrigin(0);
    this.#character.setDisplaySize(700, 700);
    this.#character.setFlipX(true);
    this.add(this.#character);
    // Add text inside the panel
    this.#textObject = this.scene.add.text(
      this.#panel.x - 550, // Adjusted to start from the left side of the panel
      this.#panel.y - 55, // Adjusted to start from the left side of the panel
      this.#text[this.#currentTextIndex],
      {
        font: "32px Handjet",
        color: "#000000", // Changed 'fill' to 'color' as per Phaser's documentation
        wordWrap: { width: this.#panel.displayWidth * 0.8 },
        align:"center",
        lineSpacing:2

      }
    );
    this.#textObject.setOrigin(0);
    this.add(this.#textObject); // Add text to the container
  }

  setText(newIndex) {
    if (this.#currentTextIndex >= this.#text.length - 1) {
      this.setVisible(false);
      return;
    }
    this.#currentTextIndex = newIndex;
    this.#textObject.setText(this.#text[this.#currentTextIndex], {
      font: "32px Handjet",
      color: "#000000", // Changed 'fill' to 'color' as per Phaser's documentation
      wordWrap: { width: this.#panel.displayWidth * 0.8 },
      align:"center",
      lineSpacing:2


    });
  }

  set text(newtext) {
    this.#text = newtext; // This sets the new text
    this.setText(0); // Reset text to the first element
  }

  // New method to handle space key press
  handleSpacePress() {
    // Logic to execute when space is pressed
    this.setText(this.#currentTextIndex + 1);
    // You can add more functionality here, like changing text or triggering an action
  }
}
