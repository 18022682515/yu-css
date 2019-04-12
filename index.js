require('./index.css');

function setHtmlFontSize(){
    var html_width = document.documentElement.clientWidth;
    var html = document.querySelector("html");
    html.style.fontSize = html_width/30+"px";
}
setHtmlFontSize();
window.addEventListener("resize",setHtmlFontSize);