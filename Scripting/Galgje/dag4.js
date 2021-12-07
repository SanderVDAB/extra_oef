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
// function beginOpbouw() {
//    galg.innerHTML = `<div id="horizontaal_bovenaan"></div><div id="midden"><div id="verticaal"></div><div id="mannetje"><div id="touw"></div><div id="hoofd"></div><div id="body"><div id="armL"></div><div id="torso"></div><div id="armR"></div></div><div id="benen"><div id="beenL"></div><div id="beenR"></div></div></div></div><div id="horizontaal_onderaan"></div>`
// }
// window.addEventListener("load", () => beginOpbouw());
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
var veranderingen = [horizontaal_onderaan, verticaal, horizontaal_bovenaan, touw, hoofd, torso, armL, armR, beenL, beenR]
var button = document.getElementById("button2");
var gebruikte_letters = document.getElementById("gebruikte_letters");
var al_geweest = document.getElementById("al_geweest");
var oplossing = "";
var te_raden = [];
var gebruikt = [];
var opbouw_galgje = 0;
var al_gebruikt = "";


function randomWoord() {
   var woorden = ["schachtentemmer", "Koepuur", "tetten", "worsten", "willies en marjetten", "bier", "orval", "KILA", "tak", "kat", "pot", "hol", "map", "mat", "pingpong", "schaken", "ine", "patatje", "plezier", "clublied", "hol", "hal", "man", "gat", "nee", "min", "zit", "miauw", "Gent", "Vlaanderen", "Wallonië", "Berlijn", "Zweden", "panamakanaal", "rodenbach", "foeder", "vat", "graventeenfeesten", "overpoort", "pallieter", "mega", "gutenberg", "galabal", "SK ghendt", "DB", "rodenbach vintage", "facebook", "youtube", "twitter", "gestapo knallmuzik", "ricard", "tequila", "Koen Barbez", "Sarah Vanbesien", "Giliam Agten", "baktafel", "doop", "schacht", "look", "shotje", "confrater", "pere total", "DMD", "alex agnew", "nerfgeweer", "limburg", "jukebox", "DJ Nytril", "ribben", "karaoke", "troela", "prosit senior", "zevensprong", "cantus", "Koepuur", "zetel", "jaguar", "hotel", "klok", "rekenmachine"];
   oplossing = woorden[Math.floor(Math.random() * woorden.length)].split("");
   console.log(oplossing);
   for (var i = 0; i < oplossing.length; i++) {
      if (oplossing[i] === " ") {
         te_raden.push(`<span class="spatie"></span>`)
         oplossing.splice(i, 1);
      }
      te_raden.push("_")
   }
   woordAanpassen();
}

function woordAanpassen() {
   woord.innerHTML = `<p>${te_raden.join(" ")}</p>`;
}

function gebruikteLetters(gok) {
   gebruikt.push(gok);
   gebruikte_letters.innerHTML = `<p>${gebruikt.sort().join(", ")}</p>`
}

function opbouwGalgje(getal) {
   console.log("test");
   if (getal == 1) {
      veranderingen[getal].style.display = "flex";
   }
   veranderingen[getal].style.display = "block";
}

function ronde() {
   var gok = document.getElementById("letter").value;
   gok = gok.toLowerCase();
   gok_u = gok.toUpperCase();
   var al_aangepast = false;
   for (var i = 0; i < oplossing.length; i++) {
      if (oplossing[i] === gok || oplossing[i] === gok_u) {
         te_raden[i] = gok;
         al_aangepast = true;
         woordAanpassen();
      }
   }
   if (al_aangepast == false) {
      if (al_gebruikt.includes(gok)) {
         al_geweest.innerHTML = `<p>Je hebt deze letter al geraden</p>`
      }
      else {
         gebruikteLetters(gok);
         opbouwGalgje(opbouw_galgje);
         opbouw_galgje++;
         console.log(opbouw_galgje);
         al_gebruikt += ` ${gok} `
      }
   }
}

function vergelijk() {
   if (oplossing === te_raden) {
      return true
   }
   return false
}

function game() {
   if (vergelijk()) {
      input.innerHTML = `<div class="einde"><img src=./img/sad.png alt=sad></img><br><button onClick=history.go(0);>opnieuw</button></div>`

   }
   else if (opbouw_galgje < 9) {
      ronde();
   }
   else {
      opbouwGalgje(opbouw_galgje);
      input.innerHTML = `<div class="einde"><h3>GAME OVER - Computer wint</h3><img src="../img/you_lose.png" alt=""><br><button onClick=history.go(0);>opnieuw</button></div>`
      gebruikte_letters.style.display = "none";
   }
}

button.addEventListener("click", () => game());
randomWoord();
// opbouwGalgje(0);
// opbouwGalgje(1);
// opbouwGalgje(2);
// opbouwGalgje(3);
// opbouwGalgje(4);
// opbouwGalgje(5);
// opbouwGalgje(6);
// opbouwGalgje(7);
// opbouwGalgje(8);
// opbouwGalgje(9);