function solution1(x) {
	return parseFloat(x.toString().split("").reverse().join(""));
}

console.log("solution1:", solution1(32243));

function solution2(x) {
	if (x === x.split("").reverse().join("")) return true;
	else return false;
}

console.log("solution2:", solution2("madam"));

function solution3(x) {
	let answer = [];
	for (let i = 0; i < x.length; i++) {
		for (let j = i + 1; j < x.length + 1; j++) {
			answer.push(x.slice(i, j));
		}
	}
	return answer;
}

console.log("solution3: ", solution3("dog"));

function solution4(x) {
	// return x.split("").sort().join("");
	return [...x].sort().join("");
}

console.log("solution4: ", solution4("webmaster"));

function solution5(x) {
	let answer = x.split(" ");
	for (let i = 0; i < answer.length; i++) {
		answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].slice(1);
	}
	return answer.join(" ");
}
console.log("solution5: ", solution5("the quick brown fox"));

function solution6(x) {
	let answer = x.split(" ");
	let max = answer[0].length;
	for (let i = 1; i < answer.length; i++) {
		if (max < answer[i].length) {
			max = answer[i];
		}
	}
	return max;
}

console.log("solution6: ", solution6("Web Development Tutorial"));

function solution7(x) {
	return x
		.toLowerCase()
		.split("")
		.filter((letter) => "aeiou".includes(letter)).length;
}

console.log("solution7: ", solution7("The quick brown fox"));
