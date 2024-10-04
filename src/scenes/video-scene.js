import { drawFullWidthBox } from '../utils.js';

export class VideoScene extends Phaser.Scene {
  constructor() {
    super('VideoScene');
  }

  preload() {
    this.load.video('introVideo', 'assets/vedio/v1.mp4');
    this.load.audio('clickSound', 'assets/audio/click.mp3'); // Load the click sound
  }

  create() {
    const video = this.add.video(0, 0, 'introVideo');

    video.setOrigin(0.5, 0.5);
    video.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
    video.play(true);

    // Add text on top of the video
    const text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "Let's go", {
      font: '32px Arial',
      fill: '#ffffff',
      align: 'center',
    });
    text.setOrigin(0.5, 0.5);

    video.on('complete', () => {
      this.scene.start('LevelOneScene');
    });

    // Play sound and stop the video on pointer down
    this.input.once('pointerdown', () => {
      this.sound.play('clickSound'); // Play click sound
      video.stop();
      this.scene.start('LevelOneScene');
    });
  }
}
