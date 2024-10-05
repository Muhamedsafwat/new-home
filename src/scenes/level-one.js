//import { drawFullWidthBox } from '../utils.js';

export class LevelOneScene extends Phaser.Scene {
  #lang;
  constructor() {
    super("LevelOneScene");
    this.currentTextIndex = 0;
    this.textArray = [
      "تعليمات اللعبة\n1- اضغط مسافة لمشاهدة المزيد\n2- اضغط على النص للاطلاع على الترجمة",
      "عام 2050، نتيجة كثرة الشماكل البيئية انقرضت عدد كبير من فصائل الحيوانات",
      "واصبحت حياة البشر نفسهم مهددة بالخطر"
    ];

    this.translationArray = [
      "Game Instructions\n1- Press SPACE to view more info\n2- Click on the text to view translation",
      "In 2050, due to numerous environmental problems, a large number of animal species became extinct.",
      "And human life itself became threatened with danger...",
    ];
    this.#lang = "ar";
  }

  preload() {
    // Load background images and sound files
    this.load.image(
      "levelOneBackground",
      "assets/images/piiixl/background.png"
    );
    this.load.image("textBoxBackground", "assets/images/piiixl/text-panel.png");
    this.load.image("cornerImage", "assets/images/piiixl/ast.png");
    //this.load.audio("clickSound", "assets/audio/click.mp3"); // Load the click sound
  }

  create() {
    const background = this.add.image(0, 0, "levelOneBackground");

    background.setOrigin(0, 0);
    background.setScale(
      this.scale.width / background.width,
      this.scale.height / background.height
    );

    const boxWidth = this.scale.width * 0.6;
    const boxHeight = 150;

    // Add the background image for the text box
    const textBoxBackground = this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      "textBoxBackground"
    );
    textBoxBackground.setOrigin(0.5);
    textBoxBackground.setDisplaySize(boxWidth, boxHeight);

    this.label = this.add
      .text(
        this.scale.width / 2,
        this.scale.height / 2 + 10,
        this.textArray[this.currentTextIndex],
        {
          font: "24px Handjet",
          // @ts-ignore
          fill: "#000000",
          padding: {
            left: 16,
            right: 16,
            top: 12,
            bottom: 12,
          },
          wordWrap: {
            width: boxWidth - 20,
            useAdvancedWrap: true,
          },
          align: "center",
          lineSpacing: 2,
        }
      )
      .setOrigin(0.5, 0.5);

    this.label.setY(this.scale.height / 2 + 10);

    // Add image
    const cornerImage = this.add.image(
      this.scale.width + 10,
      170,
      "cornerImage"
    );
    cornerImage.setOrigin(1, 0);
    cornerImage.setDisplaySize(350, 350);

    // Event listener for space key press
    this.input.keyboard.on("keydown-SPACE", this.handleSpacePress.bind(this));

    // Add event listener for mouse click on the text box
    textBoxBackground.setInteractive();
    textBoxBackground.on("pointerdown", this.handleTextBoxClick.bind(this));
  }

  changeText(newText) {
    this.label.setText(newText);
    this.label.setY(this.scale.height / 2 + 10);
  }

  handleSpacePress() {
    //this.sound.play("clickSound"); // Play click sound when SPACE is pressed
    this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
    this.changeText(this.textArray[this.currentTextIndex]);

    if (this.currentTextIndex === 0) {
      this.scene.start("LifeStandardsScene");
    }
  }

  handleTextBoxClick() {
    this.#lang = this.#lang == "ar" ? "en" : "ar";
    //  this.sound.play("clickSound"); // Play click sound when the text box is clicked
    const translation =
      this.#lang == "ar"
        ? this.textArray[this.currentTextIndex]
        : this.translationArray[this.currentTextIndex];
    this.changeText(translation);
  }
}
