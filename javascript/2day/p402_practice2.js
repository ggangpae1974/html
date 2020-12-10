//스크립트 
'use strict';
const array = new Array(5);
let i = 0;
while(i <array.length) {
  let tmp = prompt('임의의 정수를 입력하세요');
  if(!isNaNparseInt(tmp) != NaN){
    array[i++] = tmp;
  }else {
    alert('정수를 입력하세요!')
  }
}
console.log(array);
console.log(array.reverse());