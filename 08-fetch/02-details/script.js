/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



        fetch('http://localhost:63342/js-exercises/_shared/api.json.')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                document.getElementById("run").addEventListener("click", function () {
                    let input = document.getElementById("hero-id").value - 1;
                    let hero = data.heroes[input];

                    let heroTemplate = document.getElementById("tpl-hero").content;
                    let copyTemplate = document.importNode(heroTemplate,true);

                    copyTemplate.querySelector(".name").innerHTML = hero.name;
                    copyTemplate.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    copyTemplate.querySelector(".powers").innerHTML = hero.abilities;

                    document.getElementById("target").appendChild(copyTemplate);

                })
            })



})();
