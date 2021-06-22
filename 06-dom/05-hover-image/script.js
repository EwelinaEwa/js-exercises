/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let ImgAttribute = document.querySelector("img").getAttribute("src");
    let newImgAttribute = document.querySelector("img").getAttribute("data-hover");
    document.querySelector("img").addEventListener("mouseover", function (event) {
        document.querySelector("img").setAttribute("src",newImgAttribute);
    })
    document.querySelector("img").addEventListener("mouseout", function (event) {
        document.querySelector("img").setAttribute("src", ImgAttribute);
    })




})();
