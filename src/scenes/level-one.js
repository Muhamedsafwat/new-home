//import { drawFullWidthBox } from '../utils.js';

export class LevelOneScene extends Phaser.Scene {
  constructor() {
    super("LevelOneScene");
    this.currentTextIndex = 0;
    this.textArray = [
      "Press SPACE to change this text!",
      "في عام 2050، قد يحدث شيء مدهش، ولكنه أيضًا مخيف. إذا لم نعتنِ بكوكب الأرض، يمكن أن يتغير  كل شيء. دعوني أخبركم عن الأسباب التى قد توئدى لدمار الارض",
      "تغير المناخ. عندما يزداد الدفء في الأرض بسبب انبعاثات الغازات، يصبح الجو حارًا جدًا. يذوب الثلج في القطبين، وتختفي الأنهار",
      "التلوث. تلوث الهواء والماء يعني أن الأشياء التي نستخدمها أحيانًا تضر بيئتنا. إذا لم نكن حذرين، سنستيقظ يومًا ما في كوكب ملوث، حيث لا نستطيع اللعب في الهواء النقي",
      "النمو السكاني. عندما يصبح عدد الناس كبيرًا جدًا، نحتاج إلى المزيد من الطعام والماء. هذا الضغط يمكن أن يؤدي إلى استنزاف موارد الأرض بشكل مفرط",
    ];

    this.translationArray = [
      "اضغط SPACE لتغيير هذا النص!",
      "In 2050, something amazing might happen, but it is also scary. If we do not take care of the planet, everything can change. Let me tell you about the reasons that may lead to the destruction of the Earth.",
      "Climate change. When the Earth warms due to gas emissions, it becomes too hot. Ice melts at the poles, and rivers disappear.",
      "Pollution. Air and water pollution means that things we sometimes use harm our environment. If we’re not careful, we might wake up one day on a polluted planet where we can’t play in fresh air.",
      "Population growth. When the number of people becomes too large, we need more food and water. This pressure can lead to excessive depletion of Earth’s resources.",
    ];
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
          font: "24px Arial",
          // @ts-ignore
          fill: "#000000",
          padding: {
            left: 10,
            right: 10,
            top: 5,
            bottom: 5,
          },
          wordWrap: {
            width: boxWidth - 20,
            useAdvancedWrap: true,
          },
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
    //  this.sound.play("clickSound"); // Play click sound when the text box is clicked
    const translation = this.translationArray[this.currentTextIndex];
    this.changeText(translation);
  }
}
