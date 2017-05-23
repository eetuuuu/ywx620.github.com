/**
 * Created by vinson on 2017/5/8.
 */
var Unify={};
//���ó���ȫ������
Unify.setStage=function(){
		LGlobal.align = LStageAlign.BOTTOM_MIDDLE;
    LGlobal.stageScale=LStageScaleMode.SHOW_ALL;
    LSystem.screen(LStage.FULL_SCREEN);
    LGlobal.setDebug(true);
};
//���ó���������ɫ
Unify.backgroundColor=function(value){
    LGlobal.backgroundColor=value;
};
//������������ҵõ�������
Unify.getRandomArrayByArray=function(value) {
    var temps=value;
    var array=new Array;
    for (var i = 0, len= temps.length; i < len; i++) {
        var j= Math.floor(Math.random() * temps.length);
        array[i] = temps[j];
        temps.splice(j, 1);
    };
    return array;
};
//������ť
Unify.createButton=function (bitmap1,bitmap2,bitmap3){
    var btn= new LButton(bitmap1,bitmap2,bitmap3);
    btn.addLabel=function(value){
        btn.label=value;
        btn.addChild(value);
        value.x=(bitmap1.width-value.width)>>1;
        value.y=(bitmap1.height-value.height)>>1;
    };
    return btn;
};
//����ʸ��ɫ��
Unify.createBitmap=function (c,x,y,w,h){
    var bitmapdata = new LBitmapData(c,0,0,w,h);
    var bitmap = new LBitmap(bitmapdata);
    x=x||0;y=y||0;
    bitmap.x=x;bitmap.y=y;
    bitmap.width=w;bitmap.height=h;
    return bitmap;
};
//�����ı���
Unify.createText=function (size,color,value,x,y){
    text = new LTextField();
    size=size||30;color=color||"#ffffff";value=value||"����";
    x=x||0;y=y||0;
    text.size = size;
    text.color = color;
    text.text = value;
    text.x=x;text.y=y;
    return text;
};
//������ȷ��������
Unify.setRightWrongSound=function(value){
    Unify.soundRight = new LSound();
    Unify.soundRight.load(value["pass"]);
    Unify.soundWrong = new LSound();
    Unify.soundWrong.load(value["warn"]);
};
Unify.playSoundRight=function(){
    Unify.soundRight.play();
};
Unify.playSoundWrong=function(){
    Unify.soundWrong.play();
};
Unify.closeSoundRight=function(){
    Unify.soundRight.close();
};
Unify.closeSoundWrong=function(){
    Unify.soundWrong.close();
};
//�Զ�����λ�� value����,x/y����λ��,xNum�������,xDis/yDis����������
Unify.autoPosition=function(value,x,y,xNum,xDis,yDis){
    for(var i=0;i<value.length;i++){
        var node=value[i];
        node.x=x+parseInt(i%xNum)*xDis;
        node.y=y+parseInt(i/xNum)*yDis;
    }
};
//��ʾFPS
Unify.showFPS=function(){
    var fps=new FPS();
    addChild(fps);
};
Unify.createLine=function(y,c){
    y=y||0;c=c||"#000000";
    addChild(Unify.createBitmap(c,0,y,LGlobal.width,2));
};
