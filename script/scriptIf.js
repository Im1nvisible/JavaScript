"use strict";

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Many");
// } else {
//     console.log("OK");
// }

const num = 50;


switch (num) {
    case 49:
        console.log("False!");
        break;
    case 100:
        console.log("False!");
        break;
    case 51:
        console.log("True!");
        break;
    default:
        console.log("Default!");
        break;
}