function solution1(a, b) {
	let answer = [];
	let p1 = (p2 = 0);
	let n = a.length;
	let m = b.length;
	while (p1 < n && p2 < m) {
		if (a[p1] <= b[p2]) answer.push(a[p1++]);
		else answer.push(b[p2++]);
	}
	while (p1 < n) {
		answer.push(a[p1++]);
	}
	while (p2 < m) {
		answer.push(b[p2++]);
	}
	return answer;
}

let a1 = [1, 3, 5];
let b1 = [2, 3, 6, 7, 9];
console.log("solution1: ", solution1(a1, b1));

function solution2(a, b) {
	a2.sort();
	b2.sort();
	let answer = [];
	let p1 = (p2 = 0);
	while (p1 < a.length && p2 < b.length) {
		if (a[p1] === b[p2]) answer.push(a[p1++]);
		else if (a[p1] < b[p2]) p1++;
		else p2++;
	}
	return answer;
}

let a2 = [1, 3, 9, 5, 2];
let b2 = [3, 2, 5, 7, 8];
console.log("solution2: ", solution2(a2, b2));

function flatten(a) {
	let newArray = [];
	a = a.join("");
	for (let i of a) {
		if (i === ",") {
			continue;
		}
		if (!isNaN(i)) {
			i = Number(i);
			newArray.push(i);
		} else newArray.push(i);
	}
	return newArray;
}

const arr = [1, 2, [3, [4, 5], 6, 7], "a", ","];
console.log("flatten: ", flatten(arr));
