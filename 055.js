// 정규식
// regular expression


var txt = "Hello World! world!";
var regexp = /World/gi; // g - global 모두, i - 소문자 대문자 상관없이 모두 찾기
console.log(txt.replace(regexp, "Jeremy"));


//
var str = "123abc456kkk";
var regexp1 = /[0-9]/g;
var result = str.match(regexp1);
console.log(result);

//
var str2 = "re, green, red, gree, gen, yellow, blue";
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2);
console.log(result2);

//
var tel = "010-3000-9614";
// 010 3자리 숫자 - 4자리 숫자 - 4자리
var regexp3 = /^(010)-\d{4}-\d{4}/;
console.log(regexp3.test(tel));


// seungwon.go@gmail.com
// aaa234@abc.co.kr
// afef@foeof
var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;
// ^ - 무조건 있어야하는 경우, w - 문자, + - 1개이상, \ - 시작, $ - 마지막, () - 최소 1번이상 

console.log(regexp4.test("seun@gmail.com"));