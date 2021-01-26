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
  <div class="optionPicked">
      <h2 class="title">you picked</h2>
      <div class="optionHouse">
          <div class="optionHouse__circle">
          </div>
      </div>
  </div>
</div>
`