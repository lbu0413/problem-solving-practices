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

// 8. 일곱 난쟁이

// - 왕비를 피해 일곱 난쟁이 들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명 이었던 것이다. 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행히도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다. 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
// - 입력설명
//     - 아홉 개의 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수 이며, 아홉 난쟁이의 키는 모두 다르다. 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// - 입력예제: 20, 7, 23, 19, 10, 15, 25, 8, 13
// - 출력예제: 20, 7, 23, 19, 10, 8, 13

function solution8(arr8) {
    let answer = arr8;
    let sum = arr8.reduce((a, b) => a + b);
    for(let i = 0; i < arr8.length - 1; i++){
        for(let j = 1; j < arr8.length; j++){
            if(sum - (arr8[i] + arr8[j]) === 100){
                arr8.splice(j, 1)
                arr8.splice(i, 1)
            }
        }
    }
    return answer;
}
let arr8 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution8(arr8))


// 9. Replace 'A' with '#'

// - Given an uppercase word(all capital letters), if the word has 'letter A', replace 'A' with '#'.
// - input example: 'BANANA'
// - output example: 'B#N#N#'

function solution9(str9) {
    let answer = "";
    for(let i of str9){
        if(i === 'A') answer += '#';
        else answer += i;
    }
    return answer;
}

let str9 = 'BANANA';
console.log(solution9(str9));

// 10. Finding letter

// - Given a string and a letter, calculate how many times the letter occur in the string.
// - input example: 'COMPUTERPROGRAMMING', 'R'
// - output example: 3

function solution10 (str10, letter10) {
    let sum = 0;
    for(let i of str10){
        if(i === letter10) sum++;
    }
    return sum;
}
let str10 = 'COMPUTERPROGRAMMING';
let letter10 = 'R';
console.log(solution10(str10, letter10))

// 11. Find all uppercase letters

// - Given a string, calculate how many uppercase letters are in the string.
// - input example: 'UnitedStatesofAmerica'
// - output example: 3

function solution11(str){
    let answer = 0;
    for(let i of str){
        if(i === i.toUpperCase()) answer++;
    }
    return answer;
}
let str = 'UnitedStatesofAmerica'
console.log(solution11(str));

// 12. Upper to Lower, Lower to Upper

// - Given a string that contains both uppercase and lowercase letters, convert all uppercase letters to lowercase, all lowercase letters to upper.
// - input example: 'ItisTimeToStudy'
// - output example: 'iTIStIMEtOsTUDY'

function solution12(str12){
    let answer = "";
    for(let i of str12){
        if(i === i.toUpperCase()){
            answer += i.toLowerCase();
        }
        else{
            answer += i.toUpperCase();
        }
    }
    return answer;
}
let str12 = 'ItisTimeToStudy';
console.log(solution12(str12));