
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area =  function (parameter1, parameter2) {
    
    areacalculation  = parameter1 * parameter2
    return areacalculation
}
console.log(area(11,12));
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (value1, value2) {

    value1 === value2 ? console.log(value1+value2) : console.log((value1+value2)/3)
    
}
crazySum(5,8);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(givennumber, number19) {
    givennumber < 19 ? console.log(givennumber-number19) : console.log(Math.abs(givennumber-number19)*3)
    
    
}
crazyDiff(25,19);

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

 const boundary = function (integern) {
    
    if ((integern< 100 && integern >20) || integern === 400 ) {
        console.log (true)
    }
    else {
        console.log(false)
    }
 }
 boundary(105);

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (_checkstrive) {
    // _checkstrive.includes("Strive") ? console.log(strivify) : console.log("Strive", + strivify) 
    
    if (_checkstrive.match("Strive")) {

    return console.log(_checkstrive)
}
else {
    return console.log("Strive "+ _checkstrive)

}

}
strivify("I am Hero");

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function (numberpositive) {
    if (numberpositive % (3 || 7)) {
        console.log("yes it is")
    }
    else{
        console.log("nop it is not")
    }
} 

check3and7(78);
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverse(reverseString){
    let stringrevers = reverseString.split("").reverse().join(""); 
    return console.log(stringrevers)
  }
reverse("Hello");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
// */
const capitalize = function (words)  {
    let replacement = words.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return console.log(replacement)
  }
  capitalize("hi, i am here");

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (firstandlast)  {
    let cuttingnow = firstandlast.slice(1,-1);
    return console.log(cuttingnow)
  }
  cutString("hi, i am here");

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(max) {
    let givennumber = Math.floor(Math.random() * 10) + 1  
    return console.log(givennumber)
  }
  giveMeRandom (12);