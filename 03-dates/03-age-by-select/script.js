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
    let year = document.getElementById("dob-year").value;
    let month = document.getElementById("dob-month").value;
    let day = document.getElementById("dob-day").value;
    let birthDay = `${year}-${month}-${day}`;
    console.log(birthDay)
    function getAge(selectedDate) {
        let today = new Date();
        let birthDate = new Date(selectedDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    console.log(getAge(birthDay));

})();
