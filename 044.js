// Object Literal Syntax Extension

var firstName = "John";
var lastName = "Doe";

var person = {
    firstName: firstName,
    lastName: lastName
}

// person[fir]

var type = "student";
var score = {
    [type]: "John Doe",
    //student : "John Doe" // 이와 같음.
    score: 95
};


// score.student
// score["student"]
// score[type]
// 모두 같음.