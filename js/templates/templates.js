const compareBoard = (option) => `
<div class="compareBoard">
  <div class="optionPicked">
      <h2 class="title">you picked</h2>
      <div class="option compared">
          <div class="option__border" style="background-image: linear-gradient(${
              option == 1 ?  ' hsl(230, 89%, 62%) , hsl(230, 89%, 65%)' :
              option == 2 ? 'hsl(39, 89%, 49%) , hsl(40, 84%, 53%)' :
              ' hsl(349, 71%, 52%) , hsl(349, 70%, 56%)'
          });">
              <div class="option__content">
                  <img src="./assets/icon-${option == 1 ? 'paper' : option == 2 ? 'scissors' : 'rock'}.svg" alt="option">
              </div>
          </div>
      </div>
  </div>


  <div class="resultContainer"> </div>
  <div class="optionPicked">
      <h2 class="title">The house picked</h2>
      <div class="optionHouse">
      </div>
  </div>
</div>
`
const houseOption = (option) => `
<div class="option compared">
    <div class="option__border" style="background-image: linear-gradient(${
        option == 1 ?  ' hsl(230, 89%, 62%) , hsl(230, 89%, 65%)' :
        option == 2 ? 'hsl(39, 89%, 49%) , hsl(40, 84%, 53%)' :
        ' hsl(349, 71%, 52%) , hsl(349, 70%, 56%)'
    });">
        <div class="option__content">
            <img src="./assets/icon-${option == 1 ? 'paper' : option == 2 ? 'scissors' : 'rock'}.svg" alt="option">
        </div>
    </div>
</div>
`

const resultMessage = (result) => `
<div class="resultMessage">
    <h1 class="result">${result == -1 ? 'you lose' : result == 1 ? 'you win' : 'drow'}</h1>
    <button class="btn-playAgain" onClick="initGame()">play again</button>
</div>
`

const initBoard = `
<div class="gameBoard">
<button id="btnRock" class="option option1" value="1">
  <div class="option__border1">
    <div class="option__content">
      <img src="./assets/icon-paper.svg" alt="paper" />
    </div>
  </div>
</button>
<button id="btnScissors" class="option option2" value="2">
  <div class="option__border2">
    <div class="option__content">
      <img src="./assets/icon-scissors.svg" alt="scissors" />
    </div>
  </div>
</button>
<button id="btnPaper" class="option option3" value="3">
  <div class="option__border3">
    <div class="option__content">
      <img src="./assets/icon-rock.svg" alt="rock" />
    </div>
  </div>
</button>
</div>
`