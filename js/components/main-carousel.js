// alert("Caixa Troll")



const  buttonRight = document.querySelector('.button-arrow.-right');
const  buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

buttonLeft.addEventListener('click', function(){
    elements.style =`transform: translateX(${pixels}px`;
    pixels = pixels - 100;
})

buttonRight.addEventListener('click', function(){
    elements.style =`transform: translateX(${pixels}px)`;
    pixels = pixels + 100;
})


