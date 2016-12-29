// var arr = [3,1,4,2,5];
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.sort(function(a,b){return b-a}));
//
// function _desc (a, b) {
//   return b-a;
// };
//
// console.log(arr.sort(_desc));


var arr = [2,4,6,8,3,5,7,1];
console.log(arr);
console.log(arr.sort());
console.log(arr.sort(function(a, b){return b-a;}));

function desc(a, b) {
  console.log('call back function:', a, b);
  return b-a;
}

console.log(arr.sort(desc));
