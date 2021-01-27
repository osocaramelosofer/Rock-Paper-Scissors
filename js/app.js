

const gameApp = document.querySelector(".gameApp");

const bntRules = document.querySelector(".rulesModalButton");
const rulesModal = document.querySelector(".rulesModal");
const btnClose = document.querySelector("#btnClose");

const score = document.querySelector('.modal__score--number');

bntRules.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
});




const initGame = () => {

  score.innerText = window.localStorage.getItem('score') || '0';
  gameApp.innerHTML = initBoard;

  const btnPaper = document.querySelector("#btnPaper");
  const btnScissors = document.querySelector("#btnScissors");
  const btnRock = document.querySelector("#btnRock");
  const options = [btnPaper, btnScissors, btnRock];

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      compare(btn.value, options);
    });
  });
  




}

initGame();



const compare = (userChoise, options) => {
  options.forEach((btn) => {
    btn.removeEventListener('click',()=>{});
  });  

  compareView(userChoise);
  const random = Math.floor(Math.random() * (4 - 1) + 1);
  setTimeout(() => {
    const optionHouse = document.querySelector('.optionHouse');
    optionHouse.innerHTML = houseOption(random);

    showResult(userChoise, random);
  }, 1500);


};

const compareView = (userChoise) => {
  console.log(userChoise);

  gameApp.innerHTML = compareBoard(userChoise);
};

const showResult = (userChoise, houseChoise) => {
  let result = null;
  const resultContainer = document.querySelector('.resultContainer');
  const btnPlayAgain = document.querySelector('.btn-playAgain');
  if (userChoise == houseChoise ) {
    result = 0;
  } else if  ((userChoise == 1 && houseChoise ==3) || (userChoise == 3 && houseChoise ==2) || (userChoise == 2 && houseChoise ==1)) {
    result = 1;
  } else {
    result = -1;
  }


  resultContainer.innerHTML = resultMessage(result);

  if ( result == 1 ) {
    const userScore = window.localStorage.getItem('score') || '0';
    const newSCore = parseInt(userScore) + 1;
    window.localStorage.setItem('score', String(newSCore));
  }
};



