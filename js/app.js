/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// variables to  use in global scope
var time;
var sec;
var min;
var hours;
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
//Create a list that holds all of your cards
var main = document.getElementsByClassName('deck');
var sub = document.getElementsByClassName('card');
var subList = [].slice.call(sub);
// shuffling of cards
window.onload = gameBegin();

function gameBegin() {
	var i = 0;
	var mixedCards = shuffle(subList);
	while (i < mixedCards.length) {
		main[0].append(mixedCards[i]);
		i++;
	}
}
// adding Event Listener to cards
for (var i = 0; i < subList.length; i++) {
	subList[i].addEventListener('click', revealCard);
}
// creating variables to handle  moves of cards
var cardMoves = 0;
var storedCards = [];
var moveSec = document.getElementById('moves');
// creating variable to handle matched crads
var matchedCards = document.getElementsByClassName('match');
// matching and unmatching of cards
function revealCard() {
	if (timeSpeed == false) {
		timerBegin();
		timeSpeed = true;
	}
	this.classList.add('card');
	this.classList.add('open');
	this.classList.add('show');
	this.classList.add('disable');
	storedCards.push(this);
	if (storedCards.length == 2) {
		cardMoves = cardMoves + 1;
		moveSec.innerHTML = cardMoves;
		Rating();
		if (storedCards[0].type == storedCards[1].type) {
			matched();
		} else {
			unmatched();
		}
	}
}
// function for matching condition of cards
function matched() {
	storedCards[0].classList.add('match', 'disable');
	storedCards[1].classList.add('match', 'disable');
	if (matchedCards.length == 16) {
		clearInterval(time);
		Swal.fire({
			title: "Well Done",
			html: 'You Earned <strong style="color: #ff9f33; text-shadow: 2px 2px 2px #000";>' + nofStar + ' <i class="fa fa-star"></i></strong><br> Time Taken is <br>' + hours + ' Hours ' + min + ' Minutes ' + sec + ' Seconds ',
			confirmButtonText: '<i class="fa fa-play" aria-hidden="true"></i> PlayAgain',
		}).then(() => {
			reset();
		});
	}
	storedCards = [];
}
// function for unmatching condition of cards
function unmatched() {
	storedCards[0].classList.add('unmatch');
	storedCards[1].classList.add('unmatch');
	storedCards.forEach((card) => {
		setTimeout(() => {
			card.classList.remove('unmatch', 'open', 'show', 'disable');
		}, 200)
	})
	storedCards = [];
}
// creating variables to handle time
let timeSpeed = false;
var tArea = document.getElementById('timer');
// timer declaration
function timerBegin() {
	sec = 0;
	min = 0;
	hours = 0;
	time = setInterval(() => {
		sec = sec + 1;
		if (sec == 59) {
			sec = 0;
			min = min + 1;
		}
		if (min == 60) {
			min = 0;
			hours = hours + 1;
		}
		tArea.innerHTML = hours + " :" + min + " :" + sec;
	}, 1000)
}
// creating variables to handle star rating
var nofStar = 3;
var starDesign = document.getElementsByClassName('fa-star');
var starRating = [].slice.call(starDesign);
// Function for Rating of Game Play
function Rating() {
	if (cardMoves > 14 && cardMoves <= 20) {
		nofStar = 2;
		starRating[2].style.display = "none";
	}
	if (cardMoves >= 20) {
		nofStar = 1;
		starRating[1].style.display = "none";
	}
}
//for refreshing the page
function reset() {
	document.location.reload();
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
