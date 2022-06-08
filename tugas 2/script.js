
const cross = 'cross';
const circle = 'circle';

const boxElement = document.querySelectorAll('.box')
const resetButton = document.getElementById('reset')

let turn = cross;

resetButton.onclick = startGame;



function handleClick(e){
    const boxTarget = e.target;

    if(turn === cross){
    boxTarget.style.backgroundColor = 'yellow';
    turn = circle;
    }else{
        boxTarget.style.backgroundColor = 'blue';
        turn = cross;
    }
}

function startGame(){
    boxElement.forEach(box =>{
        box.style.backgroundColor = 'white';
        box.addEventListener("click", handleClick, {once:true});
    });
}

startGame();