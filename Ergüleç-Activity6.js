var button = document.getElementById("button");
window.onload = function () {
	button.onclick = addPoint;
}

	
var initialTime = 500;

setTimeout(function loop(){
	changePlace();
	setTimeout(loop, initialTime);
}, 500)


function changePlace(){
	button.style.marginTop = Math.random() * 300 + "px";
	button.style.marginLeft = Math.random() * 300 + "px";

}

var score = 0;
var level = 1;

function addPoint(){
	score +=1;
	if(score == 3){
		level +=1;
		initialTime -=100;
		alert(`You Rock ! Go next level${level}`);
		score = 0;

	}
}










