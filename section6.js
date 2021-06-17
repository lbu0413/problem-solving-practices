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

// 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인
// 이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 5 x 5 크기의 예시입니다). 각 격자 칸에
// 는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 1 x 1 크기의 격자
// 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 게임 사용자는 크레인을
// 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 집어 올린 인
// 형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩
// 니다. 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습
// 입니다.
// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구
// 니에서 사라지게 됩니다. 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면
// 같은 모양 인형 두 개가 없어집니다.
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동
// 시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을
// 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)
// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위
// 치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진
// 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나
// 타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
// ▣ 입력예제 1
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열
// [1,5,3,5,1,2,1,4] //moves 배열
// ▣ 출력예제 1
// 4

function solution3(a, b) {
	let stack = [];
	let answer = 0;
	b.forEach((pos) => {
		for (let i = 0; i < a.length; i++) {
			if (a[i][pos - 1] !== 0) {
				let doll = a[i][pos - 1];
				a[i][pos - 1] = 0;
				if (doll === stack[stack.length - 1]) {
					stack.pop();
					answer += 2;
				} else stack.push(doll);
				break;
			}
		}
	});
	return answer;
}

let board = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log("solution3: ", solution3(board, moves));

// 후위식 연산(postfix)
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
// ▣ 출력설명
// 연산한 결과를 출력합니다.
// ▣ 입력예제 1
// 352+*9-
// ▣ 출력예제 1
// 12

function solution4(s) {
	let stack = [];
	let answer;
	for (let i of s) {
		if (!isNaN(i)) {
			stack.push(Number(i));
		} else {
			let right = stack.pop();
			let left = stack.pop();
			if (i === "+") stack.push(left + right);
			if (i === "-") stack.push(left - right);
			if (i === "*") stack.push(left * right);
			if (i === "/") stack.push(left / right);
		}
	}
	answer = stack[0];
	return answer;
}

let s4 = "352+*9-";
console.log("solution4: ", solution4(s4));

// 쇠막대기
function solution6(a) {
	let answer = 0;
	let stack = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] === "(") {
			stack.push(a[i]);
		} else {
			stack.pop();
			if (a[i - 1] === "(") answer += stack.length;
			else answer += 1;
		}
	}
	return answer;
}
let str6 = "()(((()())(())()))(())";
console.log("solution6: ", solution6(str6));

//공주구하기

function solution7(a, b) {
	let answer;
	let queue = Array.from({ length: a }, (v, i) => i + 1);
	while (queue.length) {
		for (let i = 1; i < b; i++) queue.push(queue.shift());
		queue.shift();
		if (queue.length === 1) answer = queue.shift();
	}
	return answer;
}

console.log("solution7: ", solution7(8, 3));

// 교육과정설계

function solution8(a, b) {
	let answer = "YES";
	let queue = a.split("");
	for (let i of b) {
		console.log(queue);
		if (queue.includes(i)) {
			if (i !== queue.shift()) return "NO";
		}
	}
	console.log(queue);
	if (queue.length > 0) return "NO";
	return answer;
}

let a = "CBA";
let b = "CBDAGE";

console.log("solution8: ", solution8(a, b));
