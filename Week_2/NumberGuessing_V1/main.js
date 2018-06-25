/*eslint-env browser*/
function playGame(){ 
alert('First enter a low number, then a high number. Then, guess a random number between them.');

//get the low and high bounds
//uses parseInt() to make sure we have numbers not strings
var from = parseInt(prompt('Enter the lower bound.'));

var to = parseInt(prompt('Enter the higher bound.'));

//get an integer between [from, to]
//Math.random() 
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt('Guess a number between '+ from + ' and ' + to));

var totalGuesses = 1;

//loop until user
while(currentGuess != target){
    if (currentGuess < target){
    currentGuess = parseInt(prompt('Enter a higher number'));
    
    totalGuesses++;
}else if (currentGuess > target){
    currentGuess = parseInt(prompt('Enter a lower number'));
    
    totalGuesses++
    }
}

alert('It took ' +totalGuesses + ' tries to guess the correct number.');
}
    