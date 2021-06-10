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

const wrapWithTag = (content, tagname) => {
    return `<${tagname}>${content}</${tagname}>`;
};

document.write(`<ol>`);
movies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ol>`);
