import './reset.less';

function setHtmlFontSize(){
	var html_width = document.documentElement.clientWidth;
	var html = document.querySelector("html");
	let rem = '',fontSize = '';
	if(window.screen.width>750){
		rem = html_width/25+"px";
		fontSize = html_width/75+"px";
	}else{
		rem = html_width/10+"px";
		fontSize = html_width/25+"px";
	}
	html.style.fontSize = rem;
	document.body.style.fontSize = fontSize;
}
setHtmlFontSize();
window.addEventListener("resize",setHtmlFontSize);

