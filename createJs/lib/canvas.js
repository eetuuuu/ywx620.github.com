var canvasManager={};
canvasManager.setCenter=function(canvas){
	//����������������û������е�
	var w=document.body.clientWidth;//��ȡ�������������Ŀ�
	var h=document.body.clientHeight;//��ȡ�������������ĸ�
	var scale=Math.min(w/canvas.width,h/canvas.height);//�ȱ����Ų�������ʾ
	canvas.style.position="absolute";//canvas�þ��Զ�λ
	canvas.style.width=canvas.width*scale+"px";
	canvas.style.height=canvas.height*scale+"px";
	canvas.style.left=(w-parseInt(canvas.style.width))*0.5+"px";
	canvas.style.top=(h-parseInt(canvas.style.height))*0.5+"px";
}
canvasManager.setColor=function(canvas,color){
	//����������������û���������ɫ
	canvas.style="background:"+color;
}
canvasManager.setWindowColor=function(color){
	//����������������������������ɫ
	document.body.style="background:"+color;
}