export class VideoScene extends Phaser.Scene {
  constructor() {
    super('VideoScene');
  }

  preload() {
    this.load.video('introVideo', 'assets/vedio/intro.mp4');
  }

  create() {
    const video = this.add.video(225, 320, 'introVideo');

    video.play(true);

    video.on('complete', () => {
      this.scene.start('GameScene');
    });

    this.input.once('pointerdown', () => {
      video.stop();
      this.scene.start('GameScene');
    });
  }
}
