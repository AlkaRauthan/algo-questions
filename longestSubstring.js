// find the longest substring without repeating characters

function longestSubstring(str){
	let longestSubstring = "";
  let currentWord = "";
  for(const char of str){
  const foundIndex = currentWord.indexOf(char);
  //if char is repeating we will assign current word to longest string
  //and string before foundIndex would be cut off
  	if(foundIndex > -1){
    		if(longestSubstring.length < currentWord.length){
        	longestSubstring = currentWord; 
        } 
        currentWord = currentWord.slice(foundIndex+1); 
    }
     currentWord += char;
  }
  
  return longestSubstring.length < currentWord.length ? currentWord : longestSubstring;

}

console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("abcdaajkljl"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("ysbghjjrfumqjpyktddsnxftvdqgxzlvrneaynufhgyqxwaqzelmbsiyxaubrqvguvehpmrykhvikkqzwttg"));
