
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

// const area =  function (parameter1, parameter2) {
    
//     areacalculation  = parameter1 * parameter2
//     return areacalculation
// }
// console.log(area(11,12));
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

// const crazySum = function (value1, value2) {

//     value1 === value2 ? console.log(value1+value2) : console.log((value1+value2)/3)
    
// }
// crazySum(5,8);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

// const crazyDiff = function(givennumber, number19) {
//     givennumber < 19 ? console.log(givennumber-number19) : console.log((givennumber-number19)*3)
    
    
// }
// crazyDiff(25,19);

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

//  const boundary = function (integern) {
    
//     if ((integern< 100 && integern >20) || integern === 400 ) {
//         console.log (true)
//     }
//     else {
//         console.log(false)
//     }
//  }
//  boundary(105);

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// const strivify = function (_checkstrive) {
//     // _checkstrive.includes("Strive") ? console.log(strivify) : console.log("Strive", + strivify) 
// if (_checkstrive.includes("Strive")) {

//     return console.log(strivify)
// }
// else {
//     return console.log("Strive"+ strivify)

// }

// }
// strivify("I am Strive");

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
// const check3and7 = function (numberpositive) {
//     if (numberpositive % (3 || 7)) {
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// } 

// check3and7(78);
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverse(reverseString){
    let reversed = "";    
    for (var i = reverseString.length - 1; i >= 0; i--){        
      reversed += reverseString[i];
    }    
    return console.log(reversed)
  }
reverse("Hello");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
// */
// const upperFirst =  function (capitiliseLetter) {
    
// for (let myvar= capitiliseLetter.toUpparCase[0]; i>5; i++){

// }
    
//     return console.log(capitiliseLetter)
// }

// upperFirst("i am anot goot");
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(max) {
    let givennumber = Math.floor(Math.random() * Math.floor(max))
    return console.log(givennumber)
  }
  giveMeRandom (12);