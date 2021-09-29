// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

const array = [];

array.push(1);
array.push(3);
array.push(4);
array.unshift(7);
array.unshift(2);

for (const value of array) {
console.log(array);
}