// Spread Operator
// 배열, 문자열 같은 형태의 데이터를 요소 하나 하나 모두 분리해서 사용할 수 있게 해주는 문법

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
var arr3 = [...arr2, ...arr1]; // 1,2,3,4,5,6이 들어간 것과 같음. 각각 별개로 만들어버림.


var cd = "CDE";
var alphabet = ["A", "B", ...cd]; // "A","B","C","D","E" 각각 별개로 넣어줌.