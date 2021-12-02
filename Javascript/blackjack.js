var rls = require("readline-sync")

class Blackjack {
   waarde = ["Aas", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "boer", "dame", "heer"];
   suite = ["harten", 'schoppen', "klaveren", "koeken"];
   // score = 0;
   score_speler = 0;
   score_dealer = 0;
   kaarten_speler = [];
   kaarten_dealer = [];
   aasGefilterd = false;

   constructor() { // 0 = harten aas, 51 = koeken heer
      this.deck = this.randomKaarten();
      // console.log(this.deck);
   }

   randomKaarten() {
      var poele = [];
      for (var i = 0; i < 52; i++) {
         poele.push(i);
      }
      // console.log(poele);
      var huidigeIndex = poele.length;
      var randomIndex = 0;
      while (huidigeIndex != 0) {
         randomIndex = Math.floor(Math.random() * poele.length);
         huidigeIndex--;
         [poele[huidigeIndex], poele[randomIndex]] = [poele[randomIndex], poele[huidigeIndex]];
      }
      return poele
      // for (var i = 0; i < 52; i++) {
      //    var huidig_getal = Math.floor(Math.random() * poele.length);
      //    // var huidig_getal = (i);
      //    // var huidige_kaart = poele[huidig_getal];
      //    poele.slice(huidig_getal, 1);
      //    deck.push(huidig_getal);
      //    deck.sort();
      //    // console.log(huidige_getal);
      // }
      // return deck;
   }

   returnKaart(getal) {
      this.waarde_keuze = getal % 13;
      this.suite_keuze = Math.floor(getal / 13);
      return `${this.suite[this.suite_keuze]} ${this.waarde[this.waarde_keuze]}`;
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

   aasCheck(getal, deck, speler, score) {
      if (score + this.returnWaarde(getal) > 21) {
         if (getal % 13 === 0) {
            // console.log(score);
            return score++;
         }
         for (var i = 0; i < speler.length; i++) {
            if (score + this.returnWaarde(getal) > 21 && getal[i] === 0) {
               this.aasGefilterd = true;
               score -= 10;

               // if (deck[i] % 13 === 0 && this.aasGefilterd === false && score != 21) {
               //    this.aasGefilterd = true;
               //    score -= 10;
               //    // console.log(score);
               // }
            }
            score += this.returnWaarde(getal % 13);
            // console.log(score);
            return score;
         }
         score += this.returnWaarde(getal % 13);
         // console.log(score);
         return score;
      }
   }

   pushKaart(speler, teller, deck, score) {
      var kaart = this.returnKaart(deck[teller]);
      speler.push(kaart);
      // console.log(score);
      var temp = this.aasCheck((deck[teller]), deck, speler, score);
      // console.log("temp " + temp);
      return temp;
   }


   vergelijk() {
      if (this.score_speler > this.score_dealer) {
         console.log("Gewonnen, je kaarten waren", this.kaarten_speler.join(", "), "en je score was", this.score_speler);
         console.log("De dealer heeft verloren met", this.kaarten_dealer.join(", "), "en zijn score was", this.score_dealer);
         console.log("Je krijgt €20");
      }
      else if (this.score_speler == this.score_dealer) {
         console.log("The house always wins je kaarten waren", this.kaarten_speler.join(", "), "en je score was", this.score_speler);
         console.log("De dealer heeft gewonnen met", this.kaarten_dealer.join(", "), "en zijn score was", this.score_dealer);
         console.log("Je krijgt wel je €10 terug (om opnieuw te proberen");
      }
      if (this.score_speler < this.score_dealer) {
         console.log("Busted, je kaarten waren", this.kaarten_speler.join(", "), "en je score was", this.score_speler);
         console.log("De dealer heeft gewonnen met", this.kaarten_dealer.join(", "), "en zijn score was", this.score_dealer);
         console.log("Je geld is weg, je kan wel opnieuw proberen voor €10");
      }
   }

   blackJack() {
      var deck = this.randomKaarten();
      // for (var i = 0; i < 10; i++) {
      //    console.log(this.returnKaart(deck[i]));
      // }
      // deck[0] = 13;
      // deck[1] = 25;
      // deck[2] = 0;
      // deck[3] = 13;
      // deck[4] = 26;
      this.score_speler = this.pushKaart(this.kaarten_speler, 0, deck, this.score_speler);
      // console.log(this.score_speler);
      this.score_speler = this.pushKaart(this.kaarten_speler, 1, deck, this.score_speler);
      // console.log(this.score_speler);
      console.log("Speler: " + this.kaarten_speler.join(", "), this.score_speler);
      this.score_dealer = this.pushKaart(this.kaarten_dealer, 2, deck, this.score_dealer);
      // console.log(this.score_dealer);
      this.score_dealer = this.pushKaart(this.kaarten_dealer, 3, deck, this.score_dealer);
      // console.log(this.score_dealer);
      console.log("Dealer: " + this.kaarten_dealer.join(", "), this.score_dealer);
      if (this.score_dealer == 21) {
         console.log("Blackjack, the house always wins");
         console.log("Je verliest je €10 maar je krijgt €10 terug als je ook 21/Blackjack haalt");
      }
      else if (this.score_speler == 21) {
         console.log("Blackjack, wacht op resultaat dealer");
         if (this.score_dealer == 21) {
            console.log("Je krijgt je €10 terug");
         }
         console.log("Je wint €25")
      }
      var aantal = 3;
      while (this.score_speler < 21 && this.score_dealer != 21) {
         var antwoord = rls.keyIn("Wil je hitten? Y/N\n");
         if (antwoord == "Y" || antwoord == "y") {
            aantal++;
            this.score_speler = this.pushKaart(this.kaarten_speler, aantal, deck, this.score_speler);
            console.log("Speler: " + this.kaarten_speler.join(", "), this.score_speler);
            aantal++;
            this.score_dealer = this.pushKaart(this.kaarten_dealer, aantal, deck, this.score_dealer);
            console.log("Dealer: " + this.kaarten_dealer.join(", "), this.score_dealer);
            if (this.score_dealer > 21) {
               this.vergelijk();
               break;
            }
         }
         else if (antwoord == "N" || antwoord == "n") {
            console.log("Je bent gestopt, je kaarten waren", this.kaarten_speler.join(", "), "en je score was", this.score_speler);
            while (this.score_dealer <= 17 && this.score_dealer < this.score_speler) {
               aantal++;
               this.score_dealer = this.pushKaart(this.kaarten_dealer, aantal, deck, this.score_dealer);
               console.log("Dealer: " + this.kaarten_dealer.join(", "), this.score_dealer);
            }
            break;
         }
      }
      if (this.score_speler > 21) {
         console.log("Erover, je kaarten waren", this.kaarten_speler.join(", "), "en je score was", this.score_speler);
         console.log("De dealer heeft gewonnen met ", this.kaarten_dealer.join(", "), "en zijn score was", this.score_dealer);
         console.log("Je geld is weg, je kan wel opnieuw proberen voor €10");
      }
      else if (this.score_speler == 21) {
         this.vergelijk();
      }
      else if (this.score_speler < 21) {
         this.vergelijk();
      }
   }

   betalen() {
      console.log("Spelen kost €10, wil je €10 inzetten??")
      var antwoord = rls.keyIn("Y/N\n");
      if (antwoord == "Y" || antwoord == "y") {
         this.blackJack();
         // console.log("Wil je stoppen met spelen, of verdergaan?");
         // while (antwoord == "Y" || antwoord == "y") {
         //    antwoord = rls.keyIn("Wil je stoppen met spelen, of verdergaan? Y=Verdergaan/N=stoppen\n");
         //    this.blackJack();
         // }

      }
      else {
         console.log("Verspil mijn tijd dan niet en kom terug als je geld hebt!")
      }

   }
}

var test = new Blackjack();
test.betalen();