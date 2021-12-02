class Speelkaart {
   waarde = ["Aas", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "boer", "dame", "heer"];
   suite = ["harten", 'schoppen', "klaveren", "koeken"];


   constructor(getal) { // 1 = harten aas, 52 = koeken heer
      getal--;
      console.log(this.returnKaart(getal));
      this.randomKaart();
      this.randomKaarten();
   }

   returnKaart(getal) {
      this.waarde_keuze = getal % 13;
      this.suite_keuze = Math.floor(getal / 13);
      return `${this.suite[this.suite_keuze]} ${this.waarde[this.waarde_keuze]}`;
   }

   randomKaart() {
      var getal = Math.floor(Math.random() * 52);
      return console.log(this.returnKaart(getal));
   }

   randomKaarten() {
      var poele = [];
      for (var i = 0; i < 52; i++) {
         poele.push(this.returnKaart(i));
         // console.log(poele[i]);
      }
      for (var i = 0; i < 52; i++) {
         var huidig_getal = Math.floor(Math.random() * poele.length);
         // var huidig_getal = (i);
         var huidige_kaart = poele[huidig_getal];
         poele.slice(huidig_getal, 1);
         console.log(`${i + 1} ${huidige_kaart}`);
      }
   }
}

var test = new Speelkaart(12);