class boot extends Phaser.Scene{
  constructor() {
    super("boot");
    console.log('boot');
  }
  preload(){
    console.log('boot-preload');
    this.game.load.image('loading','assets/loading.png');
  }
  create(){
    console.log('boot-create');
    this.scaleMode=Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally=true;
    this.game.start('Preload');
  }
}


var config={
  width:800,
  height:600,
  backgroundColor:0x000000,
  scene:[boot,Preload,GameTitle,TheGame,GameOver]
}
var game=new Phaser.Game(config);



