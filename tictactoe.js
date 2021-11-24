let turn = "X";
let gameOver = false;
let combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//Function to Check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    combination.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " - Won";
            gameOver = true;
            alert(boxText[e[0]].innerText + " - Won");
        }
        
    })
}
const checkDraw = () => {
    let boxText = document.getElementsByClassName('boxText');
    combination.forEach(e => {
        if ((boxText[e[0]].innerText !== boxText[e[1]].innerText) && (boxText[e[2]].innerText !== boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "Match Draw";
            gameOver = true;
            alert("Match Draw");
        }
    })
}
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(ele => {
    let boxText = ele.querySelector('.boxText');
    ele.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerText = "Player - " + turn + " - Turn";
            }
        }
        else{
            checkDraw();
        }
    })
})

reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(ele => {
        ele.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Player - " + turn + " - Turn";
})