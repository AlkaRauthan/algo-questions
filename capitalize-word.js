// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const array = str.split(" ");
    const newArray = [];
    for(let shortString of array){
        const charArr = shortString.split("");
        charArr[0] = charArr[0].toUpperCase();
        const str = charArr.join("");
        newArray.push(str);
    }
    return newArray.join(" ");
}
capitalize('a short sentence');

module.exports = capitalize;
