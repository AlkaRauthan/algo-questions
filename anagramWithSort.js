
function anagramsWithSort(stringA,stringB){
    return formatString(stringA) === formatString(stringB);

}

function formatString(string){
    return string.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");
}
