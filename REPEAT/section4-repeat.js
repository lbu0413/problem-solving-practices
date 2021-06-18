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
