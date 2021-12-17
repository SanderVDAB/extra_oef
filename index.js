var test = document.getElementById("RPS")

function openSchaar() {
   window.location.href = "./Scripting/Galgje/galgje.html";
}

console.log(window.location.href);
test.addEventListener("click", () => openSchaar());