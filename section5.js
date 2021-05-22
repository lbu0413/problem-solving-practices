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
console.log("solution:", solution(a, b));

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
console.log("solution2:", solution2(c, d));

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

// 연속 부분수열 2
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
// 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 1 3 1 2 3
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3},
// {1, 3, 1}로 총 10가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
// 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1
// 5 5
// 1 3 1 2 3
// ▣ 출력예제 1
// 10

function solution4(n, arr) {
	let left = 0;
	let answer = 0;
	let sum = 0;
	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		while (sum > n) {
			sum -= arr[left++];
		}
		answer += right - left + 1;
	}
	return answer;
}

let arr4 = [1, 3, 1, 2, 3];
console.log("solution4:", solution4(5, arr4));

// 최대 매출
// 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속
// 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
// 여러분이 현수를 도와주세요.
// ▣ 입력설명
// 첫 줄에 N(5<=N<=100,000)과 M(2<=K<=N)가 주어집니다.
// 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
// ▣ 출력설명
// 첫 줄에 최대 매출액을 출력합니다.
// ▣ 입력예제 1
// 10 3
// 12 15 11 20 25 10 20 19 13 15
// ▣ 출력예제 1
// 56

function solution5(k, arr) {
	let sum = 0;
	let answer;
	for (let i = 0; i < k; i++) {
		answer = sum += arr[i];
	}
	for (let i = k; i < arr.length; i++) {
		sum += arr[i];
		sum -= arr[i - k];
		answer = Math.max(answer, sum);
	}
	return answer;
}

let arr5 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log("solution5:", solution5(3, arr5));

// 학급 회장(해쉬)
// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그
// 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작
// 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
// ▣ 입력설명
// 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
// 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로
// 문자열로 입력됩니다.
// ▣ 출력설명
// 학급 회장으로 선택된 기호를 출력합니다.
// ▣ 입력예제 1
// 15
// BACBACCACCBDEDE
// ▣ 출력예제 1
// C

function solution6(s) {
	let sH = new Map();
	let answer;
	let max = Number.MIN_SAFE_INTEGER;
	for (let i of s) {
		if (sH.has(i)) sH.set(i, sH.get(i) + 1);
		else sH.set(i, 1);
	}
	for (let [key, value] of sH) {
		if (value > max) {
			max = value;
			answer = key;
		}
	}
	return answer;
}

let s = "BACBACCACCBDEDE";
console.log("solution6: ", solution6(s));

// 아나그램(해쉬)
// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아
// 나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면
// A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 즉 어느 한 단어를 재
// 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세
// 요. 아나그램 판별시 대소문자가 구분됩니다.
// ▣ 입력설명
// 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다.
// 단어의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.
// ▣ 입력예제 1
// AbaAeCe
// baeeACA
// ▣ 출력예제 1
// YES
// ▣ 입력예제 2
// abaCC
// Caaab
// ▣ 출력예제 2
// NO

function solution7(e, f) {
	let sH = new Map();
	let answer = "YES";
	for (let i of e) {
		if (sH.has(i)) sH.set(i, sH.get(i) + 1);
		else sH.set(i, 1);
	}
	for (let i of f) {
		if (!sH.has(i) || sH.get(i) === 0) return "NO";
		sH.set(i, sH.get(i) - 1);
	}
	return answer;
}

let e = "AbaAeCe";
let f = "baeeACA";
console.log("solution7: ", solution7(e, f));

// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
// ▣ 입력예제 1
// bacaAacba
// abc
// ▣ 출력예제 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
function compareMaps(map1, map2) {
	if (map1.size !== map2.size) return false;
	for (let [key, value] of map1) {
		if (!map2.has(key) || map2.get(key) !== value) return false;
	}
	return true;
}
function solution8(g, h) {
	let answer = 0;
	let gH = new Map();
	let hH = new Map();
	for (let i of h) {
		if (hH.has(i)) hH.set(i, hH.get(i) + 1);
		else hH.set(i, 1);
	}
	let len = h.length - 1;
	for (let i = 0; i < len; i++) {
		if (gH.has(g[i])) gH.set(g[i], gH.get(g[i]) + 1);
		else gH.set(g[i], 1);
	}
	let left = 0;
	for (let right = len; right < g.length; right++) {
		if (gH.has(g[right])) gH.set(g[right], gH.get(g[right]) + 1);
		else gH.set(g[right], 1);
		if (compareMaps(gH, hH)) answer++;
		gH.set(g[left], gH.get(g[left]) - 1);
		if (gH.get(g[left]) === 0) gH.delete(g[left]);
		left++;
	}
	return answer;
}

let g = "bacaAacba";
let h = "abc";
console.log("solution8: ", solution8(g, h));
