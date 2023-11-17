const btn = document.getElementById("btn");
const main = document.getElementById("main");
const main2 = document.getElementById("main-2");
const list = document.getElementById("list");
const ratingNumber = document.getElementById("rating-number");
const item = [1, 2, 3, 4, 5];
let result = 0;

item.map((itemValue) => {
  // Usando uma IIFE para criar um escopo separado
  (function (item) {
    const div = document.createElement("div");
    div.innerText = item;
    div.className = "item";
    div.id = item;
    list.appendChild(div);
    div.onclick = function () {
      result = item;

      // Remover a classe 'active' de todos os elementos antes de adicionar à clicado
      document
        .querySelectorAll(".item")
        .forEach((el) => el.classList.remove("active"));

      div.classList.add("active");
    };
  })(itemValue);
});

btn.onclick = function () {
  main.style.display = "none";
  main2.style.display = "flex";
  ratingNumber.innerText = result;
};
