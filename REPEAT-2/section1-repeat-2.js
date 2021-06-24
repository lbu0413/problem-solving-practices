function solution13(a) {
	let answer = "";
	for (let i of a) {
		if (i === i.toUpperCase()) {
			answer += i.toLowerCase();
		} else {
			answer += i.toUpperCase();
		}
	}
	return answer;
}

let a13 = "StuDY";
console.log("solution13: ", solution13(a13));
