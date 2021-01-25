const bntRules   = document.querySelector('.rulesModalButton');
const rulesModal = document.querySelector('.rulesModal');
const btnClose   = document.querySelector('#btnClose');

const btns       = document.querySelectorAll('.btn').className;
const classeBtns = ["hand-paper","hand-rock"];
console.log(btns);

/*Eventos */
bntRules.addEventListener('click', ()=>{
    rulesModal.classList.remove('hidden');
});

btnClose.addEventListener('click', ()=> {
    rulesModal.classList.add('hidden');
});