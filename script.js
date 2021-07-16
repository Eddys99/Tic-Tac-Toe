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
        var line1 = document.getElementById(i + "1").innerText, line2 = document.getElementById(i + "2").innerText, line3 = document.getElementById(i + "3").innerText;
        var col1 = document.getElementById(10 + i).innerText, col2 = document.getElementById(20 + i).innerText, col3 = document.getElementById(30 + i).innerText;
        if ((col1 == col2 && col2 == col3) && (col1 == 'X' || col1 == 'O')) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + col1;
            restartGame();
        } else if ((line1 == line2 && line2 == line3) && (line1 == 'X' || line1 == 'O')) {
            document.getElementById("winnerMsg").innerHTML = "The winner is " + line1;
            restartGame();
        }

    }
    var diag1 = document.getElementById("11").innerText, diag2 = document.getElementById("22").innerText, diag3 = document.getElementById("33").innerText;
    var paralelDiag1 = document.getElementById("13").innerText, paralelDiag2 = document.getElementById("22").innerText, paralelDiag3 = document.getElementById("31").innerText;
    if ((diag1 == diag2 && diag2 == diag3) && (diag1 == 'X' || diag1 == 'O')) {
        document.getElementById("winnerMsg").innerHTML = "The winner is " + diag1;
        restartGame();
    } else if ((paralelDiag1 == paralelDiag2 && paralelDiag2 == paralelDiag3) && (paralelDiag1== 'X' || paralelDiag1 == 'O')) {
        document.getElementById("winnerMsg").innerHTML = "The winner is " + paralelDiag1;
        restartGame();
    } else if (moves == 9) {
        document.getElementById("winnerMsg").innerHTML = "Draw";
        restartGame();
    }
    ++moves;
}

function restartGame() {
    setTimeout (function() {location.reload()}, 2000);
}