//CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in cm) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. calculate their scores
3. decide who wins and print the winner to the console. include the score in the string that you output to the console. dont forget that their can be a draw (both players with the same score).

4. EXTRA: add a third player and now decide who wins. Hint: you will need the && operator to take the decision. :)
 */




var heightJohn = 180;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
/*
if(scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game' + scoreMike + ' points');
} else if(scoreJohn === scoreMike) {
    console.log('There is a draw');
}

*/

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points');
} else {
    console.log('It\'s a draw');
}

