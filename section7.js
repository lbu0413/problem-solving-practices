//선택정렬

function solution(arr) {
	let answer = arr;
	for (let i = 0; i < arr.length - 1; i++) {
		let idx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[idx]) idx = j;
		}
		[arr[i], arr[idx]] = [arr[idx], arr[i]];
	}
	return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log("solution1: ", solution(arr));

// 버블정렬

function solution2(arr) {
	let answer = arr;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return answer;
}
let arr2 = [13, 5, 11, 7, 23, 15];
console.log("solution2: ", solution2(arr2));

function solution3(arr) {
	let answer = arr;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > 0 && arr[j + 1] < 0) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return answer;
}

let arr3 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log("solution3", solution3(arr3));

function solution4(arr) {
	let answer = arr;
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return answer;
}

let arr4 = [11, 7, 5, 6, 10, 9];
console.log("solution4: ", solution4(arr4));
