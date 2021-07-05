/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let startDate = new Date(year, 0, 1);
        // console.log(startDate)
        let endDate = new Date(year, 11, 31)
        // console.log(endDate)
        for (let day = startDate; day <=endDate; day.setDate(day.getDate()+1)){
            if (day.getDate() === 13 && day.getDay() === 5) {
                console.log(day)
            }
        }
    })

})();
