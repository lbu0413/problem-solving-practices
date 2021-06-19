function solution1(a) {
	let answer;
	let max = Number.MIN_SAFE_INTEGER;
	for (let i of a) {
		let sum = i
			.toString()
			.split("")
			.reduce((a, b) => a + parseInt(b), 0);
		if (sum > max) {
			max = sum;
			answer = i;
		}
		if (sum === max) {
			if (i > answer) {
				answer = i;
			}
		}
	}
	return answer;
}

let a1 = [128, 460, 603, 40, 521, 137, 123];
console.log("solution1: ", solution1(a1));

function isPrime(num) {
	if (num === 1) return false;
	for (let i = 2; i <= Math.floor(num / 2); i++) {
		if (num % i === 0) return false;
	}
	return true;
}
function solution2(a) {
	let answer = [];
	for (let i of a) {
		let res = 0;
		while (i) {
			let t = i % 10;
			res = res * 10 + t;
			i = parseInt(i / 10);
		}
		if (isPrime(res)) answer.push(res);
	}
	return answer;
}

let a2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log("solution2: ", solution2(a2));

function solution3(a, b) {
	let tests = a.length;
	let students = a[0].length;
	let answer = 0;
	for (let i = 1; i <= students; i++) {
		for (let j = 1; j <= students; j++) {
			let mentor = (mentee = 0);
			let count = 0;
			for (let k = 0; k < tests; k++) {
				for (let s = 0; s < students; s++) {
					if (a[k][s] === i) mentor = s;
					if (a[k][s] === j) mentee = s;
				}
				if (mentor < mentee) count++;
			}
			if (count === b) answer++;
		}
	}
	return answer;
}

let a3 = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];

let b3 = 3;
console.log("solution3: ", solution3(a3, b3));

function solution4(m, a) {
	let answer = 0;
	a.sort((c, d) => c[0] + c[1] - (d[0] + d[1]));
	for (let i = 0; i < a.length; i++) {
		let moneyLeft = m - (a[i][0] / 2 + a[i][1]);
		let count = 1;
		for (let j = 0; j < a.length; j++) {
			if (i !== j && a[j][0] + a[j][1] <= moneyLeft) {
				moneyLeft -= a[j][0] + a[j][1];
				count++;
			} else continue;
		}
		answer = count;
	}
	return answer;
}

let a4 = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];

console.log("solution4: ", solution4(28, a4));

function solution5(k, a) {
	let set = new Set();
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			for (let k = j + 1; k < a.length; k++) {
				set.add(a[i] + a[j] + a[k]);
			}
		}
	}
	let answer = Array.from(set);
	answer.sort((a, b) => b - a);
	return answer[k - 1];
}

let a5 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log("solution5: ", solution5(3, a5));
