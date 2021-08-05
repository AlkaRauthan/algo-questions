// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for( let index =1 ; index <= n; index++){
        const charArray = [];
        const char = "#";
        for(let count =1; count <= index ; count++){
            charArray.push(char);
        }
        console.log(charArray.join(""));
    }
}

module.exports = steps;
