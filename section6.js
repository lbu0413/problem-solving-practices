// 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// ▣ 입력설명
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
// ▣ 출력설명
// 첫 번째 줄에 YES, NO를 출력한다.
// ▣ 입력예제 1
// (()(()))(()
// ▣ 출력예제 1
// NO

function solution1(s) {
	let stack = [];
	for (let i of s) {
		if (i === "(") stack.push(i);
		else {
			if (stack.length === 0) {
				return "NO";
			}
			stack.pop();
		}
	}
	if (stack.length > 0) return "NO";
	return "YES";
}

let s = "(())()()())(";
console.log("solution1", solution1(s));

// 괄호문자제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는
// 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 남은 문자만 출력한다.
// ▣ 입력예제 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 출력예제 1
// EFLM

function solution2(s) {
	let answer;
	stack = [];
	for (let i of s) {
		if (i === ")") {
			while (stack.pop() !== "(");
		} else stack.push(i);
	}
	answer = stack.join("");
	return answer;
}

let s2 = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log("solution2", solution2(s2));
