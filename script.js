var turn = Math.floor(Math.random() * 2) + 1;
var moves = 0;

window.onload = function whoIsMarking() {
    if (turn % 2 == 0) {
        document.getElementById("markingAnnounce").innerHTML = "X is starting";
    } else {
        document.getElementById("markingAnnounce").innerHTML = "O is starting";
    }
}

function mark(thisCell) {
    if (turn % 2 == 0) {
        document.getElementById(thisCell).innerHTML = "X";
    } else {
        document.getElementById(thisCell).innerHTML = "O";
    }
    ++turn;
    document.getElementById(thisCell).removeAttribute("onclick");
    checkWinner();
}

function checkWinner() {
    for (var i = 1; i <= 3; ++i) {
        var line = [], col = [], diag = [], paralelDiag = [];
        for(var j = 1, stringPosition = 0; j <= 3; ++j, ++stringPosition) {
            line[stringPosition] = document.getElementById(i + "" + j).innerText;
            col[stringPosition] = document.getElementById(j + "" + i).innerText;
            diag[stringPosition] = document.getElementById(j + "" + j).innerText;
            paralelDiag[stringPosition] = document.getElementById(j + "" + (3 + 1 - j)).innerText;
        }
        if ((line[0] == line[1] && line[1] == line[2]) && (line[0] == "X" || line[0] == "O")) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + line[0];
            restartGame();
        } else if ((col[0] == col[1] && col[1] == col[2]) && (col[0] == "X" || col[0] == "O")) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + col[0];
            restartGame();
        } else if ((diag[0] == diag[1] && diag[1] == diag[2]) && (diag[0] == "X" || diag[0] == "O")) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + diag[0];
            restartGame();
        } else if ((paralelDiag[0] == paralelDiag[1] && paralelDiag[1] == paralelDiag[2]) && (paralelDiag[0] == "X" || paralelDiag[0] == "O")) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + paralelDiag[0];
            restartGame();
        } 
    }
    if (moves == 9) {
        document.getElementById("winnerMsg").innerHTML = "Draw";
        restartGame();
    }
    ++moves;
}

function restartGame() {
    setTimeout (function() {location.reload()}, 2000);
}