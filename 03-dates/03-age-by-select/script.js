/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
    let yearElement = document.getElementById("dob-year").value;
    let monthElement = document.getElementById("dob-month").value;
    let dayElement = document.getElementById("dob-day").value;
    let birthDay = `${yearElement}-${monthElement}-${dayElement}`;
    console.log(birthDay)
    function getAge(birthDay) {
        let today = new Date();
        let birthDate = new Date(birthDay);
        // let age = today.getFullYear() - birthDate.getFullYear();
        // let m = today.getMonth() - birthDate.getMonth();
        // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        // }
            var ageDifMs = today - birthDate.getTime();
            var ageDate = new Date(ageDifMs);
            var age =  Math.abs(ageDate.getUTCFullYear() - 1970);
            return age
    }

    console.log(getAge(birthDay));

    });
})();
