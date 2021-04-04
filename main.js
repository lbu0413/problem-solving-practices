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
console.log(solution2(6, 7, 11))
console.log(solution2(13, 33, 17))

function solution2(a, b, c){
    let sum = a + b + c;
    let max = Math.max(a, b, c);
    if(sum - max > max) return true
    else return false
}

//  3. How many dozens?

// - A dozen of pencils is 12 pencils. You need to give out one pencil to each student. Given N students, calculate how many dozens of pencils is needed.
// - input example: 25
// - output example: 3
// - input example2: 178
// - output example2: 15

function solution3 (n) {
    let answer;
    answer = Math.ceil(n / 12)
    return answer;
}

console.log(solution3(25));

// 4. Find the sum

// - Given N( a natural number), find the sum from 1 to N.
// - input example : 6
// - output example: 21
// - input example2: 10
// - output example2: 55

function solution4(n) {
    let answer = 0;
    for(i = 1; i <= n; i++){
        answer += i;
    }
    return answer;
}
console.log(solution4(55))

// 5. Find the minimum

// - Given an array of 7 numbers (could be bigger than 7), find the minimum number.
// - input example: [5, 7, 1, 3, 2, 9, 11]
// - output example: 1

function solution5(arr){
    let answer;
    answer = Math.min(...arr);
    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution5(arr))


// 6. Find the sum AND Find the min

// - given an array of 7 numbers, find the sum of every odd number in the array and find the minimum among the odd numbers.
// - input example: [12, 77, 38, 41, 53, 92, 85];
// - output example: 77 + 41 + 53 + 85 = 256
// - output example: 41 < 53 < 77 < 85

function solution6(arr2) {
    let answer = [], sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i of arr2) {
        if(i % 2 === 1){
            sum += i;
            if(i < min) min = i;
        }
    }
    answer.push(sum, min);
    return answer;
}

let arr2 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution6(arr2))

// 7.  10부제

// - 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일 27일에 운행하지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
// - 당신은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
// - 입력예제: day = 3, cars = [25, 23, 11, 47, 53, 17, 33]
// - 출력예제:  3 (23, 33, 53)

function solution7(day, cars){
    let answer = 0;
    for(let i of cars){
        if(i % 10 === day){
            answer++;
        }
    }
    return answer;

}
let day = 3;
let cars = [25, 23, 11, 47, 53, 17, 33];
console.log(solution7(day, cars))