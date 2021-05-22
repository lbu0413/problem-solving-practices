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

// 멘토링
// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니
// 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의
// 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서
// 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지
// 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
// 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일
// 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
// 만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이
// 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
// ▣ 출력설명
// 첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
// ▣ 입력예제 1
// 4 3
// 3 4 1 2
// 4 3 2 1
// 3 1 4 2
// ▣ 출력예제 1
// 3
// (3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.

function solution3(arr) {
	let students = arr[0].length;
	let tests = arr.length;
	let answer = 0;
	for (let i = 1; i <= students; i++) {
		for (let j = 1; j <= students; j++) {
			let iScore = 0;
			let jScore = 0;
			let count = 0;
			for (let a = 0; a < tests; a++) {
				for (let b = 0; b < students; b++) {
					if (arr[a][b] === i) iScore = b;
					if (arr[a][b] === j) jScore = b;
				}
				if (iScore < jScore) count++;
			}
			if (count === tests) answer++;
		}
	}
	return answer;
}

let arr3 = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];
console.log(solution3(arr3));
