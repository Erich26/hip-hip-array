// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const colors = primaries.concat(secondaries);

console.log('combo');
for (value of colors) {
    console.log(value);
}
console.log('primary');
for (value of primaries) {
    console.log(value);
}
console.log('secondary');
for (value of secondaries) {
    console.log(value);
}