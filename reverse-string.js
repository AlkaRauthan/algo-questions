function reverse(str) {
    const len = str.length;
    const charArr = [];
    for(let i= len; i >= 0 ; i--){
        charArr.push(str[i]);
    }
    return charArr.join("");
}

function reverseWithSplit(str) {
    const array = str.split("");
    const reverseArray = array.reverse();
    return reverseArray.join("");
}

function reverseWithForOf(str) {
    let reversed = "";
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

function reverseWithReduce(str){
    const array = str.split("");
    return array.reduce((reversed, char) => {
        return  char + reversed;
    },"")
}


module.exports = reverse;
