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
            return response.json();
        })
        .then((data) => {
            document.getElementById("run").addEventListener("click", function () {
                let heroes = data.heroes;
                // console.log(heroes)

                let heroTemplate = document.getElementById("tpl-hero").content;
                let copyTemplate = document.importNode(heroTemplate, true);

                // heroes.forEach((hero, index) => {
                //     copyTemplate.querySelector(".hero").innerHTML = index;
                //     copyTemplate.querySelector(".name").innerHTML = hero.name;
                //     copyTemplate.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                //     copyTemplate.querySelector(".powers").innerHTML = hero.abilities;
                //
                //     document.getElementById("target").appendChild(copyTemplate);
                //
                // })


                for (let i=0; i<heroes.length; i++) {
                    let hero = data.heroes[i]
                    console.log(hero)
                    copyTemplate.querySelector(".name").innerHTML = heroes[i].name;
                    copyTemplate.querySelector(".alter-ego").innerHTML = heroes[i].alterEgo;
                    copyTemplate.querySelector(".powers").innerHTML = heroes[i].abilities;

                    document.getElementById("target").appendChild(copyTemplate);

                }

            })

        })

})();
