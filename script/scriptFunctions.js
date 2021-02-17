"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 19;
    console.log(num);
}

showFirstMessage("Hey there=)");
console.log(num);


// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(3, 2));
// console.log(calc(9, 5));

const calc = (a, b) => {
    return a + b;
};

function ret() {
    let num = 50;
    return num;
}

const annotherNum = ret();
console.log(annotherNum);

const logger = function() {
    console.log("Hey");
};

logger();