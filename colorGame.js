numOfSqures = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".squares");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var modeBtn = document.querySelectorAll(".mode");
init();

function init(){
	setupSquares();
	setupModeListener();
	reset();
}

function setupSquares(){
	for(var i=0; i<square.length; i++){
	square[i].style.backgroundColor = colors[i];

	square[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			newColor.textContent = "Play Again?";
		}
		else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
    }
}

function setupModeListener(){

    for(var i = 0; i < modeBtn.length; i++){
	    modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSqures = 3 : numOfSqures = 6;
		reset();
	 });
    }
}

newColor.addEventListener("click", function(){
	colors = generateColor(numOfSqures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	if(this.textContent === "Play Again?"){
		this.textContent = "New Color";
	}
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
});

function reset(){
	colors = generateColor(numOfSqures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
}
}

function changeColor(color){
	for(var i = 0;i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


