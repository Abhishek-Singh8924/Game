var turn = 0;
var state = [2, 2, 2, 2, 2, 2, 2, 2, 2];

var gamestatus = 1;

var winposition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ontap(e, i) {
    // alert(i);
    // e.innerHTML = "x";
    if (state[i] == 2 && gamestatus == 1) {
        if (turn == 0) {
            e.innerHTML = "<img src='o.png'>";
            state[i] = 0;
            turn = 1;
        } else if (turn == 1) {
            e.innerHTML = "<img src='x.png'>";
            state[i] = 1;
            turn = 0;
        }
        // check winner
        var winner = checkwinner();
        if (winner == 0) {
            const msg = new SpeechSynthesisUtterance("O player Won");
            window.speechSynthesis.speak(msg);
            win.style.backgroundImage = "url('w.gif')";
            sound.play();
        } else if (winner == 1) {
            const msg = new SpeechSynthesisUtterance("X player Won");
            window.speechSynthesis.speak(msg);
            win.style.backgroundImage = "url('win.gif')";
            sound.play();
        }
        if (winner == 2 && !state.includes(2)) {
            const msg = new SpeechSynthesisUtterance("Game Drow");
            window.speechSynthesis.speak(msg);
            gamestatus = 0;
            win.style.backgroundImage = "url('win.gif')";
            sound.play();
            hint.innerHTML = "Game Draw";
        }
    }
}

function checkwinner() {
    var winner = 2;
    for (x of winposition) {
        if (state[x[0]] == state[x[1]] && state[x[1]] == state[x[2]] && state[x[0]] != 2) {
            winner = state[x[0]];
            gamestatus = 0;
            break;
        }
    }
    return winner;
}

function restartgame() {
    window.location.reload();
}