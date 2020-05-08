require('./reset.less');

function setHtmlFontSize(){
	var dpr = window.devicePixelRatio;
	var scale = 1/dpr;
	var metas = document.querySelectorAll("meta");   //meta元素
	var meta = null;
	for(var i=0; i<metas.length-1; i++){
		var name = metas[i].getAttribute('name');
		if(name && name==='viewport'){
			meta = metas[i];
		}
	}
	if(!meta){
		meta = document.createElement("meta");
		meta.setAttribute("name","viewport");
		var head = document.querySelector("head");
		head.appendChild(meta);
	}
	meta.setAttribute("content",'user-scalable=no, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale);
	var html_width = document.documentElement.clientWidth;
	var html = document.querySelector("html");
	let rem = '';
	if(window.screen.width>750){
		rem = html_width/40+"px";
	}else{
		rem = html_width/10+"px";
	}
	html.style.fontSize = rem;
}
setHtmlFontSize();
window.addEventListener("resize",setHtmlFontSize);

