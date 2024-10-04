export class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  preload() {}

  create() {
    this.add
      .text(225, 100, "Login to Start", {
        font: "32px Arial",
        //fill: '#ffffff',
      })
      .setOrigin(0.5);

    const usernameInput = this.add.dom(225, 250).createFromHTML(`
        <input type="text" id="name" name="name" placeholder="Your Name" style="width: 200px; padding: 10px;">
      `);

    const loginButton = this.add.dom(225, 320).createFromHTML(`
        <button id="loginBtn" style="padding: 10px 20px; font-size: 18px;">Start Game</button>
      `);

    loginButton.addListener("click");
    loginButton.on("click", () => {
      // const name = document.getElementById('name').value;
      const name = "";

      if (name) {
        console.log("name:", name);

        // Switch to the VideoScene after login
        this.scene.start("VideoScene");
      } else {
        alert("Please enter Your name");
      }
    });
  }
}
