/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let me = {
        lastname: "Kosciukiewicz",
        firstname: "Ewelina",
        age: "forever 25",
        city: "Tielt",
        country: "Belgium"
    }
    document.getElementById("run").addEventListener("click", function () {
        console.log(`Hi! My name is ${me.firstname} ${me.lastname}. I am ${me.age} years old. I live in ${me.city}, ${me.country}.`)
    })

})();
