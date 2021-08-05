// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapForStringA = getMapObjectForString(stringA);
    const mapForStringB = getMapObjectForString(stringB);
    const lenEqual = Object.keys(mapForStringA).length === Object.keys(mapForStringB).length;

    const isEqualRepetition = Object.keys(mapForStringA).every((key) => {
       return mapForStringA[key] === mapForStringB[key];
    });

    return lenEqual && isEqualRepetition;
}

function getMapObjectForString(inputString){
    var mapObj = {};
    const regex = /[a-z]/;
    inputString = inputString.toLowerCase();
    for(let char of inputString){
        const isValid = regex.test(char);
        if(isValid && mapObj[char]){
            mapObj[char]++
        }else if(isValid){
            mapObj[char] = 1;
        }
    }
    return mapObj;
}

anagrams('rail safety', 'fairy tales');

module.exports = anagrams;
