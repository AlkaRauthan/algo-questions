// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   const str = n.toString();
   const reversed = str.split("").reverse().join("");
   return parseInt(reversed) * Math.sign(n);
}
const r = reverseInt(-15);

function reverseInteger(n){

   if(n > 0 && n <= 9){
      return n;
   }
   let reverseNum = 0;
   while(n !==0){
      reverseNum = reverseNum *10 + n % 10;
      n = Math.floor(n/10); 
   }
   return reverseNum

}

console.log(reverseInteger(321));
