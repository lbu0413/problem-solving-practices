// 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
// 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
// ▣ 입력예제 1
// gooG
// ▣ 출력예제 1
// YES

function solution1(s) {
	s = s.toLowerCase();
	let s2 = s.split("").reverse().join("");
	return s === s2;
}

console.log("solution1: ", solution1("gooG"));

// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 'YES' 아니면 'NO'를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들은 무시합니다.

// 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// 출력설명
// 첫번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

// 입력예제1
// found7, time: study; Yduts; emit, 7Dnuof
// 출력예제1
// YES

function solution2(s) {
	s = s.toLowerCase().replace(/[^a-z]/g, "");
	if (s === s.split("").reverse().join("")) {
		return "YES";
	} else {
		return "NO";
	}
}
let str2 = "found7, time: study; Yduts; emit, 7Dnuof";
console.log("solution2: ", solution2(str2));

// 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수로 만들면 1205이 됩니다.
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// 입력예제1
// g0en2T0s8eSoft

// 출력예제1
// 208

// function solution3(s) {
// 	s = parseInt(s.replace(/\D/g, ""));
// 	return s;
// }

function solution3(s) {
	let answer = "";
	for (let i of s) {
		if (!isNaN(i)) {
			answer += i;
		}
	}
	return parseInt(answer);
}

let str3 = "g0en2T0s8eSoft";
console.log("solution3 :", solution3(str3));
