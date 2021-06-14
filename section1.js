// 세 수 중 최솟값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

function solution1(a, b, c) {
	return Math.min(a, b, c);
}

console.log("solution1 :", solution1(6, 5, 11));

// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1
// 6 7 11
// ▣ 출력예제 1
// YES
// ▣ 입력예제 1
// 13 33 17
// ▣ 출력예제 1
// NO

function solution2(a, b, c) {
	let max = Math.max(a, b, c);
	if (max < a + b + c - max) return "YES";
	else return "NO";
}

console.log("solution2: ", solution2(6, 7, 11));

// 연필 개수
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
// 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.
// ▣ 입력예제 1
// 25
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2
// 178
// ▣ 출력예제 2
// 15

function solution3(s) {
	return Math.ceil(s / 12);
}

console.log("solution3: ", solution3(178));

// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// ▣ 입력예제 1
// 6
// ▣ 출력예제 1
// 21
// ▣ 입력예제 2
// 10
// ▣ 출력예제 2
// 55

function solution4(s) {
	let answer = 0;
	for (let i = 1; i <= s; i++) {
		answer += i;
	}
	return answer;
}

console.log("soltuion4: ", solution4(10));

// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2

function solution5(arr) {
	return Math.min(...arr);
}

console.log("solution5: ", solution5([5, 3, 7, 11, 2, 15, 17]));

// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
// 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
// 85이므로 그 합은
// 77 + 41 + 53 + 85 = 256
// 이 되고,
// 41 < 53 < 77 < 85
// 이므로 홀수들 중 최소값은 41이 된다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상
// 반드시 존재한다.
// ▣ 출력설명
// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
// ▣ 입력예제 1
// 12 77 38 41 53 92 85
// ▣ 출력예제 1
// 256
// 41

function solution6(arr) {
	let sum = 0;
	let min = Number.MAX_SAFE_INTEGER;
	for (let i of arr) {
		if (i % 2 !== 0) {
			if (i < min) {
				min = i;
			}
			sum += i;
		}
	}
	return [sum, min];
}

console.log("solution6: ", solution6([12, 77, 38, 41, 53, 92, 85]));

// 10부제
// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는
// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금
// 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하
// 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한
// 다.
// 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고
// 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
// 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자
// 리 숫자가 주어진다.
// ▣ 출력설명
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니
// 다.
// ▣ 입력예제 1
// 3
// 25 23 11 47 53 17 33
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2
// 0
// 12 20 54 30 87 91 30
// ▣ 출력예제 2
// 3

function solution7(a, b) {
	let answer = 0;
	for (let i of b) {
		if (i % 10 === a) {
			answer++;
		}
	}
	return answer;
}

let arr7 = [25, 23, 11, 47, 53, 17, 33];
console.log("solution7: ", solution7(3, arr7));

// 일곱 난쟁이
// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
// 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난
// 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을
// 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시
// 오.
// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,
// 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

function solution8(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (sum - (arr[i] + arr[j]) === 100) {
				arr.splice(i, 1);
				arr.splice(j, 1);
			}
		}
	}
	return arr;
}

let arr8 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution8(arr8));

// A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1
// BANANA
// ▣ 출력예제 1
// B#N#N#

function solution9(s) {
	const answer = s.replace(/A/g, "#");
	return answer;
}

console.log("solution9: ", solution9("BANANA"));

// 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
// 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.
// ▣ 입력설명
// 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
// ▣ 출력설명
// 첫 줄에 해당 문자의 개수를 출력한다.
// ▣ 입력예제 1
// COMPUTERPROGRAMMING
// R
// ▣ 출력예제 1
// 3

function solution10(a, b) {
	let answer = 0;
	for (let i of a) {
		if (i === b) {
			answer++;
		}
	}
	return answer;
}
let a = "COMPUTERPROGRAMMING";
let b = "R";
console.log("solution10: ", solution10(a, b));

// 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자의 개수를 출력한다.
// ▣ 입력예제 1
// KoreaTimeGood
// ▣ 출력예제 1
// 3

function solution11(s) {
	let count = 0;
	for (let i of s) {
		if (i === i.toUpperCase()) count++;
	}
	return count;
}
console.log("solution11: ", solution11("KoreaTimeGood"));

// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력
// 하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자로 통일된 문자열이 출력된다.
// ▣ 입력예제 1
// ItisTimeToStudy
// ▣ 출력예제 1
// ITISTIMETOSTUDY

function solution12(s) {
	return s.toUpperCase();
}
console.log("solution12: ", solution12("ItisTimeToStudy"));

// 대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로
// 변환하여 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
// ▣ 입력예제 1
// StuDY
// ▣ 출력예제 1
// sTUdy

function solution13(s) {
	let answer = "";
	for (let i of s) {
		if (i === i.toUpperCase()) answer += i.toLowerCase();
		else answer += i.toUpperCase();
	}
	return answer;
}

console.log("solution13: ", solution13("StuDY"));

// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// 각 문자열의 길이는 서로 다릅니다.
// ▣ 출력설명
// 첫 줄에 가장 긴 문자열을 출력한다.
// ▣ 입력예제 1
// 5
// teacher
// time
// student
// beautiful
// good
// ▣ 출력예제 1
// beautiful

function solution14(arr) {
	let max = 0;
	let answer;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			max = arr[i].length;
			answer = arr[i];
		}
	}
	return answer;
}

let arr14 = ["teacher", "time", "student", "beautiful", "good"];
console.log("solution14: ", solution14(arr14));

// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
// 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo

function solution15(s) {
	let mid = Math.floor(s.length / 2);
	if (s.length % 2 === 0) {
		return [s[mid - 1], s[mid]].join("");
	} else return s[mid];
}

console.log("solution15: ", solution15("good"));

// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
// 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.
// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
// ▣ 입력예제 1
// ksekkset
// ▣ 출력예제 1
// kset

function solution16(s) {
	let answer = "";
	for (let i = 0; i < s.length; i++) {
		if (i === s.indexOf(s[i])) answer += s[i];
	}
	return answer;
}
console.log("solution16: ", solution16("ksekkset"));

// 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
// ▣ 입력예제 1
// 5
// good
// time
// good
// time
// student
// ▣ 출력예제 1
// good
// time
// student

// function solution17(arr) {
// 	let set = new Set(arr);
// 	let answer = Array.from(set);
// 	return answer.join(", ");
// }

function solution17(arr) {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.indexOf(arr[i])) {
			answer.push(arr[i]);
		}
	}
	return answer;
}

let arr17 = ["good", "time", "good", "time", "student"];
console.log("solution17: ", solution17(arr17));
