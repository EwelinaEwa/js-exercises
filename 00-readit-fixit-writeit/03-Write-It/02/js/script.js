const movies = [
    `The Conjuring 3`,
    `Tom & Jerry`,
    `Cruella`,
    `K3: Dans van de Farao`,
    `A Quiet Place Part II`,
    `Voyagers`,
    `Demon Slayer: Mugen Train`,
    `Freaky`,
    `Songbird`,
    `Nomadland`,
    `Drunk`,
    `Honest Thief`,
    `Bon Bini: Judeska in da House`,
];

// const wrapWithTag = (content, tagname) => {
//     return `<${tagname}>${content}</${tagname}>`;
// };
// const parseTitle = title => {
//     const lowerTitle = title.toLowerCase();
//     const wrapped = wrapWithTag(lowerTitle, `li`);
//     return wrapped;
// };
//
// document.write(`<ol>`);
// for (let i = movies.length-1; i>=0; i--) {
//     document.write(parseTitle(movies[i]));
// }
// document.write(`</ol>`);

const wrapWithTag = (content, tagname) => {return `<${tagname}>${content}</${tagname}>`}

document.write(`<ol>`)
for (let i=movies.length-1; i>=0; i--) {
   document.write(wrapWithTag(movies[i].toLowerCase(), `li`))
}
document.write(`</ol>`)



