/*eslint-env browser*/
function playGame(){ 
    alert('First enter a low number, then a high number. Then, guess a random number between them.');

    //get the low and high bounds
    //uses parseInt() to make sure we have numbers not strings
     var from = parseInt(prompt('Enter a low bound'));
    while (from < 0 || from > 1000 || isNaN(from)){
        from = parseInt(prompt('Enter a number greater than 0 and less than 1000'))
    }


    var to = parseInt(prompt('Enter the higher bound.'));
    while (to < 0 || to > 1000 || to < from || isNaN(to)){
        to = parseInt(prompt('Enter a numer less than 1000 and greater than ' + from))
    }
    //get an integer between [from, to]
    //Math.random() 
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt('Guess a number between '+ from + ' and ' + to));
    while (currentGuess < from || currentGuess > to || isNaN(currentGuess)){
        currentGuess = parseInt(prompt('Enter a number between ' + from + ' and ' + to))
    var totalGuesses = 1;

    //loop until user
    while(currentGuess != target || isNaN(currentGuess){
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
}
    