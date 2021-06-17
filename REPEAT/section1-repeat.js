function solution1(a, b, c) {
	return Math.min(a, b, c);
}

console.log("solution1: ", solution1(6, 5, 11));

function solution2(a, b, c) {
	let greatest = Math.max(a, b, c);
	if (a + b + c - greatest > greatest) return "YES";
	else return "NO";
}

console.log("solution2: ", solution2(6, 7, 11));

function solution3(a) {
	return Math.ceil(a / 12);
}

console.log("solution3: ", solution3(12));

function solution4(a) {
	let answer = 0;
	for (let i = 1; i <= a; i++) {
		answer += i;
	}
	return answer;
}

console.log("solution4: ", solution4(10));

function solution5(arr) {
	return Math.min(...arr);
}
let arr5 = [5, 3, 7, 11, 2, 15, 17];
console.log("solution5: ", solution5(arr5));

function solution6(arr) {
	let sum = 0;
	let min = Number.MAX_SAFE_INTEGER;
	let answer = [];
	for (let i of arr) {
		if (i % 2 !== 0) {
			sum += i;
			if (i < min) min = i;
		}
	}
	answer.push(sum, min);
	return answer;
}
let arr6 = [12, 77, 38, 41, 53, 92, 85];
console.log("solution6: ", solution6(arr6));

function solution7(a, b) {
	let count = 0;
	for (let i of b) {
		if (i % 10 === a) count++;
	}
	return count;
}
let a = 3;
let arr7 = [25, 23, 11, 47, 53, 17, 33];
// let a = 0;
// let arr7 = [12, 20, 54, 30, 87, 91, 30];
console.log("solution7: ", solution7(a, arr7));

function solution8(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (sum - (arr[i] + arr[j]) === 100) {
				arr.splice(j, 1);
				arr.splice(i, 1);
			}
		}
	}
	return arr;
}

let arr8 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log("solution8 :", solution8(arr8));

function solution9(a) {
	return a.replace(/A/g, "#");
}

console.log("solution9: ", solution9("BANANA"));

function solution10(a, b) {
	let count = 0;
	for (let i of a) {
		if (i === b) count++;
	}
	return count;
}

let str10 = "COMPUTERPROGRAMMING";
let a10 = "R";
console.log("solution10: ", solution10(str10, a10));

function solution11(a) {
	let count = 0;
	for (let i of a) {
		if (i === i.toUpperCase()) count++;
	}
	return count;
}

console.log("solution11: ", solution11("KoreaTimeGood"));

function solution12(a) {
	return a.toUpperCase();
}

let str12 = "ItisTimeToStudy";
console.log("solution12: ", solution12(str12));

function solution13(a) {
	let answer = "";
	for (let i of a) {
		if (i === i.toUpperCase()) answer += i.toLowerCase();
		else answer += i.toUpperCase();
	}
	return answer;
}

let str13 = "StuDY";
console.log("solution13: ", solution13(str13));

function solution14(a) {
	let max = 0;
	let answer;
	for (let i of a) {
		if (i.length > max) {
			max = i.length;
			answer = i;
		}
	}
	return answer;
}

let arr14 = ["teacher", "time", "student", "beautiful", "good"];
console.log("soltuion14", solution14(arr14));

function solution15(a) {
	let answer;
	let mid = Math.floor(a.length / 2);
	if (a.length % 2 === 1) answer = a.substr(mid, 1);
	else answer = a.substr(mid - 1, 2);
	return answer;
}

let str15 = "study";
console.log("solution15: ", solution15(str15));

function solution16(a) {
	let answer = "";
	for (let i = 0; i < a.length; i++) {
		if (i === a.indexOf(a[i])) {
			answer += a[i];
		}
	}
	return answer;
}

console.log("solution16: ", solution16("ksekkset"));

// function solution17(a) {
// 	let set = new Set(arr17);
// 	return Array.from(set);
// }

// let arr17 = ["good", "time", "good", "time", "student"];
// console.log("solution17: ", solution17(arr17));

function solution17(a) {
	let answer = [];
	for (let i = 0; i < a.length; i++) {
		if (i === a.indexOf(a[i])) answer.push(a[i]);
	}
	return answer;
}

let arr17 = ["good", "time", "good", "time", "student"];
console.log("solution17: ", solution17(arr17));
