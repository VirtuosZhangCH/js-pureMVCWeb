/**
 *
 * @author 
 *
 */
class MyButtonSkin extends egret.gui.ButtonSkin{
	public constructor() {
        super();
        this.minWidth = 140;
        this.height = 60;
        this.states = ["up","down","disabled"];
	}
	
    public skinParts: Array<string> = ["labelDisplay","labelDisplay2"];
	
    public labelDisplay2: egret.gui.Label;
    
    private background: egret.gui.UIAsset;
    
    public createChildren():void
    {
        var asset: egret.gui.UIAsset=new egret.gui.UIAsset();
        asset.left = asset.top = asset.bottom = asset.right = 0;
        this.background = asset//new egret.gui.UIAsset();
        this.background.source = "button_down_png";
                
        this.addElement(this.background);
        super.createChildren();
       
        
        this.labelDisplay2 = new egret.gui.Label();
        this.labelDisplay2.bottom = 10;
        this.labelDisplay.textColor = 0x000000;
        this.labelDisplay2.textColor = 0x000000;
        this.labelDisplay2.text = "wweert";
        this.addElement(this.labelDisplay2);
    }
    
    public commitCurrentState():void
    {
        super.commitCurrentState();
        switch(this.currentState)
        {
            case "up":
                this.labelDisplay2.bottom = 50;
                this.background.source = "button_normal_png";
                break;
            case "down":
                this.labelDisplay2.bottom = 10;
                this.labelDisplay2.text = "222";
                this.background.source = "button_down_png";
                break;
            case "disabled":
                this.labelDisplay2.bottom = 10;
                this.labelDisplay2.visible = false;
                this.background.source = "button_disabled_png";
                break;
        }
    }
}
