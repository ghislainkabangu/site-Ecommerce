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
/********************************** */
let link = document.querySelectorAll(".link");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    sidenav.style = "left: -100%";
  });
}
/****************************************************** */
let addToCard = document.querySelectorAll(".add");
for (let i = 0; i < addToCard.length; i++) {
  addToCard[i].href = "formulaire.html";
  addToCard[i].title = "formulaire d'achat";
  addToCard[i].innerHTML = "commander";
}
/************************ */
function fidelite() {
  alert(
    "Devenez membre du programme fidelité \n Un chèque de fidelité de 10% du total des 5 articles achetés"
  );
}
/****************************section div********************* */
let boxArticle = document.querySelectorAll(".boxArticle");
for (let z = 0; z < boxArticle.length; z++) {
  boxArticle[z].addEventListener("mouseover", () => {
    boxArticle[z].classList.add("boxClass");
  });
  boxArticle[z].addEventListener("mouseout", () => {
    boxArticle[z].classList.remove("boxClass");
  });
}
