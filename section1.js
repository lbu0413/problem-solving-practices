// 세 수 중 최솟값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

function solution1(a, b, c) {
	return Math.min(a, b, c);
}

console.log("solution1 :", solution1(6, 5, 11));

// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1
// 6 7 11
// ▣ 출력예제 1
// YES
// ▣ 입력예제 1
// 13 33 17
// ▣ 출력예제 1
// NO

function solution2(a, b, c) {
	let max = Math.max(a, b, c);
	if (max < a + b + c - max) return "YES";
	else return "NO";
}

console.log("solution2: ", solution2(6, 7, 11));
