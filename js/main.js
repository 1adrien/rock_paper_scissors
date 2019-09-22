

// computer will choose randomly 
// If you click Rock button and the bot is Rock, it's a tie;
	// Display message saying you chose rock and the bot chose rock and it's a tie

// If you click Rock button and the bot is Paper, you lose;
	// Display message etc
	// bot's score goes up by 1

// If you click Rock button and the bot is Scissors, you win;
	// Display message etc
	// your score goes up by 1


// Clicking the Start Over button resets the scores to 0;




let choices = ['rock', 'paper', 'scissors'];
let botChoice;
// let randomChoice;
let outcome;
let yourChoice;
let yourScore = 0;
let botScore = 0;



$('#rock').on('click', function(){
	yourChoice = 'rock';
	botChoice = choices[Math.floor(Math.random()*choices.length)];
	// botChoice = choices[randomChoice];
	
	if (botChoice === "rock") {
			outcome = "You tie";
			$('#status').text('You chose '+yourChoice+'. Computer chose '+botChoice+'. '+outcome+'');

		} else if (botChoice === "paper") { 
			botScore = botScore + 1;
			outcome = "You win";
			$('#computerScore').text(botScore);
			$('#status').text('You chose '+yourChoice+'. Computer chose '+botChoice+'. '+outcome+'');
			
		} else {
			yourScore = yourScore + 1;
			outcome = "You lose";
			$('#humanScore').text(yourScore);
			$('#status').text('You chose '+yourChoice+'. Computer chose '+botChoice+'. '+outcome+'');
		}
});

$('#paper').on('click', function(){

	botChoice = choices[Math.floor(Math.random()*choices.length)];
	// botChoice = choices[randomChoice];
	
	if (botChoice === "rock") {
		yourScore = yourScore + 1;
		$('#humanScore').text(yourScore);
		$('#status').text('You chose paper. Computer chose rock. You win.');

	} else if (botChoice === "paper") { 
		$('#status').text('You chose paper. Computer chose paper. You tie.');
		
	} else {
		botScore = botScore + 1;
		$('#computerScore').text(botScore);
		$('#status').text('You chose paper. Computer chose scissors. You lose.');
	}
});

$('#scissors').on('click', function(){
	botChoice = choices[Math.floor(Math.random()*choices.length)];
	// botChoice = choices[randomChoice];
	
	if (botChoice === "rock") {
			$('#status').text('You chose scissors. Computer chose rock. You lose.');

	} else if (botChoice === "paper") { 
		botScore = botScore + 1;
		$('#computerScore').text(botScore);
		$('#status').text('You chose scissors. Computer chose paper. You win.');
		
	} else {
		yourScore = yourScore + 1;
		$('#humanScore').text(yourScore);
		$('#status').text('You chose scissors. Computer chose scissors. You win.');
	}
});

$('#reset').on('click', function(){
	$('#computerScore').text(0);
	$('#humanScore').text(0);
	$('#status').text('');

});

// 1. Write a detailed pseudocode for this game
// 2. Follow your pseudocode line by line (or in an order that makes sense)
// 3. Can't remember a method/function, Google it. Ask out loud. You got this :)

// Tip: Method for getting a random number: Math.floor(Math.random() * {maxNum});
