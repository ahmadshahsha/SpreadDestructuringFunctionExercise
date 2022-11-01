//  Spread and De
//  1a
const jPDinos = [
    ' Velociraptors',
    'Tyrannosaurus Rex',
    'Dialophosaurus'
];
// 1b
function seeDinos (a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(jPDinos);

// 2a
const jPCharacters = {
    alanGran: 'Sam Neill',
    ellieSattler: 'Laura Dern',
    ianMalcolm:'Jeff Goldblum'

};

// // 2b
// seeCharacters = (jPCharacters) => {
//     console.log(jPCharacters.ellieSattler);
// }
// seeCharacters (jPCharacters)

// 2b
// seeCharacters = ({ellieSattler}) => {
//     console.log(ellieSattler);
// }
// seeCharacters (jPCharacters)

//  or
seeCharacters = ({ellieSattler}) => console.log(ellieSattler);

seeCharacters(jPCharacters);

// Bonus

// 31
const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"

    }
];


// 3b

const seeJPMovies = function([{one, two, three},{four, five, six }]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);

}

// or
// seeJPMovies = ([{one, two, three}, {four, five, six}]) => {
//         console.log(one);
//         console.log(two);
//         console.log(three);
//         console.log(four);
//         console.log(five);
//         console.log(six);
    

// }
seeJPMovies(jurassicParkMovies)