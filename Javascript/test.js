// Blackjack
// Cursisten_3.js
// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const arr = ["spaghetti", "romboutje", "bloemkool in de witte saus", "wortelpurree met boerenworst", "romboutje", "bloemkool in de witte saus", "romboutje"];
// const counts = {};
// var uniek = [];

// for (const num of arr) {
//    counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
// objectLength = Object.keys(exampleObject).length

// for (i = 0; i < Object.keys(counts).length; i++) {
//    if (Object.values(counts)[i] == 1) {
//       uniek.push(Object.keys(counts)[i]);
//    }
// }

// console.log(uniek);
// console.log(Object.values(counts)[0]);



// console.log(counts["spaghetti"], counts["romboutje"], counts["bloemkool in de witte saus"], counts["wortelpurree met boerenworst"]);
// for (i = 0; i < counts.length; i++) {
//    console.log(counts[i].toString().substr(-1));
//    if (counts[i].toString().substr(-1) === 1) {

//    }
// }


// console.log(counts);




// function foo(array) {
//    let a = [],
//       b = [],
//       arr = [...array], // clone array so we don't change the original when using .sort()
//       prev;

//    arr.sort();
//    for (let element of arr) {
//       if (element !== prev) {
//          a.push(element);
//          b.push(1);
//       }
//       else ++b[b.length - 1];
//       prev = element;
//    }
//    console.log(a);
//    console.log(b);
//    var c = [];
//    for (i = 0; i < b.length; i++) {
//       c.push(`${a[i]} ${b[i]}`);
//       if (b[i] > 1) {
// a.shift();
// b.shift();
// console.log(a);
// }
// else if (b[i] > 1) {
//    a.splice(i, 1);
//    b.splice(i, 1);
//    // console.log(a);
//    // console.log(b);
// }
// }
// console.log(c);
// console.log(a);
// console.log(b);
//    return [a, b];
// }

// var result = foo(arr);
// console.log('[' + result[0] + ']', '[' + result[1] + ']')
// console.log(arr)

//Blackjack
// var data = [];
// // ...
// data[0] = { "ID": "1", "Status": "Valid" };
// data[1] = { "ID": "2", "Status": "Invalid" };
// // ...
// var tempData = [];
// for (var index = 0; index < data.length; index++) {
//    if (data[index].Status == "Valid") {
//       tempData.push(data);
//    }
// }
// data = tempData;
// console.log(data);


// var aasGefilterd = true;
// console.log(aasGefilterd == false);

console.log('\u20AC penis');

// class Kaart {
//    constructor(teller) {
//       var waarde = ["Aas", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "boer", "dame", "heer"];
//       var suite = ["harten", 'schoppen', "klaveren", "koeken"];
//       this.Waarde = waarde[teller % 13];
//       this.Suite = suite[Math.floor(teller / 13)];
//       this.Score = this.returnWaarde(teller % 13);
//       this.isAas = false;
//       if (teller % 13 === 0) {
//          this.isAas = true;
//       }
//    }

//    returnWaarde(getal) {
//       switch (getal) {
//          case 0:
//             return 11
//          case 10: case 11: case 12:
//             return 10
//          default:
//             return getal + 1
//       }
//    }
// }

// class Blackjack {
//    deck = [];
//    kaarten_speler=[];
//    kaarten_dealer=[];

//    constructor() {
//       for (var i = 0; i < 14; i++) {
//          this.deck[i] = new Kaart(i);
//       }
//    }

//    randomize() {
//       var poele = this.deck;
//       var huidigeIndex = poele.length;
//       var randomIndex = 0;
//       while (huidigeIndex != 0) {
//          randomIndex = Math.floor(Math.random() * poele.length);
//          huidigeIndex--;
//          [poele[huidigeIndex], poele[randomIndex]] = [poele[randomIndex], poele[huidigeIndex]];
//       }
//       return this.deck = poele
//    }

//    blackJack() {
//       var huidig_deck = this.randomize();

//       return huidig_deck
//    }
// }

// var test = new Blackjack();
// // console.log(test);
// console.log(test.blackJack());
// // console.log(new Kaarten(0));



// var resultaat = "abcdefghi"
// // for (var i = 0; i < kaarten.length; i++) {
// //    resultaat += kaarten[i].tekst += ", "
// // }
// resultaat.slice(0, -2);
// console.log(resultaat.slice(0, -2));

//array.js

var keuze = [0, 1, 2];
for (var i = 1; i < 3; i++) {
   console.log(keuze[i % 3] === 1);
}

