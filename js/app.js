const bntRules = document.querySelector('.rulesModalButton');
const rulesModal = document.querySelector('.rulesModal');

bntRules.addEventListener('click', ()=>{
    rulesModal.classList.remove('hidden');
});