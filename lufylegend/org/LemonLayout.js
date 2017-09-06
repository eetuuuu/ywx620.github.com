var Layout={};
/**תΪ����*/
int=function(num){
	return parseInt(num)
}
/**
 * ���Ӷ�������
 * xNum��x�������е�����
 * xDis,yDis,��x����y���ϵļ��
 * x,y��ʼλ��
 * sign:��1�������Ҵ��������ŵ�signΪ��1ʱ�򷴹���,,*/
Layout.displayRank=function(array,xNum,xDis,yDis,x,y,sign)
{
	var display;
	sign=sign||1;
	for(var i=0;i<array.length;i++){
		display=array[i];
		display.x=x+int(i%xNum)*(display.width+xDis)*sign;
		display.y=y+int(i/xNum)*(display.height+yDis)*sign;
	}
}
/**
 * �ֲ��Ŀ��Ӷ�������
 * array:�Ӷ�������
 * part1,part2��[len:int,xNum:int,xDis:Number,yDis:Number,x:Number,y:Number],�ο�����displayRank�Ĳ���
 * sign:��1�������Ҵ��������ŵ�signΪ��1ʱ�򷴹���
 * part1[0]+part2[0]==array.length;//���Ϊfalse,��������
 * */
Layout.displayRankPart=function(array,part1,part2,sign)
{
	var len1,len2,xNum,xDis,yDis,x,y;
	var display;
	sign=sign||1;
	len1=part1[0];xNum=part1[1];xDis=part1[2];yDis=part1[3];x=part1[4];y=part1[5];
	var arr1=array.slice(0,len1);
	Layout.displayRank(arr1,xNum,xDis,yDis,x,y,sign);
	if(part2){
		len2=part2[0];xNum=part2[1];xDis=part2[2];yDis=part2[3];x=part2[4];y=part2[5];
		var arr2=array.slice(len1,len1+len2);
		Layout.displayRank(arr2,xNum,xDis,yDis,x,y,sign);
	}
}
/**
 * ��˳ʱ�뻷��Բ��/����/��Բ�ε����в���
 * center����λ��
 * radius�뾶����
 * loop��������Ϊ2*Math.PI,���ֵ��Math.PI/2��90�ȵ�����
 * skewRƫ��Ļ��ȣ�90��=Math.PI/2���ȣ�
 * skewXƫ���X��λ��
 * skewYƫ���Y��λ��
 * skewXR��X���ϰ뾶���ӵ�ֵ����Բ���֣�
 * skewYR��Y���ϰ뾶���ӵ�ֵ����Բ���֣�
 * */
Layout.displayCircle=function(array,centerX,centerY,radius,loop,skewR,skewX,skewY,skewXR,skewYR)
{
	loop=loop||2*Math.PI;skewR=skewR||0;skewX=skewX||0;skewY=skewY||0;skewXR=skewXR||0;skewYR=skewYR||0;
	var display;
	var count=array.length;
	var radian=loop/count
	if(loop<2*Math.PI){//��������εı���Ѹ�������һ�������
		radian=loop/(count-1)
	}
	for(i=0;i<count;i++){
		display=array[i];
		display.x=centerX+Math.cos(radian*i-skewR)*(radius+skewXR)+skewX;
		display.y=centerY+Math.sin(radian*i-skewR)*(radius+skewYR)+skewY;
	}
}
/**
 * ��˳ʱ�뻷�ƶ���ε����в���
 * center����λ��
 * radius�뾶����
 * size����
 * skewRƫ��Ļ��ȣ�90��=Math.PI/2���ȣ�
 * */
Layout.displayPolygon=function(array,centerX,centerY,radius,size,skewR)
{
	radius=radius||100;size=size||5;skewR=skewR||0;
	if(size<3||size>array.length){
		trace("����εı�������ȷ");
		return;
	}
	var display;
	var count=array.length;
	var radian=2*Math.PI/size;//ÿ���ߵĻ���
	var num=int(count/size);//ÿ���ߵĸ���
	for (var i=0;i<size;i++) {
		var x1=centerX + Math.cos(i*radian-skewR)*radius;
		var y1=centerY + Math.sin(i*radian-skewR)*radius;
		var j=i+1;
		j=j==size?0:j;
		var x2=centerX + Math.cos(j*radian-skewR)*radius;
		var y2=centerY + Math.sin(j*radian-skewR)*radius;
		for(var k=0;k<num;k++){
			var m=k+num*i;
			if(m<count){
				display=array[m];
				display.x=x1;
				display.y=y1;
				display.x+=(x2-x1)/num*k;
				display.y+=(y2-y1)/num*k;
			}
		}
	}
}
/**
 * ���������в���
 * xDis,yDis,��x����y���ϵļ��
 * x,y��ʼλ��
 * sign:��1�������Ҵ��������ŵ�signΪ��1ʱ�򷴹���
 * isCenter�ǵ��������Σ�Ϊfalseʱ��ֱ��������
 * */
Layout.displayTrigon=function(array,xDis,yDis,x,y,sign,isCenter)
{
	xDis=xDis||0,yDis=yDis||0,x=x||0,y=y||0,sign=sign||1;
	if(isCenter==null){
		isCenter=true
	}
	var display;
	var start=0;
	var len=1
	var index=1;
	var temps=array.slice(start,len);
	rank();
	function rank(){
		var cx=0;
		var tempLen=temps.length
		if(tempLen>1&&isCenter){
			cx=(tempLen-1)*(display.width+xDis)/-2*sign;
		}
		for(var i=0;i<tempLen;i++){
			display=temps[i];
			display.x=x+i*(display.width+xDis)*sign+cx;
			display.y=y+(index-1)*(display.height+yDis)*sign;
		}
		index++;
		start=len;
		len=start+index;
		temps=array.slice(start,len);
		if(len<=array.length+start){
			rank();
		}
	}
}
/**
 * ���Ӷ���ש�飨ǽ������
 * xNum��x�������е�����
 * xDis,yDis,��x����y���ϵļ��
 * x,y��ʼλ��
 * offX:ƫ�Ƶľ���,*/
Layout.displayWall=function(array,xNum,xDis,yDis,x,y,offX)
{
	var display;
	for(var i=0;i<array.length;i++){
		var xx=Math.floor(i/xNum)%2==0?offX:0;
		display=array[i];
		display.x=x+int(i%xNum)*(display.width+xDis)+xx;
		display.y=y+int(i/xNum)*(display.height+yDis);
	}
}