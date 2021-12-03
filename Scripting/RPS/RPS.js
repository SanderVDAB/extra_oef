//array
var arr = ["wouter", "heeft", "graag"];

var msg = document.getElementById("msg");
var vooraanPlus = document.getElementById("vooraanPlus");
vooraanPlus.addEventListener("click", function () {
   var input = document.getElementById("voegtoe").value;
   arr.unshift(input.toLowerCase());
   msg.innerHTML = `<p>De array is: ${arr.join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})
var vooraanMin = document.getElementById("vooraanMin");
vooraanMin.addEventListener("click", function () {
   arr.shift();
   msg.innerHTML = `<p>De array is: ${arr.join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})
var achteraanPlus = document.getElementById("achteraanPlus");
achteraanPlus.addEventListener("click", function () {
   var input = document.getElementById("voegtoe").value;
   arr.push(input.toLowerCase());
   msg.innerHTML = `<p>De array is: ${arr.join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})
var achteraanMin = document.getElementById("achteraanMin");
achteraanMin.addEventListener("click", function () {
   arr.pop();
   msg.innerHTML = `<p>De array is: ${arr.join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})
var reverse = document.getElementById("reverse");
reverse.addEventListener("click", function () {
   arr.reverse();
   msg.innerHTML = `<p>De array is: ${arr.join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})
var alfabetisch = document.getElementById("alfabetisch");
alfabetisch.addEventListener("click", function () {
   msg.innerHTML = `<p>De array is: ${arr.sort().join(", ")}</p><p>Lengte Array: ${arr.length}</p>`
})

//schaar steen papier
var schaar = document.getElementById("schaar");
schaar.addEventListener("click", () => vergelijk(0));
var steen = document.getElementById("steen");
steen.addEventListener("click", () => vergelijk(1));
var papier = document.getElementById("papier");
papier.addEventListener("click", () => vergelijk(2));
var output_text = document.getElementById("output_text");
var output_vergelijking = document.getElementById("output_vergelijking");
var winnaar = document.getElementById("winnaar");
var einde = document.getElementById("einde");

function keuzeComputer(keuze) {
   var keuze_computer = keuze[Math.floor(Math.random() * keuze.length)];
   return keuze_computer
}

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
   }
   else if (computer_wint === true) {
      verander(keuze_speler, keuze_computer, " < ")
      winnaar.innerHTML = ("<p>Computer wint</p>");
      score_computer++;
   }
   else {
      verander(keuze_speler, keuze_computer, " > ")
      winnaar.innerHTML = ("<p>Speler wint</p>");
      score_speler++;
   }
   if (score_computer + score_speler < 5 && score_speler !== 3 && score_computer !== 3) {
      score();
   }
   else {
      if (score_computer > score_speler) {
         einde.innerHTML = `<h3>GAME OVER - Computer wint</h3><img src=./img/sad.jpg alt=happy></img><br><button onClick=history.go(0);>opnieuw</button>`
      }
      else {
         einde.innerHTML = `<h3>GAME OVER - Speler wint</h3><img src=./img/happy.png alt=happy></img><br><button onClick=history.go(0);>opnieuw</button>`
      }
   }
}

function score() {
   speler.innerHTML = ("<p>Score speler: " + score_speler + "</p>");
   computer.innerHTML = ("<p>Score computer: " + score_computer + "</p>");
}
