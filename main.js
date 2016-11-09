var width = 800, height = 600, 
  game = new Phaser.Game(height,width,Phaser.AUTO,"game",{preload:onPreload, create:onCreate}), 
  style = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

function goFullScreen(){
  console.log('fullscreen');
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function onPreload(){
  console.log('preload');
}

function onCreate(){
  game.stage.backgroundColor = "#ffffff";
  var text = game.add.text(0, 0, "start", style);
  text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

  game.physics.startSystem(Phaser.Physics.ARCADE);
  goFullScreen();
}