function stepsWithRepeat(n) {
    for (let count = 1; count <= n; count++) {
        console.log('#'.repeat(count) + ' '.repeat(n - count));
    }
}

function stepsWithRecursion(n,row =0, stair= ""){
    if(row === n){
        return;
    }
    if(n === stair.length){
        console.log(stair);
        stair = "";
        stepsWithRecursion(n,row+1);
        return;
    }
    
    if(stair.length <= row){
        stair = stair + "#";
        stepsWithRecursion(n,row,stair);
    }else{
        stair = stair + " ";
        stepsWithRecursion(n,row,stair);
    }
}
