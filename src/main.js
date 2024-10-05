import Phaser from "./lib/phaser.js";
import { StartScene } from "./scenes/start-scene.js";
import { VideoScene } from "./scenes/video-scene.js";
import { ExplorationScene } from "./scenes/exploration-scene.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { LifeStandardsScene } from "./scenes/life-standards-scene.js";
import { ChoosePlanetScene } from "./scenes/choose-planet-scene.js";
import { ExaminePlanet } from "./scenes/examine-planet-scene.js";
import { LevelOneScene } from "./scenes/level-one.js";

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  roundPixels: true,
  pixelArt: true,
  scale: {
    parent: "game-container",
    width: 2000,
    height: 1000,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
  },
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
});

game.scene.add("PreloadScene", PreloadScene);
game.scene.add("StartScene", StartScene);
game.scene.add("VideoScene", VideoScene);
game.scene.add("LevelOneScene", LevelOneScene);
game.scene.add("ExplorationScene", ExplorationScene);
game.scene.add("LifeStandardsScene", LifeStandardsScene);
game.scene.add("ChoosePlanetScene", ChoosePlanetScene);
game.scene.add("ExaminePlanet", ExaminePlanet);
game.scene.start("ExplorationScene");
