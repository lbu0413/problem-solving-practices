function solution2(a) {
	let count = 1;
	let max = a[0];
	for (let i = 1; i < a.length; i++) {
		if (a[i] > max) {
			max = a[i];
			count++;
		}
	}
	return count;
}

let a2 = [130, 135, 148, 140, 145, 150, 150, 153];
console.log("solution2: ", solution2(a2));
