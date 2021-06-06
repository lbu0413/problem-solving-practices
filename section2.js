// 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
// ▣ 출력설명
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
// ▣ 입력예제 1
// 6
// 7 3 9 5 6 12
// ▣ 출력예제 1
// 7 9 6 12

function solution1(arr) {
	let answer = [];
	answer.push(arr[0]);
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) answer.push(arr[i]);
	}
	return answer;
}
let arr1 = [7, 3, 9, 5, 6, 12];
console.log("solution1: ", solution1(arr1));

// 보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
// 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
// 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
// ▣ 입력설명
// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력한다.
// ▣ 입력예제 1
// 8
// 130 135 148 140 145 150 150 153
// ▣ 출력예제 1
// 5

function solution2(arr) {
	let answer = 1;
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			answer++;
			max = arr[i];
		}
	}
	return answer;
}

let arr2 = [130, 135, 148, 140, 145, 150, 150, 153];
console.log("solution2: ", solution2(arr2));

// ### 20. 가위 바위 보

// - A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// - 가위, 바위, 보의 정보는 1: 가위, 2: 바위, 3: 보로 정하겠습니다.
// - 예를 들어 N = 5라면,

// - 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

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

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log("solution3: ", solution3(a, b));

// 점수계산
// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진
// 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기
// 로 하였다. 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가
// 답이 맞는 처음 문제는 1점으로 계산한다. 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째
// 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계
// 산한다.
// 예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경
// 우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는
// 1+1+2+3+1+2=10 점이다.
// 1 0 1 1 1 0 0 1 1 0
// 채점 1 0 1 1 1 0 0 1 1 0
// 점수 1 0 1 2 3 0 0 1 2 0
// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
// ▣ 입력설명
// 첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나
// 타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의
// 답이 맞는 경우이다.
// ▣ 출력설명
// 첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.
// ▣ 입력예제 1
// 10
// 1 0 1 1 1 0 0 1 1 0
// ▣ 출력예제 1
// 10

function solution4(arr) {
	let answer = 0;
	let count = 0;
	for (let i of arr) {
		if (i === 1) {
			count++;
			2;
			answer += count;
			8;
		} else {
			count = 0;
		}
	}
	return answer;
}

let arr4 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log("solution4: ", solution4(arr4));

// 등수구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
// 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데
// 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
// ▣ 출력설명
// 입력된 순서대로 등수를 출력한다.
// ▣ 입력예제 1
// 5
// 87 89 92 100 76
// ▣ 출력예제 1
// 4 3 2 1 5

function solution5(arr) {
	let n = arr.length;
	let answer = Array.from({ length: n }, () => 1);
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) answer[i]++;
		}
	}
	return answer;
}
let arr5 = [87, 89, 92, 100, 76];
console.log("solution5: ", solution5(arr5));

function solution6(arr) {
	let sum1 = (sum2 = 0);
	let answer = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		sum1 = sum2 = 0;
		for (let j = 0; j < arr.length; j++) {
			sum1 += arr[i][j];
			sum2 += arr[j][i];
		}
		answer = Math.max(answer, sum1, sum2);
	}
	sum1 = sum2 = 0;
	for (let i = 0; i < arr.length; i++) {
		sum1 += arr[i][i];
		sum2 += arr[i][arr.length - i - 1];
	}
	answer = Math.max(answer, sum1, sum2);
	return answer;
}

let arr6 = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];
console.log("solution6: ", solution6(arr6));

function solution7(arr) {
	let n = arr.length;
	let answer = 0;
	let dx = [0, 1, 0, -1];
	let dy = [-1, 0, 1, 0];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let flag = 1;
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if (
					nx >= 0 &&
					nx < n &&
					ny >= 0 &&
					ny < n &&
					arr[nx][ny] >= arr[i][j]
				) {
					flag = 0;
					break;
				}
			}
			if (flag) answer++;
		}
	}
	return answer;
}

let arr7 = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];
console.log("solution7:  ", solution7(arr7));
