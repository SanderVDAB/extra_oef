var schaar = document.getElementById("schaar");
schaar.addEventListener("click", function () {
   vergelijk(0)
})
var steen = document.getElementById("steen");
steen.addEventListener("click", function () {
   // keuze_speler = keuze[1];
   // console.log(keuze_speler);
   vergelijk(1);
})
var papier = document.getElementById("papier");
papier.addEventListener("click", function () {
   // keuze_speler = keuze[2];
   // console.log(keuze_speler);
   vergelijk(2);
})
var output_text = document.getElementById("output_text");
var output_vergelijking = document.getElementById("output_vergelijking");
var winnaar = document.getElementById("winnaar");
var einde = document.getElementById("einde");


function keuzeComputer(keuze) {
   var keuze_computer = keuze[Math.floor(Math.random() * keuze.length)];
   return keuze_computer
}
// console.log(keuzeComputer());

function verander(keuze_speler, keuze_computer, teken) {
   output_text.innerHTML = ("<p>De speler heeft " + keuze_speler + " en de computer had " + keuze_computer + "</p>");
   output_vergelijking.innerHTML = ("<p>" + keuze_speler + teken + keuze_computer + "</p>");
}

var score_speler = 0;
var score_computer = 0;
function vergelijk(getal_speler) {
   var keuze = ["schaar", "steen", "papier"];
   var keuze_speler = "";
   var keuze_computer = "";
   var keuze_speler = keuze[getal_speler];
   var keuze_computer = keuzeComputer(keuze);
   var getal_computer = keuze.indexOf(keuze_computer); //keuze_computer.indexOf(keuze_computer);
   speler_wint = false;
   computer_wint = false;
   console.log(keuze_speler, getal_speler, keuze_computer, getal_computer);
   if (keuze[(getal_speler + 1) % 3] === keuze[getal_computer]) {
      computer_wint = true;
   }
   if (keuze[(getal_speler + 2) % 3] === keuze[getal_computer]) {
      speler_wint = true;
   }
   if (speler_wint === computer_wint) {
      verander(keuze_speler, keuze_computer, " = ")
      winnaar.innerHTML = ("<p>Speel opnieuw om de winnaar te kennen!</p>");
      console.log("gelijkspel");
   }
   else if (computer_wint === true) {
      verander(keuze_speler, keuze_computer, " < ")
      winnaar.innerHTML = ("<p>Computer wint</p>");
      score_computer++;
      console.log("Computer wint");
   }
   else {
      verander(keuze_speler, keuze_computer, " > ")
      winnaar.innerHTML = ("<p>Speler wint</p>");
      score_speler++;
      console.log("Speler wint");
   }
   if (score_computer + score_speler < 5 && score_speler !== 3 && score_computer !== 3) {
      score();
   }
   else {
      if (score_computer > score_speler) {
         einde.innerHTML = "<h3>GAME OVER - Computer wint</h3><img src=\"../img/sad.jpg\" alt=\"happy\"></img><br><button onClick=\"history.go(0);\">opnieuw</button>"
      }
      else {
         einde.innerHTML = "<h3>GAME OVER - Speler wint</h3><img src=\"../img/happy.jpg\" alt=\"happy\"></img><br><button onClick=\"history.go(0);\">opnieuw</button>"
      }
   }
}

function score() {
   speler.innerHTML = ("<p>Score speler: " + score_speler + "</p>");
   computer.innerHTML = ("<p>Score computer: " + score_computer + "</p>");
}
