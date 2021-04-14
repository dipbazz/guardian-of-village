import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    console.log('Game over');
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    this.scene.scene.add.text(
      config.scale.width / 2 - 80,
      config.scale.height / 2 - 80,
      'Game Over',
      { color: 'red', fontSize: 32 },
    );

    const replayButton = new Button(this, config.scale.width / 2, config.scale.height / 2, 'blueButton1', 'blueButton2', 'Replay', 'Game');
    this.add.existing(replayButton);
    const menuButton = new Button(this, config.scale.width / 2, config.scale.height / 2 + 50, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.add.existing(menuButton);
  }
}