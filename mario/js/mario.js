const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${ marioPosition }px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        if (alert('Do you want to restart the game?')) { }
        else window.location.reload();

        clearInterval(loop);
    }

})

document.addEventListener('keydown', jump);