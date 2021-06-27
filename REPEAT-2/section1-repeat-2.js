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

function solution15(a) {
	let mid = Math.floor(a.length / 2);
	if (a.length % 2 === 0) {
		answer = a
			.split("")
			.splice(mid - 1, 2)
			.join("");
	} else {
		answer = a.split("").splice(mid, 1).join("");
	}
	return answer;
}

let a15 = "good";
console.log("solution15: ", solution15(a15));

function solution16(a) {
	let answer = "";
	for (let i = 0; i < a.length; i++) {
		if (i === a.indexOf(a[i])) answer += a[i];
	}
	return answer;
}

let a16 = "ksekkset";
console.log("solution16: ", solution16(a16));
