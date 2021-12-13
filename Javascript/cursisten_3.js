// function test(item, index) {
//    text += index + ": " + item + "<br>";
// }

class Cursist {
   constructor(naam, leeftijd, totemdier) {
      this.Naam = naam;
      this.Leeftijd = leeftijd;
      this.Totemdier = totemdier;
      this.Weekmenu = this.maaltijdenMaker();
   }

   maaltijdenMaker() {
      var maaltijden = ["spaghetti", "romboutje", "bloemkool in de witte saus", "wortelpurree met boerenworst", "stoofvlees", "vol-au-vent", "dikke durum", "pizza", "Chicken Chitir"];
      var resultaat = [];
      for (var i = 0; i < 7; i++) {
         var index = Math.floor(Math.random() * maaltijden.length);
         resultaat.push(maaltijden[index]);
      }
      return resultaat.join(", ");
   }
}

class Cursisten {
   constructor(cursist) {
      this.cursist = cursist;
   }

   weekmenu() {
      return console.log("De weekmenu van", this.cursist.Naam, "is", this.cursist.Weekmenu);
   }

   uniek() {
      var counts = {};
      var uniek = [];

      for (const num of this.cursist.Weekmenu.split(", ")) {
         counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      for (i = 0; i < Object.keys(counts).length; i++) {
         if (Object.values(counts)[i] == 1) {
            uniek.push(Object.keys(counts)[i]);
         }
      }
      // console.log(uniek);
      return console.log(`De unieke items van ${this.cursist.Naam} deze week waren ${uniek.join(", ")}`);
      // var vervang = this.cursist.Weekmenu.split(", ");const counts = {};
      // vervang.sort();
      // console.log(vervang);
      // var beschrijving = [];
      // var aantal = [];
      // var prev = "";
      // for (let element of vervang) {
      //    if (element !== prev) {
      //       beschrijving.push(element);
      //       aantal.push(1);
      //    }
      //    else aantal[aantal.length - 1]++;
      //    prev = element;
      // }      
      // for (i = 0; i < aantal.length; i++) {
      //    if (aantal[i] > 1) {
      //       aantal.splice(i, 1);
      //       beschrijving.splice(i, 1);
      //    }
      // }
      // return console.log(beschrijving.join(", "));
   }


}

// aanmaken items (kan ook automatisch met prompt maar was teveel werk)
var cursist1 = new Cursist("Semmi", 23, "aapje");
var cursist2 = new Cursist("Patrick", 45, "luipaard");
var cursist3 = new Cursist("Barbara", 28, "mier");
var cursist4 = new Cursist("Ali", 38, "olifant");
var cursist5 = new Cursist("Wouter", 30, "TANK");
var cursist6 = new Cursist("Gorik", 32, "Giraf");
var cursist7 = new Cursist("Charlotte", 35, "papegaai");
var cursist8 = new Cursist("Merel", 27, "Border Collie");
var cursist9 = new Cursist("Sander", 25, "ezel");
var cursisten = [
   cursist1, cursist2, cursist3, cursist4, cursist5, cursist6, cursist7, cursist8, cursist9
]
var cursisten2 = []
for (i = 0; i < cursisten.length; i++) { //cursisten.length
   cursisten2.push(new Cursisten(cursisten[i]));
}

for (j = 0; j < cursisten2.length; j++) { //cursisten2.length
   cursisten2[j].uniek();
   cursisten2[j].weekmenu();
   console.log(cursisten[j].Totemdier + "\n");
}
