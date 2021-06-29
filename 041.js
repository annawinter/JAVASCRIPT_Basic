// Rest Parameter
// 파라미터 값의 수를 모를 때 사용

function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));