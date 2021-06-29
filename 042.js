// Arrow Function - 화살표 함수

// 함수 선언식
function add() {

}

// 함수 표현식
var add = function () {
    var sum = x1 + x2;
    return x1 + x2;
};

// Arrow Function - 화살표 함수
var add = (x1, x2) => x1 + x2;
// var add = (x1, x2) => {return x1 + x2};

var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
};

var add = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};

function say(message) {

}

var say = (message) => {};
var say = message => {}; // 괄호 생략 가능


function myFunction() {

}

var myFunction = () => {};