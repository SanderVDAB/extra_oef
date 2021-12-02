var rls = require("readline-sync");

class Kaart {
   constructor(teller) {
      var waarde = ["Aas", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "boer", "dame", "heer"];
      var suite = ["harten", 'schoppen', "klaveren", "koeken"];
      this.Id = teller + 1;
      this.Waarde = waarde[teller % 13];
      this.Suite = suite[Math.floor(teller / 13)];
      this.Score = this.returnWaarde(teller % 13);
      this.isAas = false;
      if (teller % 13 === 0) {
         this.isAas = true;
      }
      this.isGechecked = false;
      this.tekst = `${this.Suite} ${this.Waarde}, `
   }

   returnWaarde(getal) {
      switch (getal) {
         case 0:
            return 11
         case 10: case 11: case 12:
            return 10
         default:
            return getal + 1
      }
   }
}

class Blackjack {
   deck = [];
   kaarten_speler = [];
   kaarten_dealer = [];

   constructor() {
      for (var i = 0; i < 14; i++) {
         this.deck[i] = new Kaart(i);
      }
   }

   randomize() {
      var poele = this.deck;
      var huidigeIndex = poele.length;
      var randomIndex = 0;
      while (huidigeIndex != 0) {
         randomIndex = Math.floor(Math.random() * poele.length);
         huidigeIndex--;
         [poele[huidigeIndex], poele[randomIndex]] = [poele[randomIndex], poele[huidigeIndex]];
      }
      return this.deck = poele
   }

   aasCheck(volgende_kaart, score, kaarten) {
      if (volgende_kaart.Score + score > 21) {
         for (var i = 0; i < kaarten.length; i++) {
            if (kaarten[i].isAas == true && kaarten[i].isGechecked != true) {
               kaarten[i].isGechecked = true;
               kaarten[i].isAas = false;
               return score - 10 + volgende_kaart.Score;
            }
         }
         return score + volgende_kaart.Score;
      }
      return score + volgende_kaart.Score;
   }

   returnKaarten(kaarten) {
      var resultaat = ""
      for (var i = 0; i < kaarten.length; i++) {
         resultaat += kaarten[i].tekst;
      }
      resultaat = resultaat.slice(0, -2);
      return resultaat;
   }

   blackJack() {
      var huidig_deck = this.randomize();
      var score_speler = 0;
      var score_dealer = 0;
      var aantal = 0;
      huidig_deck[0] = new Kaart(0);
      huidig_deck[2] = new Kaart(0);
      while (aantal < 4) {
         this.kaarten_speler.push(huidig_deck[aantal]);
         // this.kaarten_speler.push(new Kaart(0));
         score_speler = this.aasCheck(huidig_deck[aantal], score_speler, this.kaarten_speler);
         aantal++
         this.kaarten_dealer.push(huidig_deck[aantal]);
         score_dealer = this.aasCheck(huidig_deck[aantal], score_dealer, this.kaarten_dealer);
         aantal++;
      }
      console.log("speler:", this.returnKaarten(this.kaarten_speler), "\ndealer:", this.returnKaarten(this.kaarten_dealer), "\nscore_speler:", score_speler, "\nscore_dealer:", score_dealer);
      console.log(this.returnId(huidig_deck)); //controle
      // return huidig_deck
   }

   // controle
   returnId(kaarten) {
      var resultaat = ""
      for (var i = 0; i < kaarten.length; i++) {
         resultaat += (`${kaarten[i].Id}_${kaarten[i].tekst}`);
      }
      resultaat = resultaat.slice(0, -2);
      return resultaat
   }
}

var test = new Blackjack();
// console.log(test);
// console.log(test.blackJack());
test.blackJack();
// console.log(new Kaarten(0));