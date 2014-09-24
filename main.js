cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(1024, 768, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    VirtuosLoadScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
    }, this);
};
cc.game.run();