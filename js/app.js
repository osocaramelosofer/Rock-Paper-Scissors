const bntRules   = document.querySelector('.rulesModalButton');
const rulesModal = document.querySelector('.rulesModal');
const btnClose   = document.querySelector('#btnClose');

/*Eventos */
bntRules.addEventListener('click', ()=>{
    rulesModal.classList.remove('hidden');
});

btnClose.addEventListener('click', ()=> {
    rulesModal.classList.add('hidden');
});