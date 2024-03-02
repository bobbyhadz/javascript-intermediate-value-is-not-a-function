// TypeError: (intermediate value)(...) is not a function

// EXAMPLE 1 - Add a semicolon after the closing curly brace

// ✅ Works
const logger = function () {
  console.log('hi');
};

(function () {})();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add a semicolon at the beginning of the line on which the error occurred

// // ✅ Works
// const logger = function () {
//   console.log('hi');
// };

// (function () {})();

// ------------------------------------------------------------------

// // EXAMPLE 3 - Lines that must begin with semicolons

// // ✅ Works
// const logger = function () {
//   console.log('hi');
// }; // 👈️ missing semicolon here

// (function () {})(); // 👈️ line begins with semi colon

// ------------------------------------------------------------------

// // EXAMPLE 4 - Use this and not super

// const obj = {
//   getNum() {
//     return 5;
//   },
//   sum(a) {
//     // ✅ Works
//     return a + this.getNum();
//   },
// };

// console.log(obj.sum(10));
