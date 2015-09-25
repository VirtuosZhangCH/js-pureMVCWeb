/**
 *
 * @author 
 *
 */
class GroupDemo extends egret.gui.Group{
    private btn: MyButton;
	public constructor() {
        super();
        
        
	}
	
	public createChildren():void
	{
        super.createChildren();
        
        this.btn = new MyButton();
        
        this.btn.label= "未解锁"
        
        this.btn.label2 = "222";
        
        this.btn.skinName = MyButtonSkin;       
       
        
        var ass: egret.gui.UIAsset = new egret.gui.UIAsset("bgImage");
        
        this.addElement(ass);
        this.btn.top = 20;
        this.addElement(this.btn);   
        
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, this)
            
       function onButtonClick(e:egret.TouchEvent):void
       {
           this.btn.lable2 = "sssss";
           //this.btn.partAdded("lableDisplay2",this.btn.label2);
           console.log("ssss"+this.id);
       }
	}
   
}
