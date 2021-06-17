//선택정렬

function solution1(a) {
	let answer = a;
	for (let i = 0; i < a.length - 1; i++) {
		let idx = i;
		for (let j = i + 1; j < a.length; j++) {
			if (a[j] < a[idx]) idx = j;
		}
		[a[i], a[idx]] = [a[idx], a[i]];
	}

	return answer;
}

let a = [13, 5, 11, 7, 23, 15];
console.log("solution1: ", solution1(a));
