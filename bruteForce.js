// Brute Force

// 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// function solution1(arr) {
// 	let answer;
// 	let max = Number.MIN_SAFE_INTEGER;
// 	for (let i of arr) {
// 		let temp = i;
// 		let sum = 0;

// 		while (temp) {
// 			sum += temp % 10;
// 			temp = parseInt(temp / 10);
// 		}
// 		if (sum > max) {
// 			max = sum;
// 			answer = i;
// 		}
// 		if (sum === max) {
// 			if (i > answer) answer = i;
// 		}
// 	}
// 	return answer;
// }

// let arr1 = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution1(arr1));

// another solution for Q1.
function solution1(arr) {
	let answer;
	let max = Number.MIN_SAFE_INTEGER;
	for (let i of arr) {
		let sum = i
			.toString()
			.split("")
			.reduce((a, b) => a + parseInt(b), 0);
		if (sum > max) {
			max = sum;
			answer = i;
		}
		if (sum === max) {
			if (i > answer) answer = i;
		}
	}
	return answer;
}

let arr1 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution1(arr1));

// 뒤집은 소수
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
// 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
// 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1
// 23 2 73 2 3
function isPrime(num) {
	if (num === 1) return false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

function solution2(arr) {
	let answer = [];
	for (let i of arr) {
		let sum = 0;
		let temp = i;
		while (i) {
			temp = i % 10;
			sum = sum * 10 + temp;
			i = parseInt(i / 10);
		}
		if (isPrime(sum)) answer.push(sum);
	}
	return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr2));
