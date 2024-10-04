import Phaser from "../lib/phaser.js";
import { TextPanel } from "../components/text-panel.js";
export class LifeStandardsScene extends Phaser.Scene {
  #timesClicked = 0;
  #textPanel;
  #textArray;
  constructor() {
    super("LifeStandardsScene");
    this.#textArray = [
      `و بما ان الماء لا غني عنه باعتباره المكون الاساسي للحياه بالنسبه لجميع الكائناات الحيه فاكيد وجوده ضروري علي الكوكب اللي بندور عليه (المنشود) وجوده بيتطلب توازن بين الغلاف الجوي و درجة الحراره للحفاظ عليه ف الحاله السائله و بالتالي تجنب  تبخره او حدوث تجمد مفرط ليه`,
      "الغلاف الجوي المحيط بالكوكب له مهام عديده حيث يساعد في تنظيم درجة الحراره  وبيحمي الكوكب من الاشعاعات الكونيه الضاره ,يساعد في الحفاظ علي المائل في الحاله السائله ,بالاضافه الي ان الغازات المكونه للغلاف الجوي علي دعم العمليات الحيويه مثل التنفس  و تكوين الماء",
      "اذا كانت الكتله كافيه فانها ستولد جاذبيه قويه ,تلك الجاذبيه يجب ان تكون كافيه للحفاظ علي الغلاف الجوي لانها اذاا كانت ضعيفه سيؤدي ذلك لتشتت الغلاف الجوي في الفضاء و اذا كانت قويه فوق المطلوب فسيؤدي ذلك الي ضغط في الجاذبيه يصعب الحياه علي الكائات الحيه",
      "المناخ المستقر و درجات الحرارة المعتدلة ضرورية للحياة. التذبذب الكبير في درجات الحرارة بين الليل والنهار أو بين الفصول قد يجعل الحياة صعبة أو مستحيلة. في حالة الكوكب المقيد مداريًا (حيث يواجه جانب واحد النجم دائمًا)، سيعاني الكوكب من مشكلتين: الجانب النهاري سيصبح شديد الحرارة، بينما الجانب الليلي سيكون باردًا جدًا. هذا التفاوت يجعل السكن صعبًا إلا في المناطق القريبة من الحد الفاصل بين الليل والنهار. كما يجب أن يكون الغلاف الجوي كثيفًا لينقل الحرارة بين الجانبين لتقليل هذا التفاوت.",
    ];
  }

  preload() {
    this.load.image("lab", "assets/images/lab.jpg");
    this.load.image("text-panel", "assets/images/ui/text-panel.png");
    this.load.image(
      "character",
      "assets/images/characters/astronaut-cutscenes.png"
    );
  }

  create() {
    //add background image
    const background = this.add.image(0, 0, "lab");
    background.setOrigin(0, 0);
    background.setDisplaySize(this.scale.width, this.scale.height);
    this.#textPanel = new TextPanel(this, this.#textArray);
    this.add.existing(this.#textPanel);
    this.#textPanel.setPosition(
      this.scale.width / 2 - 200,
      this.scale.height - 180
    ); // Adjust position as needed
    //add event listener to switch between different objects when finishing the text
    this.input.keyboard.on("keydown-SPACE", this.handleSpacePress.bind(this)); // Moved here
  }

  handleSpacePress() {
    // Logic to execute when space is pressed
    if (this.#timesClicked >= this.#textArray.length - 1) {
      this.scene.start("ExplorationSceneq");
    } else {
      this.#timesClicked++;
    }
  }
}
