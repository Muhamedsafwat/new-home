import Phaser from '../lib/phaser.js';

//takes an array of strings and switches between them when player presses space
export class PlanetChoiceCard extends Phaser.GameObjects.Container {
   #image
   #text;
   #imageKey;
   #textObject
   testResult

    constructor(scene, text, imageKey,testResult) {
        super(scene, 0, 0);  // Call super with initial x and y coordinates
        this.#text = text;
        this.#imageKey = imageKey;
        this.testResult = testResult;
        this.create();  // Call create in the constructor

       
    }

    create() {
        // Add text panel image
        this.#image = this.scene.add.image(100, 0, this.#imageKey);
        this.#image.setOrigin(0.5);
        this.#image.setDisplaySize(
            this.scene.scale.width / 7,
            this.scene.scale.height * 0.3
        );
        this.add(this.#image);  // Add panel to the container
       
        // Add text inside the panel
        this.#textObject = this.scene.add.text(
            this.#image.x - 55,  // Adjusted to start from the left side of the panel
            this.#image.y + 150,  // Adjusted to start from the left side of the panel
            this.#text,
            {
                font: '27px Handjet',
                color: '#fff',  // Changed 'fill' to 'color' as per Phaser's documentation
            }
        );
        this.#textObject.setOrigin(0);
        this.add(this.#textObject);  // Add text to the container

        // Set the size of the container to make it interactive
        this.setSize(this.scene.scale.width / 5 , 200);  // Set size based on the image dimensions

        // Set the container as interactive
        this.setInteractive();

        // Add event listeners for hover effects
        this.on('pointerover', () => {
            this.scene.tweens.add({
                targets: [this.#image],  // Target both image and text
                scaleX: 0.26,  // Scale up the X axis
                scaleY: 0.26,  // Scale up the Y axis
                duration: 200,  // Duration of the animation in milliseconds
                ease: 'Power2',  // Easing function for smoothness
            });
        });

        this.on('pointerout', () => {
            this.scene.tweens.add({
                targets: [this.#image],  // Target both image and text
                scaleX: 0.23,  // Reset the X scale
                scaleY: 0.23,  // Reset the Y scale
                duration: 200,  // Duration of the animation in milliseconds
                ease: 'Power2',  // Easing function for smoothness
            });
        });
    }


    // New method to handle space key press
    
}
