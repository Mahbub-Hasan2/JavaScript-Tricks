// destructuring aliases

const language = {
    name: "javaScript", 
    founded: 1995,
    founder: "Brendan Eich"
}

const {name: languageName, founded:foundedYar, founder:founderName} = language;
// console.log(name, founded, founder)
console.log(languageName, foundedYar, founderName)