// function test(item, index) {
//    text += index + ": " + item + "<br>";
// }
var ez_Wachtwoorden = ["123456", "azerty", "qwerty", "wachtwoord", "welkom01", "password", "ditraadjenooit", "ikbenslim", "toosmart4u", "topdog", "dakowlman", "raadjenooit", "bartsimpson"];

class Cursist {
   constructor(naam, userName, wachtwoord) {
      this.Naam = naam;
      this.userName = userName;
      this.wachtwoord = wachtwoord;
      this.wachtwoord = this.ezWachtwoordenGever();
   }

   ezWachtwoordenGever() {
      var resultaat = [];
      if (Math.floor(Math.random() * 2) === 1) {
         var index = Math.floor(Math.random() * ez_Wachtwoorden.length);
         resultaat.push(ez_Wachtwoorden[index]);
      }
      else {
         resultaat.push(this.wachtwoord);
      }
      return resultaat.join(", ");
   }
}

class Cursisten {

   constructor(cursist) {
      this.cursist = cursist;
   }

   overzicht() {
      return console.log(this.cursist);
   }

   hacker() {
      var gehacked = [];
      for (var i = 0; i < ez_Wachtwoorden.length; i++) {
         if (this.cursist.wachtwoord === ez_Wachtwoorden[i]) {
            gehacked.push(this.cursist);
         }
      }
      if (gehacked.length == 0) {
         return false;
      } return true;
   }

}

// aanmaken items (kan ook automatisch met prompt maar was teveel werk)
var cursist1 = new Cursist("Semmi", "Semmi23", "aapje");
var cursist2 = new Cursist("Patrick", "Patrick45", "luipaard");
var cursist3 = new Cursist("Barbara", "Barbara28", "mier");
var cursist4 = new Cursist("Ali", "Ali38", "olifant");
var cursist5 = new Cursist("Wouter", "Wouter30", "TANK");
var cursist6 = new Cursist("Gorik", "Gorik32", "Giraf");
var cursist7 = new Cursist("Charlotte", "Charlotte35", "papegaai");
var cursist8 = new Cursist("Merel", "Merel27", "Border Collie");
var cursist9 = new Cursist("Sander", "Sander25", "ezel");
var cursisten = [
   cursist1, cursist2, cursist3, cursist4, cursist5, cursist6, cursist7, cursist8, cursist9
];
var cursisten2 = [];
var gehacked = [];
for (i = 0; i < cursisten.length; i++) { //cursisten.length
   cursisten2.push(new Cursisten(cursisten[i]));
}

for (j = 0; j < cursisten2.length; j++) { //cursisten2.length   
   if (cursisten2[j].hacker() === true) {
      gehacked.push(cursisten[j]);
      // gehacked.push(new Cursisten(cursisten[j]));
   }
   // cursisten2[j].overzicht();
}
console.log(gehacked);
