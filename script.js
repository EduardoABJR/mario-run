const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var score = 0

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace
    ('px', '');


   
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        document.querySelector ('.end').innerHTML = `Sua pontuação foi ${score}`

        clearInterval(loop);
        clearInterval(pontos);
    }

 
}, 10);

const pontos = setInterval(()=> {
    score++
    document.querySelector ('.count').innerHTML = `${score}`
}, 2000);
 




document.addEventListener('keydown', jump);