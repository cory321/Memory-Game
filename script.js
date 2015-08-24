// It wasn't necessary to build this game using OOP, 
// but I really wanted to practice!

window.onload = function() {

	var newCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
	var memoryGame = new game(newCards);

	memoryGame.shuffle();
	memoryGame.generateGrid();

};

var game = function(array) {
	this.numCards = 16;
	this.cardArray = array;
	this.clickState = 1;
	this.firstCard = 0;
	this.secondCard = 0;
};

game.prototype.shuffle = function() {
  
	var array = this.cardArray;
	var currentIndex = array.length, tempValue, randomIndex ;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		tempValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = tempValue;
  	}

  	return array;
};

game.prototype.generateGrid = function() {

	var html = "";
	var container = document.getElementById("container");

	for (var i = 1; i <= this.numCards; i++) {
		html = html + "<div data="+ this.cardArray[i-1] +" class=\"cell\"><img src=\"images/back.jpg\"></div>";
	}

	container.innerHTML = html;
	this.addClickListener();
};

game.prototype.addClickListener = function() {
	var cells = document.querySelectorAll(".cell");

	var click = this.clickState;
	var firstCard = this.firstCard;
	var secondCard = this.secondCard;

	var showCard = function(div, i) {
		var data = div.getAttribute("data");
		div.innerHTML = "<img src=\"images/0"+ data +".jpg\">";
	};

	var hideCard = function(div) {
		div.innerHTML = "<img src=\"images/back.jpg\">";
	};

	for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function(){
			
			if(click == 2) {
				click = 1;
				secondCard = this.getAttribute("data");
				console.log("Your second card is "+ secondCard);
				
				showCard(this, i);
			} else {
				click++;
				firstCard = this.getAttribute("data");
				console.log("Your first card is "+ firstCard);
				
				showCard(this, i);
			}

			if(firstCard == secondCard) {
				console.log("MATCH FOUND");
			} else {

			}
		});
	}
};

