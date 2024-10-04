import Phaser from './lib/phaser.js';
import { StartScene } from './scenes/start-scene.js';
import { VideoScene } from './scenes/video-scene.js';
import { GameScene } from './scenes/game-scene.js';
import { ExplorationScene } from './scenes/exploration-scene.js';
import { PreloadScene } from './scenes/preload-scene.js';
import { LifeStandardsScene } from './scenes/life-standards-scene.js';

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  roundPixels: true,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 2000,
    height: 1000,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
  },
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
});

game.scene.add('PreloadScene', PreloadScene);
game.scene.add('StartScene', StartScene);
game.scene.add('VideoScene', VideoScene);
game.scene.add('GameScene', GameScene);
game.scene.add('ExplorationScene', ExplorationScene);
game.scene.add('LifeStandardsScene', LifeStandardsScene);

game.scene.start('PreloadScene');
