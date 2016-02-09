'use strict';

// let binary = '10010010012'; // code for 104
// var digit = parseInt(binary, 2); // Convert String or Digit from binary to decimal
// console.log(digit);


// example from Stack Overflow... not sure how it works
let palindrome = function(str) {
/* remove special characters, spaces and make lowercase*/
let removeChar = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();

/* reverse removeChar for comparison*/
let checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if str is a Palindrome*/
return (removeChar === checkPalindrome);
};

palindrome();




// // another example from Stack Overflow
// function checkPalindrom(str) {
//     return str === str.split('').reverse().join('');
// }




module.exports = () => {
  return true;
};
