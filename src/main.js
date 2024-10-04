import Phaser from './lib/phaser.js';
import { StartScene } from './scenes/start-scene.js';
import { VideoScene } from './scenes/video-scene.js';
import { GameScene } from './scenes/game-scene.js';

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  roundPixels: true,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 450,
    height: 640,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
  },
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: true,
    },
  },
  dom: {
    createContainer: true,
  },
});

game.scene.add('StartScene', StartScene);
game.scene.add('VideoScene', VideoScene);
game.scene.add('GameScene', GameScene);

game.scene.start('StartScene');
