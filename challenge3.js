// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

const returnEvenNum = (positiveNumbers) => {
    return positiveNumbers.filter(even => {
        return even % 2 === 0;
    })
}
console.log(returnEvenNum(positiveNumbers));
