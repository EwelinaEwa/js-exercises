/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        fetch('http://localhost:63342/js-exercises/_shared/api.json.')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    })

})();
