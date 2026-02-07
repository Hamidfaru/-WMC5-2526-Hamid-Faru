#If Statement
let sale=true;
if(sale){
  console.log('Time to buy!');
}
sale=false;
if(sale){
  console.log('Time to buy!');
}

#If...Else Statements
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.');
}

#Comparison Operators
let hungerLevel=7;

if (hungerLevel > 7) {
  console.log('Time to eat!'); 
} else {
  console.log('We can eat later!'); 
}


#Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8 ){
   console.log ('time to sleep');
}else{
 
   console.log('not bed time yet');
}

#let wordCount = 1;
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

#Truthy and Falsy Assignment
let tool; 

let writingUtensil = tool || 'pen';


console.log(`The ${writingUtensil} is mightier than the sword.`);



tool = 'marker';

writingUtensil = tool || 'pen';


console.log(`The ${writingUtensil} is mightier than the sword.`);

#Ternary Operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

#Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else {
  console.log('Invalid season.');


#The switch keyword
let athleteFinalPosition = 'first place';


#
