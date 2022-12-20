let conditions = [
    'rain','sunny', 'snow', 'humid','sunny', 'snow', 'humid', 'sunny', 'snow', 'humid', 'rain','sunny', 'snow', 'humid', 'windy'
];
console.log('Array Length: ', conditions.length)
// console.log(conditions[0] !== 'rain');

let number = 0;
// let weather = 'sunny';

do {
    // code block that runs as long as the while expression returns true
    // exception: will run at least once.

    console.log(conditions[number]); 
    number++;

    if(conditions[number] === "rain") {
        // number = 20;  // provide a "false" for our while expression
        break; // breaks out of our loop (code block)
        // number++;
        // continue; // can help us "skip" a position.
    } 

} while (number < conditions.length);
// } while (conditions[0] !== 'rain');

console.log(number);
// continues 



function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }   

  var randNum =  Math.floor(Math.random() * 10) + 1;
console.log(randNum)


 
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// Generate random number between 1 to 10 
console.log(generateRandomInteger(1,10))

// Generate random number between 11 to 20
console.log(generateRandomInteger(11,20))

// Generate random number between 21 to 30
console.log(generateRandomInteger(21,30)) 
 