// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

const returnEvenNum = (mixedSignNumbers) => {
    return mixedSignNumbers.filter(even => {
        return even % 2 === 0;
    })
}
console.log(returnEvenNum(mixedSignNumbers));