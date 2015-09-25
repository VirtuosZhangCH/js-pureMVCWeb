/**
 *
 * @author 
 *
 */
class GroupDemo extends egret.gui.Group{
	public constructor() {
        super();
        
        
	}
	
	public createChildren():void
	{
        super.createChildren();
        
        var btn: MyButton = new MyButton();
        
        btn.label= "未解锁"
        
        //btn.Label2.text = "222";
        
        btn.skinName = "skins.simple.ButtonSkin";       
       
        
        var ass: egret.gui.UIAsset = new egret.gui.UIAsset("bgImage");
        
        this.addElement(ass);
        btn.top = 20;
        this.addElement(btn);   
        
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, this)
            
       function onButtonClick(e:egret.TouchEvent):void
       {
           
           console.log("ssss"+this.id);
       }
	}
}
