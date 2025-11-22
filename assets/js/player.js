let boxes = document.querySelectorAll(".box");
let drowWinner = document.querySelector(".drow-winner");
let reStart = document.querySelector(".re-start");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let reStartGame = () => {
    turnO = true;
    count = 0;
    enableBox();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "0";
            box.style.color = "green";
            turnO = false;
        } else {
            turnO === false;
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

let gameDraw = () => {
    drowWinner.innerText = "Game Is DROW";
    disableBox();
};

let disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

let enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        drowWinner.innerText = "";
        reStart.innerText = "Re-Start";
    }
};
let showWinner = (winner) => {
    drowWinner.innerText = `Winner Is ${winner}`;
    disableBox();
    reStart.innerText = "New Game";
};

let checkWinner = () => {
    for (let Pattern of winPatterns) {
        let pos1Val = boxes[Pattern[0]].innerText;
        let pos2Val = boxes[Pattern[1]].innerText;
        let pos3Val = boxes[Pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

reStart.addEventListener("click", reStartGame);


