// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversedStr = getReversedString(str);
    return reversedStr === str;
}

function optimizedPalindrome(str){
    const len = str.length;
    const splitArray = str.split("");

    return splitArray.every((char,i) => {
        return char === str[len - i - 1 ];
    })
}

function getReversedString(str){
    const splitArray = str.split("");
    return splitArray.reduce((rev,char) => char + rev ,"");
}


module.exports = optimizedPalindrome;
