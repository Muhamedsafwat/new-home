export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    this.add
      .text(225, 320, 'Game Scene Started!', {
        font: '32px Arial',
        fill: '#ffffff',
      })
      .setOrigin(0.5);
  }

  update() {}
}
