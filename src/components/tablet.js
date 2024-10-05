import Phaser from "../lib/phaser.js";
import { TextPanel } from "../components/text-panel.js";

//takes an array of strings and switches between them when player presses space
export class Tablet extends Phaser.GameObjects.Container {
  #textPanel;
  #tabletImage;
  #imageKey;
  #properties;
  #planetsData
  
  constructor(scene, imageKey, properties,planetsData) {
    super(scene, 0, 0); // Call super with initial x and y coordinates
    this.#imageKey = imageKey;
    this.#properties = properties;
    this.#planetsData = planetsData;
    this.create(); // Call create in the constructor
  }

  create() {
    // Add text panel image
    this.#tabletImage = this.scene.add.image(100, 0, this.#imageKey);
    this.#tabletImage.setOrigin(0.5);
    this.#tabletImage.setDisplaySize(
      this.scene.scale.width / 2.7,
      this.scene.scale.height * 0.8
    );
    this.add(this.#tabletImage); // Add panel to the container
    // Set the size of the container to make it interactive
    this.setSize(this.scene.scale.width / 1.5, 200); // Set size based on the image dimensions

    this.#properties.forEach((property, index) => {
      const text = this.scene.add.text(
        this.#tabletImage.x - 150, // Adjusted to start from the left side of the image
        this.#tabletImage.y + index * 100 - 200, // Adjusted to start from the top of the image with spacing
        property.name,
        {
          font: "32px Handjet",
          color: "#000000", // Changed 'fill' to 'color' as per Phaser's documentation
          wordWrap: { width: this.#tabletImage.displayWidth * 0.8 },
        }
      );
      text.setOrigin(0);
      this.add(text); // Add text to the container

      // Add event listener for hover effect
      text.setInteractive(); // Enable interaction for the text
      text.on("pointerover", () => {
        this.scene.tweens.add({
          targets: text,
          scale: 1.1, // Scale up slightly
          duration: 200, // Duration of the animation in milliseconds
          ease: "Power2", // Easing function for smoothness
        });
      });

      text.on("pointerout", () => {
        this.scene.tweens.add({
          targets: text,
          scale: 1, // Reset scale
          duration: 200, // Duration of the animation in milliseconds
          ease: "Power2", // Easing function for smoothness
        });
      });

      // Add event listener for click effect
      text.on("pointerdown", () => {
        this.#textPanel = new TextPanel(this.scene, [
          `${property.name}: ${property.details}`,
        ]);
        this.scene.add.existing(this.#textPanel);
        this.#textPanel.setPosition(
          this.scene.scale.width / 2 - 200,
          this.scene.scale.height - 180
        ); // Adjust position as needed
        this.scene.input.keyboard.on("keydown-SPACE", () => {
          this.#textPanel.setVisible(false);
        }); // Moved here
      });
    });

    const text = this.scene.add.text(
      this.#tabletImage.x - 150, // Adjusted to start from the left side of the image
      this.#tabletImage.y + 4 * 100 - 200, // Adjusted to start from the top of the image with spacing
      "الرجوع الي السفينة",
      {
        font: "32px Handjet",
        color: "#000000", // Changed 'fill' to 'color' as per Phaser's documentation
        wordWrap: { width: this.#tabletImage.displayWidth * 0.8 },
      }
    );
    text.setOrigin(0);
    this.add(text); // Add text to the container

    // Add event listener for hover effect
    text.setInteractive(); // Enable interaction for the text
    text.on("pointerover", () => {
      this.scene.tweens.add({
        targets: text,
        scale: 1.1, // Scale up slightly
        duration: 200, // Duration of the animation in milliseconds
        ease: "Power2", // Easing function for smoothness
      });
    });

    text.on("pointerout", () => {
      this.scene.tweens.add({
        targets: text,
        scale: 1, // Reset scale
        duration: 200, // Duration of the animation in milliseconds
        ease: "Power2", // Easing function for smoothness
      });
    });

    // Add event listener for click effect
    text.on("pointerdown", () => {
      this.scene.scene.start("ExplorationScene",{planets:this.#planetsData}); // Change scene to ShipScene
    });
  }
  // New method to handle space key press
}
