// Array Destruncturing

function getScores() {
    return [70, 21, 100];
}

var [x, y, z] = getScores();
console.log(x);
console.log(y);
console.log(args);
//scores[0];
//scores[1];
//scores[2];

function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);

function getCoordinates() {
    return [12.3222, 34.2222];
}

// [경도, 위도];
var coodinates = getCoordinates(); // [경도, 위도]
coodinates[0]; // 경도
coodinates[1]; // 위도

var [longititue, latitude] = getCoordinates(); // [경도, 위도]