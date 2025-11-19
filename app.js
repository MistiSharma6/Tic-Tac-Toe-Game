let boxes = document.querySelectorAll(".box1");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const win_patterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


const enablebtns = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
}

const resetGame = () => {
    turnO = true;
    enablebtns();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        check_winner();
    });
});

const check_winner = () => {
    for (let pattern of win_patterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {

            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner", posval1);
                show_winner(posval1);
            }
        }
    }
}

const show_winner = (winner) => {
    msg.innerText = `Congratulations! WINNER is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
};

const disablebtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);