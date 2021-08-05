// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const mapObj = {};
    let maxValue = 0
    let mostRepeatedChar = "";
    for(let char of str){
        if(mapObj[char]){
            mapObj[char]++;
        }else{
            mapObj[char] = 1;
        }
    }
    console.log(mapObj);
    
    for(key in mapObj){
        if(maxValue < mapObj[key]){
            maxValue = mapObj[key];
            mostRepeatedChar = key;
        }
    }
    return mostRepeatedChar;
}
const r  = maxChar("abcccccccd");

module.exports = maxChar;
