var title = document.getElementById('title');
var text = document.getElementById('text');

var titleText = title.textContent;
var textText = text.textContent;
title.innerHTML = " ";
text.innerHTML = " ";

var i = 0;
var titleType = setInterval(function () {
	if(i >= titleText.length){
		stop(titleType);
	}else
	title.innerHTML += titleText[i];
	i++;
}, 100);



setTimeout(function(){
var j = 0;
var textType = setInterval(function () {
	if(j >= textText.length){
		stop(textType);
	}else
	text.innerHTML += textText[j];
	j++;
}, 100);

}, (100*titleText.length+2));

function stop(type){
	clearInterval(type);
}




