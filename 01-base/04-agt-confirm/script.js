/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function run() {
    var age = window.prompt(`How old are you?`);
    var gender = window.prompt(`What's your gender?`);
    var town = window.prompt(`Which town do you live in?`)
    var confirmation = window.confirm(`You are ${age} years old. You are a ${gender}. You live in ${town}.`)
    if (confirmation == false) {
        run();
    }
})();
