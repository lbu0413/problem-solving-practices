function solution1(a) {
	let answer = [];
	answer.push(a[0]);
	for (let i = 1; i < a.length; i++) {
		if (a[i] > a[i - 1]) answer.push(a[i]);
	}
	return answer;
}

let arr1 = [7, 3, 9, 5, 6, 12];
console.log("solution1: ", solution1(arr1));

function solution2(a) {
	let count = 1;
	let tallest = a[0];
	for (let i = 1; i < a.length; i++) {
		if (a[i] > tallest) {
			tallest = a[i];
			count++;
		}
	}
	return count;
}

let arr2 = [130, 135, 148, 140, 145, 150, 150, 153];
console.log("solution2: ", solution2(arr2));

function solution3(a, b) {
	let answer = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) answer.push("D");
		else if (a[i] === 1 && b[i] === 3) answer.push("A");
		else if (a[i] === 2 && b[i] === 1) answer.push("A");
		else if (a[i] === 3 && b[i] === 2) answer.push("A");
		else answer.push("B");
	}
	return answer;
}

let a3 = [2, 3, 3, 1, 3];
let b3 = [1, 1, 2, 2, 3];
console.log("solution3: ", solution3(a3, b3));

function solution4(a) {
	let answer = 0;
	let count = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === 1) {
			count += 1;
		} else count = 0;
		answer += count;
	}
	return answer;
}

let a4 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log("solution4: ", solution4(a4));

function solution5(a) {
	let answer = Array.from({ length: a.length }, () => 1);
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length; j++) {
			if (a[i] < a[j]) answer[i]++;
		}
	}
	return answer;
}

let a5 = [87, 89, 92, 100, 76];
console.log(solution5(a5));

function solution6(a) {
	let answer = Number.MIN_SAFE_INTEGER;
	let sum1 = (sum2 = 0);
	let n = a.length;
	for (let i = 0; i < n; i++) {
		sum1 = sum2 = 0;
		for (j = 0; j < n; j++) {
			sum1 += a[i][j];
			sum2 += a[j][i];
		}
		answer = Math.max(answer, sum1, sum2);
	}
	sum1 = sum2 = 0;
	for (let i = 0; i < n; i++) {
		sum1 += a[i][i];
		sum2 += a[i][n - i - 1];
	}
	answer = Math.max(answer, sum1, sum2);
	return answer;
}

let a6 = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];

console.log("solution6: ", solution6(a6));

function solution7(a) {
	let count = 0;
	let n = a.length;
	let dx = [0, -1, 0, 1];
	let dy = [1, 0, -1, 0];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let flag = 1;
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if (nx >= 0 && nx < n && ny >= 0 && ny < n && a[nx][ny] >= a[i][j]) {
					flag = 0;
					break;
				}
			}
			if (flag) count++;
		}
	}

	return count;
}
let a7 = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];
console.log("solution7: ", solution7(a7));
