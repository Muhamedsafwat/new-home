import Phaser from './lib/phaser.js';
import { StartScene } from './scenes/start-scene.js';
import { VideoScene } from './scenes/video-scene.js';
import { LevelOneScene } from './scenes/level-one.js'; 

// Create the Phaser Game instance
const game = new Phaser.Game({
  type: Phaser.CANVAS,
  roundPixels: true,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: window.innerWidth, 
    height: window.innerHeight, 
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT, 
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

// Add all scenes
game.scene.add('StartScene', StartScene);
game.scene.add('VideoScene', VideoScene);
game.scene.add('LevelOneScene', LevelOneScene); 


game.scene.start('StartScene');
