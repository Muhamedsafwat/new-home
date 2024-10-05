export class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  preload() {
    this.load.image("startBackground", "assets/images/start-background.jpg");
    // this.load.audio('clickSound', 'assets/audio/click.mp3'); // click sound
  }

  create() {
    //  background image
    const background = this.add.image(0, 0, "startBackground");
    background.setOrigin(0, 0);
    background.setScale(
      this.scale.width / background.width,
      this.scale.height / background.height
    );

    // game name
    this.add
      .text(this.scale.width / 2, this.scale.height - 300, "A NEW HOME", {
        font: "80px SupremeSpike",
      })
      .setOrigin(0.5);

    const pressSpaceText = this.add
      .text(
        this.scale.width / 2,
        this.scale.height - 200,
        "Press Space to start",
        {
          font: "28px",
        }
      )
      .setOrigin(0.5);

    this.tweens.add({
      targets: pressSpaceText,
      alpha: { from: 1, to: 0 }, // Animate opacity from 1 to 0
      duration: 1500, // Duration of each fade (1 second)
      yoyo: true, // Revert the animation (fade back to 1)
      repeat: -1, // Repeat indefinitely
    });

    // Detecting the spacebar press
    this.input.keyboard.on("keydown-SPACE", () => {
      // Move to the next scene, for example, 'GameScene'
      this.scene.start("VideoScene");
    });
  }
}
