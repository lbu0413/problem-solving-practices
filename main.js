// 1. Given 3 numbers as input, find the smallest number.

// - given 3 numbers that are less than 100.
// - Print the smallest number
// - input example: 6, 5, 11
// - output example: 5

function solution1(a, b, c){
    let answer;
    if(a > b) answer = a;
    else answer = b;
    if(c > answer) answer = c;
    return answer;
}
console.log(solution1(6, 5, 11))

// 2. Can you make a triangle?

// - given 3 lines that have different lengths, if you can make a triangle with the 3 lines, print 'True' else, 'False'.
// - the sum of the lengths of two sides of a triangle is always greater than the length of the third side.
// - input example: 6, 7, 11
// - output example: true
// - input example2: 13, 33, 17
// - output example2: false

function solution2(a, b, c){
    let sum = a + b + c;
    let max = Math.max(a, b, c);
    if(sum - max > max) return true
    else return false
}
console.log(solution2(6, 7, 11))
console.log(solution2(13, 33, 17))