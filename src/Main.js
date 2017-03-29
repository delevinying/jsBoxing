var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
Laya.init(2000, 750);
// Laya.init(1136, 640, Laya.WebGL);
laya.utils.Stat.show(0, 0);
//设置适配模式
Laya.stage.scaleMode = "showall";
Laya.stage.alignH = "left";
Laya.stage.alignV = "top";
//设置横竖屏
Laya.stage.screenMode = "horizontal";
var dialog = new Laya.Image("res/background.png");
dialog.pos(0, 0);
Laya.stage.addChild(dialog);
Laya.loader.load([
    { url: "res/Joystick@atlas0.png", type: Loader.IMAGE },
    { url: "res/Joystick.fui", type: Loader.BUFFER }
], Handler.create(this, this.onLoaded));
function onLoaded() {
    console.log("Main  loaded");
    Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
    fairygui.UIPackage.addPackage("res/Joystick");
    new MainPanel();
    // new GameInfo();
}
//# sourceMappingURL=Main.js.map