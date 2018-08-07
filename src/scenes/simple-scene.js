import img from '../assets/cokecan.png'

export class SimpleScene extends Phaser.Scene {

  preload() {
    this.load.image('cokecan', img)
  }
  create() {
    this.add.text(100, 100, 'hello phaser', { fill: '#0f0' })
    this.add.image(100, 200, 'cokecan')
  }
}