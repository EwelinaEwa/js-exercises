/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let numArray = [];
        for (let i=1; i<=10; i++) {
            numArray.push(Math.ceil(Math.random()*100));
            document.getElementById(`n-${i}`).innerHTML = numArray[i-1];
        }
        document.getElementById("min").innerHTML = Math.min(...numArray);
        document.getElementById("max").innerHTML = Math.max(...numArray);
        let sum = numArray.reduce((total, element) => total + element,0)
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum/numArray.length;
    })

})();
