//digitale klok
var klok = document.getElementById("klok");
var button = document.getElementById("button");
var click = 0;
var t;

function nulAanvullen(getal) {
   var nummer = parseInt(getal);
   if (nummer < 10) {
      return `0${getal}`;
   }
   return getal
}

function klokGeneren() {
   if (click == 0) {
      klok.innerHTML = `Tijd opvragen`;
   }
   else if (click == 1) {
      var datum = new Date();
      var hours = nulAanvullen(datum.getHours());
      var minutes = nulAanvullen(datum.getMinutes());
      var seconds = nulAanvullen(datum.getSeconds());
      klok.innerHTML = `${hours} : ${minutes} : ${seconds}`; //klok.innerHTML =      
      t = setTimeout(klokGeneren, 1000);
   }
   else if (click == 2) {
      var hours = nulAanvullen(datum.getHours());
      var minutes = nulAanvullen(datum.getMinutes());
      var seconds = nulAanvullen(datum.getSeconds());
      klok.innerHTML = `${hours} : ${minutes} : ${seconds}`;
   }
}

function klokf(getal) {
   if (getal == 0) {
      click = 0;
      klokGeneren();
   }
   else if (getal == 1) {
      clearTimeout(t);
      click = 1;
      klokGeneren();
   }
   else if (getal == 2) {
      clearTimeout(t);
      click = 2;
      klokGeneren();
   }
}

window.addEventListener("load", () => klokf(0));
klok.addEventListener("click", () => klokf(1));
button.addEventListener("click", () => klokf(2));

//galgje
var woord = document.getElementById("woord");
var horizontaal_onderaan = document.getElementById("horizontaal_onderaan");
var horizontaal_bovenaan = document.getElementById("horizontaal_bovenaan");
var verticaal = document.getElementById("verticaal");
var touw = document.getElementById("touw");
var hoofd = document.getElementById("hoofd");
var torso = document.getElementById("torso");
var armL = document.getElementById("armL");
var armR = document.getElementById("armR");
var beenL = document.getElementById("beenL");
var beenR = document.getElementById("beenR");
var veranderingen = [horizontaal_onderaan, verticaal, horizontaal_bovenaan, touw, hoofd, torso, armL, armR, beenL, beenR];
var button = document.getElementById("button2");
var gebruikte_letters = document.getElementById("gebruikte_letters");
var al_geweest = document.getElementById("al_geweest");
var tekst = document.getElementById("tekst");

class Galgje {
   gebruikt = [];
   opbouw_galgje = 0;
   al_gebruikt = "";
   vorige_ronde = 0;

   randomWoord() {
      var woorden = ["schachtentemmer", "Koepuur", "tetten", "worsten", "willies en marjetten", "bier", "orval", "KILA", "tak", "kat", "pot", "hol", "map", "mat", "pingpong", "schaken", "ine", "patatje", "plezier", "clublied", "hol", "hal", "man", "gat", "nee", "min", "zit", "miauw", "Gent", "Vlaanderen", "Wallonië", "Berlijn", "Zweden", "panamakanaal", "rodenbach", "foeder", "vat", "graventeenfeesten", "overpoort", "pallieter", "mega", "gutenberg", "galabal", "SK ghendt", "DB", "rodenbach vintage", "facebook", "youtube", "twitter", "gestapo knallmuzik", "ricard", "tequila", "Koen Barbez", "Sarah Vanbesien", "Giliam Agten", "baktafel", "doop", "schacht", "look", "shotje", "confrater", "pere total", "DMD", "alex agnew", "nerfgeweer", "limburg", "jukebox", "DJ Nytril", "ribben", "karaoke", "troela", "prosit senior", "zevensprong", "cantus", "Koepuur", "zetel", "jaguar", "hotel", "klok", "rekenmachine", "Groots Ribbetjesfestijn", "online cantus", "negerinnetetten", "pictionary", "laptop", "quarantaine", "paus", "zwarte piet", "mango", "banaan", "appelboom", "boomgaard", "slap a cup", "aiki", "vork", "muis", "schaar", "bos", "trein", "lego", "wifi", "chrome", "Hersenpan", "Popcorn", "Eiland", "Kerstman", "Nestel", "Tandenborstel", "Visserskraam", "Plastic", "Cola", "Computermuis", "Winkelwagen", "Frankrijk", "Afzuigkap", "Prikbord", "Ezel", "Koptelefoon", "Hotdog", "Stoplicht", "Stopcontact", "Waxinelichtje", "Lucifer", "Hout", "Printer", "Bloembol", "Afstandsbediening", "Deurklink", "Verwarming", "Koffiezetapparaat", "Wcborstel", "Kruiwagen", "Wc ontstopper", "Zonnebril", "Nagellak", "Reuzenrad", "Zoutvat", "borsten", "Pepermolen", "Krabpaal", "Wasknijper", "WC", "Luier", "Afstandsbediening", "Agenda", "Stift", "Boterham", "Keukenrolhouder", "Kapstok", "Lantaarnpaal", "Trainingsbroek", "Gordijnen", "Brooddoos", "Prullenbak", "Computer", "Putdeksel", "Dreft", "Papier", "Eland", "Rolstoel", "Lampion", "Achtbaan", "Engel", "Loopneus", "Slee", "dildo", "bikomkommer", "troela", "sekspop", "paashaasschaamhaarverzamelaar", "nazi", "hakenkruis", "pils", "bier", "lantaarnpaal", "nagel", "elektrische fiets", "neger", "negerin", "wortel", "kiwi", "rascist", "doodskop", "skelet", "tetten", "alien", "fazant", "lesbische orgie", "indiaan", "torens", "ravijn", "vulkaan", "controle", "oren", "hond", "console", "teelbal", "anus", "klierkoorts"];
      // return woorden[Math.floor(Math.random() * woorden.length)].toLowerCase().split("");
      return "je ma en pa".split("");
      // woordAanpassen();
      // console.log(oplossing, te_raden);
   }

   omzettenWoord() {
      var arr = [];
      for (var i = 0; i < this.oplossing.length; i++) {
         if (this.oplossing[i] === " ") {
            arr.push(`<span class="spatie"></span>`);
         }
         else {
            arr.push("_");
         }
      }
      return arr
   }

   returnZonderTeken() {
      var arr = [];
      for (var i = 0; i < this.oplossing.length; i++) {
         if (this.oplossing[i] === " ") {
            arr.push("");
         }
         else {
            arr.push("_");
         }
      }
      return arr
   }

   constructor() {
      this.oplossing = this.randomWoord();
      this.te_raden = this.omzettenWoord();
      this.te_raden_zs = this.returnZonderTeken();
      this.woordAanpassen(this.te_raden);
   }

   woordAanpassen(arr) {
      woord.innerHTML = `<p>${arr.join(" ")}</p>`;
   }

   gebruikteLetters(gok, limiet) {
      this.gebruikt.push(gok);
      this.al_gebruikt += ` ${gok} `
      gebruikte_letters.innerHTML = `<p>${this.gebruikt.sort().join(", ")}</p>`
      this.opbouw_galgje = this.opbouwGalgje(this.opbouw_galgje, limiet);
   }

   opbouwGalgje(getal, limiet) {
      if (getal == 1) {
         veranderingen[getal].style.display = "flex";
         return getal++
      }
      if (getal == 6) {
         veranderingen[getal].style.display = "block";
         veranderingen[7].style.display = "block";
         veranderingen[7].style.visibility = "hidden";
         return getal++
      }
      if (getal == 7) {
         veranderingen[7].style.visibility = "visible";
         return getal++
      }
      if (getal == limiet && vorige_ronde === this.gebruikt.length) {
         return getal = limiet - 1;
      }
      veranderingen[getal].style.display = "block";
      return getal++
   }

   // verminderOpbouw(limiet) {
   //    return this.opbouw_galgje = limiet - 1;
   // }

   win() {
      input.innerHTML = `<div class="einde"><img src="./img/you_win.jpg" alt="win"><br><button onClick=history.go(0);>opnieuw</button></div>`
   }

   lose() {
      input.innerHTML = `<div class="einde"><h3>GAME OVER - Computer wint</h3><img src="../img/you_lose.png" alt=""><br><button onClick=history.go(0);>opnieuw</button></div>`
   }

   ronde(gok, limiet) {
      // al_geweest.innerHTML = ``;
      // var gok = document.getElementById("letter").value;
      var al_aangepast = false;
      this.vorige_ronde = this.gebruikt.length;
      for (var i = 0; i < this.oplossing.length; i++) {
         if (this.oplossing[i] === gok) {
            if (this.al_gebruikt.includes(gok)) {
               alert("Deze letter heb je al geraden");
               // al_geweest.innerHTML = `<p>Je hebt deze letter al geraden</p>`
            }
            else {
               this.te_raden[i] = gok;
               this.te_raden_zs[i] = gok;
               al_aangepast = true;
               this.woordAanpassen(this.te_raden);
            }
         }
      }
      if (!this.vergelijk()) {
         if (al_aangepast == false) {
            if (this.al_gebruikt.includes(gok)) {
               alert("Deze letter heb je al geraden");
               // al_geweest.innerHTML = `<p>Je hebt deze letter al geraden</p>`
            }
            else {
               this.gebruikteLetters(gok, limiet);
            }
         }
      }
      else {
         this.win();
      }
   }

   vergelijk() {
      var verg_opl = this.oplossing;
      var verg_te_r = this.te_raden_zs
      var teller = 0;
      for (var i = 0; i < verg_opl.length; i++) {
         if (verg_opl[i] === verg_te_r[i]) {
            teller++;
         }
      }
      if (teller === verg_opl.length) {
         return true
      }
      else {
         return false
      }
   }
}

var test = new Galgje();
function game(e) {
   var gok = String.fromCharCode(e.keyCode + 32);
   if (64 < e.keyCode || e.keyCode > 91) {
      var limiet = 2;
      if (test.opbouw_galgje < limiet) {
         test.ronde(gok, limiet);
         // var deze_ronde = test.gebruikt.length;
         // console.log(test.opbouw_galgje, vorige_ronde, deze_ronde);
         // if (test.opbouw_galgje === limiet && vorige_ronde === deze_ronde) {
         //    console.log("noice");
         //    verminderOpbouw(limiet);
         // }
      }
      else if (test.opbouw_galgje = limiet) {
         test.ronde(gok, limiet);
         test.lose();
      }
      // document.getElementById("letter").value = "";
   }
   else {
      alert("Deze letter ken ik niet");
   }
}

document.addEventListener("keydown", game, false);

// button.addEventListener("click", () => game(test));
// test.opbouwGalgje(0);
// test.opbouwGalgje(1);
// test.opbouwGalgje(2);
// test.opbouwGalgje(3);
// test.opbouwGalgje(4);
// test.opbouwGalgje(5);
// test.opbouwGalgje(6);
// test.opbouwGalgje(7);
// test.opbouwGalgje(8);
// test.opbouwGalgje(9);