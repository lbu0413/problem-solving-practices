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
