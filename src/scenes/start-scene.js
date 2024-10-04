export class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  preload() {
    this.load.image("startBackground", "assets/images/piiixl/earth.png");
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

    const menuBackground = this.add.graphics();
    menuBackground.fillStyle(0x000000, 0.5);

    const menuWidth = 320;
    const menuHeight = 180;

    const menuX = (this.scale.width - menuWidth) / 2;
    const menuY = 180;
    menuBackground.fillRect(menuX, menuY, menuWidth, menuHeight);

    // Add login text
    this.add
      .text(this.scale.width / 2, menuY + 30, "Enter your name", {
        font: "24px Arial",
        // fill: "#ffffff",
      })
      .setOrigin(0.5);

    // Create username input
    const usernameInput = this.add.dom(this.scale.width / 2, menuY + 80)
      .createFromHTML(`
        <input type="text" id="username" name="username" placeholder="Username" style="width: 100%; max-width: 300px; padding: 10px;">
      `);

    // Create login button
    const loginButton = this.add.dom(this.scale.width / 2, menuY + 130)
      .createFromHTML(`
        <button id="loginBtn" style="width: 100%; max-width: 300px; padding: 10px 20px; font-size: 18px;">Play</button>
      `);

    // Set up event listener for the login button
    loginButton.addListener("click");
    loginButton.on("click", () => {
      // this.sound.play("clickSound"); //  click sound
      // @ts-ignore
      const username = document.getElementById("username").value;

      if (username) {
        console.log("Username:", username);
        // Switch to the VideoScene after login
        this.scene.start("VideoScene");
      } else {
        alert("Please enter your username");
      }
    });
  }
}
