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
	this.pairingState = 0;
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
		html = html + "<div class=\"cell pair-" + this.cardArray[i-1] + "\"><img src=\"images/0"+ this.cardArray[i-1] +".jpg\"></div>";
	}

	container.innerHTML = html;
	this.addClickListener();
};

game.prototype.addClickListener = function() {
	var cells = document.querySelectorAll(".cell");

	for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function(){
			console.log("hello");
		});
	}

game.prototype.checkMatch = function() {
	
};

};
