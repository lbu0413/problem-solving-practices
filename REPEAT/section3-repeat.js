function solution1(a) {
	let answer = "YES";
	a = a.toLowerCase();
	let n = a.length;
	let mid = Math.floor(a.length / 2);
	for (let i = 0; i < mid; i++) {
		if (a[i] !== a[n - i - 1]) return "NO";
	}
	return "YES";
}

console.log("solution1: ", solution1("gooG"));

function solution2(a) {
	a = a.toLowerCase().replace(/[^a-z]/g, "");
	if (a === a.split("").reverse().join("")) return "YES";
	else return "NO";
}

let a2 = "found7, time: study; Yduts; emit, 7Dnuof";

console.log("solution2: ", solution2(a2));

// function solution3(a) {
// 	let answer = "";
// 	for (let i of a) {
// 		if (!isNaN(i)) {
// 			answer += i;
// 		}
// 	}
// 	return parseInt(answer);
// }

function solution3(a) {
	a = a.replace(/\D/g, "");
	return parseInt(a);
}

let a3 = "g0en2T0s8eSoft";
console.log("solution3: ", solution3(a3));

function solution4(a, b) {
	let count = 0;
	let answer = Array.from({ length: a.length }, () => 0);
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b) count = 0;
		else count += 1;
		answer[i] = count;
	}
	for (let j = a.length - 1; j >= 0; j--) {
		if (a[j] === b) count = 0;
		else count += 1;
		if (count < answer[j]) answer[j] = count;
	}
	return answer;
}

let a4 = "teachermode";
let b4 = "e";
console.log("solution4: ", solution4(a4, b4));

function solution5(a) {
	let answer = "";
	let count = 1;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i + 1]) count += 1;
		else {
			if (count > 1) answer += a[i] + count;
			else answer += a[i];
			count = 1;
		}
	}
	return answer;
}

let a5 = "KKHSSSSSSSE";
console.log("solution5: ", solution5(a5));
