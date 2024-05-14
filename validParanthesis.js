//Check Valid Parentheses with a Stack


function validParanthesis(str){
	const stack = [];
  const mapObj = {
  	"}":"{",
    ")":"(",
    "]":"["
  }
  
  const closingBrackets = Object.keys(mapObj);
  const openingBrackets = Object.values(mapObj);
  
  for(let char of str){
  	if(openingBrackets.includes(char)){
    	stack.push(char);
    }else if(closingBrackets.includes(char) 
    	&& stack[stack.length-1] === mapObj[char]){
    	stack.pop();
    }else{
    	return false;
    }
  }
  return stack.length === 0
}

const str = "({}[])";

console.log(validParanthesis(str));
