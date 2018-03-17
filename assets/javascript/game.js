$("#slideShowImages > div:gt(0)").hide();

setInterval(function() { 
  $('#slideShowImages > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideShowImages');
},  3000);

var words = [ 
"lion",
"tiger",
"house cat",
"silver back gorilla", 
"snake",
"scorpion",
"monkey", 
"eagle", 
"hawk", 
"falcon",
"elephant", 
"fox", 
"ant",	
"lizard", 
"mole", 
"hammer head shark", 
"orca", 				
"dog", 
"giraffe", 
"black back gorilla",
"octopus",
"shrew",
"bonobo monkey", 
"wild boar", 
"meercat", 
"mongoose",
"bufallo", 	
"hippopotamus",
"crocodile", 
"zebra", 
"cheetah",		
"leopard",
"hyenna", 
"chimpanzee",
"beetle",
"baboon",
"owl",
"crab",
"wild dog", 	
];
console.log("==============================");
console.log(words[3]);
console.log(words[3].length);
console.log("==============================");

var alphabet = ["a", "b", "c", "d","e","f", "g", "h",
				"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
				"t", "u", "v", "w", "x", "y", "z"];
var pictures = [
				"./assets/images/lioness_moving_cub.jpg",
				"./assets/images/space-3.jpg",
				"./assets/images/Koala.jpg",
				"./assets/images/lion_pride.jpg",
				"./assets/images/Desert.jpg",
				"./assets/images/lagos_skline.jpg",
];
var pics = [];

var numLettersMatched;
var wrongGuess;
//var key;
var guessed = [];
var dashes = [];
var animal = [];
var	animals = [];
var guessesRemaining = 15;
var guessesRemainingBox = [];
	guessesRemainingBox[0] = 15;
var alreadyGuessed = [];
var guessedLetters = [];
var correctGuess = [];
var wins = [];
	wins[0] = 0;
var losses = [];
	losses[0] = 0;
var space = " ";

var availableNumberOfGuesses = document.getElementById('guessesRemainingSpan'); 
var currentWord = document.getElementById('wordSpan');
var guesses = document.getElementById('guessesMadeSpan');
var output = document.getElementById('outputSpan');
var stat = document.getElementById('statSpan');
var correct = document.getElementById('matchedLetterSpan');
var winStat = document.getElementById("winsSpan");
var lossStat = document.getElementById("lossesSpan");
var picSlide = document.getElementById('slideShowImages');


// Randomizing function
			animals = words[Math.floor(Math.random() * words.length)]. split("");
			console.log(words);
    		
    		pics = pictures[Math.floor(Math.random() * pictures.length)];

    	// Adding dashes at the end (push) while accounting for space
    	for (var i = 0; i < animals.length; i++) {    		
    			((animals[i] === space) ? dashes.push(space) : dashes.push("-"));
    			 (animals[i] === space) || (i > 0 && animals[i - 1] === space) ? animals.length === (animals.length - animals.indexOf(space)):  animals.length;
    			 // (animals[i] === space)) ? animals				

	}

// Adding dashes to the HTML using the id 
    			document.getElementById('wordSpan').textContent = dashes.join(space);

		// Narrowingnthe key options and Telling the DOM to display keys pressed
		document.onkeydown = function(event){					
			if ( event.keyCode >= 65 && event.keyCode <= 90) {
				console.log(event);
				var key = event.key;
				(guessedLetters.indexOf(key) === -1) ? guessedLetters.push(key): alert("Already Guessed");
				for (var i = 0; i < animals.length; i++) {
					if (event.key === animals[i]) {						
						if(correctGuess.indexOf(key) === -1){
							correctGuess.push(animals[i]);

						}			
						
						correct.innerHTML = correctGuess.join("");
						dashes[i] = animals[i];				
					} 
					currentWord.innerHTML = dashes.join("");
			 
				}
		 		document.getElementById("outputSpan").textContent = "You have made " +  guessedLetters.length + " guesses so far."
				guesses.textContent = guessedLetters.join("");
	   		 	// guessedLetters.push(space);
	   		 	console.log(event.key);
	   		 	console.log(guessedLetters);
	   		 	return guessedLetters; 
	   		} 
	   		else {
	   			 alert("Invalid Entry");
	   		}	

   		}


   		document.onkeyup = function(event){					
			if ( event.keyCode >= 65 && event.keyCode <= 90) {
				var key = event.key;
				var record = 0;
				var losingRecord = 0;
					
					correctGuess.length === animals.length ? alert("You Win Game Over!") : guessesRemaining *= 1;
					correctGuess.length === animals.length ? wins.push(record += 1) : guessesRemaining *= 1;

					event.key > guessedLetters[14] && correctGuess.length !== animals.length ? alert("Sorry! You lose! Game Over!") && loses++ : guessesRemaining *= 1;
					event.key > guessedLetters[14] && correctGuess.length !== animals.length ? losses.push(losingRecord += 1) : guessesRemaining *= 1;
						 guessesRemaining -= 1;
						 guessesRemainingBox.push(guessesRemaining)

					winStat.innerHTML = wins[wins.length - 1];
					lossStat.innerHTML = losses[losses.length - 1]; 					
				
					stat.innerHTML = 'You have ' + guessesRemainingBox[guessesRemainingBox.length - 1] + ' guesses remaining';
				availableNumberOfGuesses.innerHTML = guessesRemainingBox[guessesRemainingBox.length - 1];
				console.log(event); 
			}
			
				 	return;
		}
					//var playAgain = confirm("Play Again?");
				//confirm("Play Again?") ? start() : alert("Goodbye"); //confirm("Play Again?")?


//		start function

var start = function() {
	 // guessed[0] = 0;
	 
	  animals = dashes;
	  //animals[i] = ("-");
	  guessesRemaining = 15;
	 //guessesRemainingBox[0] = 15;
	  alreadyGuessed[0] = 0;
	  guessedLetters[0] = 0;
	  guessedLetters.length = 0;
	  correctGuess.length = 0;
	  currentWord.innerHTML = dashes.join("-");
	
	 // wins[0] = 0;
	
	 // losses[0] = 0;
	

	  animals = words[Math.floor(Math.random() * words.length)]. split("");
			console.log(words);
			for (var t = 0; t < animals.length; t++) {    		
    			((animals[i] === space) ? dashes.push(space) : dashes.push("-"));
	    		}
	    		 document.getElementById('wordSpan').textContent = dashes;

//currentWord.textContent = dashes.join(space);

// correct.innerHTML = correctGuess;
						// dashes[i] = animals[i];				
					
					// currentWord.innerHTML = dashes;
									//guesses.textContent = guessedLetters.join(" ");

	//pics = pictures[Math.floor(Math.random() * words.length)];
	 
correct.innerHTML = correctGuess;
guesses.textContent = 0;
availableNumberOfGuesses.innerHTML = guessesRemaining; 
// currentWord.innerHTML = dashes;
stat.innerHTML = 'You have ' + guessesRemaining + ' guesses remaining';
document.getElementById("outputSpan").textContent = "You have made " +  guessedLetters.length + " guesses so far.";

//availableNumberOfGuesses.innerHTML = guessesRemainingBox[guessesRemainingBox.length - 1];
// guesses = document.getElementById('guessesMadeSpan');
// output = document.getElementById('outputSpan');
// stat = document.getElementById('statSpan');
// correct = document.getElementById('matchedLetterSpan');
// winStat.innerHTML = wins[i];
// lossStat.innerHTML = losses[i];
} 



// 		Start
  // document.getElementById('buttons').onclick = function() {
  // 	start();
  // 	//confirm("Play Again?") ? start() : alert("Goodbye"); //confirm("Play Again?")?
    
    
  // }


// 		Reset

//$("#reset").on("click", function() { <== for disagnostic purposes. 
  document.getElementById('reset').onclick = function() {
	//start();
  	confirm("Play Again?") ? start() : alert("Goodbye"); //confirm("Play Again?")?

    // correctGuess.parentNode.removeChild(correctGuess);
    // guessedLetters.parentNode.removeChild(guessedLetters);
    // wins.parentNode.removeChild(wins);
    // lossess.parentNode.removeChild(losses);
    // availableNumberOfGuesses.innerHTML = guessesRemaining;
    // context.clearRect(0, 0, 400, 400);
    
  };
  //  });

//  var slide = function() {
// //		slideshow
// 		for (var i = 0; i < 15 ; i++) {		
// 			for (var j = 0; j < pictures.length; j++) {
// 				document.onkeydown? pics.push(pictures[i]):
// 				picSlide.innerHTML = pics[i];
// 			}

// 		}

//   }
//  slideshow
// document.getElementById("#slideShowImages > div:gt(0)").hide();

// setInterval(function() { 
//   document.getElementById('#slideShowImages > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideShowImages');
// },  3000);

