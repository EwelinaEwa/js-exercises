/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {
//     // to get the value of an input: document.getElementById("element-id").value
//
//
//     document.getElementById("addition").addEventListener("click", function() {
//         // perform an addition
//         const one = document.getElementById("op-one")
//         const two = document.getElementById("op-two")
//         const result = parseInt(one.value) + parseInt(two.value);
//         console.log(result)
//     });
//
//     document.getElementById("substraction").addEventListener("click", function() {
//         // perform an substraction
//         const one = document.getElementById("op-one")
//         const two = document.getElementById("op-two")
//         const result = parseInt(one.value) - parseInt(two.value);
//         console.log(result)
//     });
//
//     document.getElementById("multiplication").addEventListener("click", function() {
//         // perform an multiplication
//         const one = document.getElementById("op-one")
//         const two = document.getElementById("op-two")
//         const result = parseInt(one.value) * parseInt(two.value);
//         console.log(result)
//     });
//
//     document.getElementById("division").addEventListener("click", function() {
//         // perform an division
//         const one = document.getElementById("op-one")
//         const two = document.getElementById("op-two")
//         const result = parseInt(one.value) / parseInt(two.value);
//         console.log(result)
//     });
// })();



document.getElementById("addition").addEventListener("click", () => {
    let one = Number(document.getElementById("op-one").value)
    let two = Number(document.getElementById("op-two").value)
    console.log(one+two)
});document.getElementById("substraction").addEventListener("click", () => {
    let one = Number(document.getElementById("op-one").value)
    let two = Number(document.getElementById("op-two").value)
    console.log(one-two)
});document.getElementById("multiplication").addEventListener("click", () => {
    let one = Number(document.getElementById("op-one").value)
    let two = Number(document.getElementById("op-two").value)
    console.log(one*two)
});document.getElementById("division").addEventListener("click", () => {
    let one = Number(document.getElementById("op-one").value)
    let two = Number(document.getElementById("op-two").value)
    console.log(one/two)
});