// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'




function pyramid(n) {
    const colNos = n +(n-1);
    let midPoint = Math.floor(colNos/2);
    
    for(let row=0; row < n ;row++){
        let str = "";
        for(let col=0; col< colNos; col++){
            if(midPoint - row <=col && midPoint+row >=col){
                str = str + "#";
            }else{
                str = str + "*";
            }
        }
        console.log(str);
    }
}


function pyramidNew(n) {
    const colNos = n +(n-1);
    
    for(let row=0; row < n ;row++){
        let str = "";
        let spacesToLeave = n - (row+1);
        for(let col=0; col< colNos; col++){
            if(col < spacesToLeave || col > (colNos-spacesToLeave)){
                str = str + "*";
            }else{
                str = str + "#";
            }
        }
        console.log(str);
    }
}

function pyramidWithRepeat(n){
    const colNos = n +(n-1);
    for(let row=0; row < n ;row++){
        let str = "";
        let spacesToLeave = n - (row+1);
        let emptyStr = " ".repeat(spacesToLeave);
        let poundNos = colNos - 2* spacesToLeave;
        let poundStr = "#".repeat(poundNos);
        console.log(emptyStr+poundStr+emptyStr);
    }
}



pyramid(4);

module.exports = pyramid;
