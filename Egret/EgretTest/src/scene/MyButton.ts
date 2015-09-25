/**
 *
 * @author 
 *
 */
class MyButton extends egret.gui.Button{
    public Label2: egret.gui.IDisplayText//= new egret.gui.Label();
	
    public lableDisplay2: egret.gui.Label;
    private _label2: string = "";
    public constructor() {
        super();
	}
	
	public get label2():string
	{
        if(this.lableDisplay2) {
            return this.lableDisplay2.text;
        }else{
            return this._label2;
        }
	}
	
	public set label2(value:string)
	{
        this._label2 = value;
        
        if(this.lableDisplay2)
        {
            this.lableDisplay2.text = value;
        }
	}
	
      public partAdded(partName:string,instance:any):void{
          super.partAdded(partName,instance);
          if(instance ==this.lableDisplay2)
          {
              this.lableDisplay2.text = this._label2;
          }
      }
}
