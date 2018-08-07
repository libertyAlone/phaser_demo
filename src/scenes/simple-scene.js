import img from '../assets/cokecan.png'

export class SimpleScene extends Phaser.Scene {

  create() {
    this.add.text(100, 100, 'hello phaser', { fill: '#0f0' })
    this.add.image(100, 200, 'cokecan')
    this.textures.once('addtexture', function () {
      this.add.image(100, 200, 'cokecan');
    }, this)
    this.textures.addBase64('cokecan', img)
  }
}