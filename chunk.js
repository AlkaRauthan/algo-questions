// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const mainArray = [];
    let subArray = [];
    for(let value of array){
        if(subArray.length < size){
            subArray.push(value);
        }else{
            mainArray.push(subArray);
            subArray = [];
            subArray.push(value);
        }
    }
    if(subArray.length !== 0){
        mainArray.push(subArray);
    }
    return mainArray;
}


function chunkWithSlice(array, size) {
    const chunked = [];
    for(let i =0; i< size; i = i+size){
        const subArray = array.slice(i,size);
        chunked.push(subArray);
    }
    return chunked;
   
}

const r = chunkWithSlice([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunkWithSlice;
