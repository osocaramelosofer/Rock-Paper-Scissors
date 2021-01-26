import { compareBoard } from "./templates/gameContainer";
const gameContainer = document.querySelector(".gameContainer");

const bntRules = document.querySelector(".rulesModalButton");
const rulesModal = document.querySelector(".rulesModal");
const btnClose = document.querySelector("#btnClose");

const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const btnRock = document.querySelector("#btnRock");

const options = [btnPaper, btnScissors, btnRock];

/*Eventos */
bntRules.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
});

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    compare(btn.value);
  });
});

const compare = (userChoise) => {
  //compareView();
  console.log("click");
  const random = Math.floor(Math.random() * (4 - 1) + 1);
};

const compareView = () => {
  console.log(gameContainer);

  gameContainer.innerHTML = compareBoard;
};
