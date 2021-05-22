// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
// 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.
// ▣ 입력예제 1
// 3
// 1 3 5
// 5
// 2 3 6 7 9
// ▣ 출력예제 1
// 1 2 3 3 5 6 7 9

function solution(a, b) {
	let p1 = (p2 = 0);
	let answer = [];
	while (p1 < a.length && p2 < b.length) {
		if (a[p1] < b[p2]) answer.push(a[p1++]);
		else answer.push(b[p2++]);
	}
	while (p1 < a.length) answer.push(a[p1++]);
	while (p2 < b.length) answer.push(b[p2++]);
	return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 공통원소 구하기
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
// 그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
// 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
// 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
// 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
// 각 집합의 원소는 1,000,000,000이하의 자연수입니다.
// ▣ 출력설명
// 두 집합의 공통원소를 오름차순 정렬하여 출력합니다.
// ▣ 입력예제 1
// 5
// 1 3 9 5 2
// 5
// 3 2 5 7 8
// ▣ 출력예제 1
// 2 3 5

function solution2(c, d) {
	c.sort();
	d.sort();
	let p1 = (p2 = 0);
	let answer = [];
	while (p1 < c.length && p2 < d.length) {
		if (c[p1] === d[p2]) answer.push(c[p1]);
		if (c[p1] < d[p2]) p1++;
		else p2++;
	}
	return answer;
}

let c = [1, 3, 9, 5, 2];
let d = [3, 2, 5, 7, 8];
console.log(solution2(c, d));

// 연속 부분수열 1
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을
// 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 1 2 1 3 1 1 1 2
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
// 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1
// 8 6
// 1 2 1 3 1 1 1 2
// ▣ 출력예제 1
// 3

function solution3(m, arr) {
	let left = 0;
	let answer = 0;
	let sum = 0;
	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		if (sum === m) answer++;
		while (sum > m) {
			sum -= arr[left++];
			if (sum === m) answer++;
		}
	}
	return answer;
}

let arr3 = [1, 2, 1, 3, 1, 1, 1, 2];
console.log("solution3:", solution3(6, arr3));
