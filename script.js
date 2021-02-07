'use strict';

function randomEvenInt(min, max) {
   return (min + Math.floor(Math.random() * (max - min)) | 1);
}

console.log(randomEvenInt( 1, 100));
console.log(randomEvenInt( 0, -10));
console.log(randomEvenInt( -7, -3));
console.log(randomEvenInt( -100, 100));
console.log(randomEvenInt( 1, -1));
   
