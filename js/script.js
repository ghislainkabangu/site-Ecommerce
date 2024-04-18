/** @format */
// CODE DE GESTION DU MENU
let sidenav = document.getElementsByClassName("sidenav")[0];
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidenav.style = "left: -0px";
});

closeBtn.addEventListener("click", () => {
  sidenav.style = "left: -100%";
});
/****************************************************** */
let h1 = document.getElementsByTagName("h1")[0];
let fond_accueil = document.querySelector(".fond_accueil");
fond_accueil.addEventListener("mouseover", () => {
  fond_accueil.classList.add("new_font");
  h1.innerHTML = "profitez de la qualité des service";
});
fond_accueil.addEventListener("mouseout", () => {
  fond_accueil.classList.remove("new_font");
  h1.innerHTML = "HIGH QUALITY TECH VETEMENTS & ACCESSOIRES";
});

/****************************************************** */
let addToCard = document.querySelectorAll(".add");
for (let i = 0; i < addToCard.length; i++) {
  addToCard[i].href = "formulaire.html";
  addToCard[i].title="formulaire d'achat"
}

