const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice-img");
/* Useless part of code I was thinking about using other API in which I would need this part
let min = 1;
let max = 50;
let random;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
*/
console.log(randomNumber);
const URL = `https://api.quotable.io/random`;

const fetchUrl = function () {
  fetch(URL)
    .then((response) => response.json())
    .then((quotes) => {
      adviceText.textContent = quotes.content;
    });
};

dice.addEventListener("click", function () {
  fetchUrl();
});
fetchUrl();
