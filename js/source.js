document.getElementById("aa").addEventListener("click", move);
document.getElementById("ab").addEventListener("click", move);
document.getElementById("ac").addEventListener("click", move);

document.getElementById("ba").addEventListener("click", move);
document.getElementById("bb").addEventListener("click", move);
document.getElementById("bc").addEventListener("click", move);

document.getElementById("ca").addEventListener("click", move);
document.getElementById("cb").addEventListener("click", move);
document.getElementById("cc").addEventListener("click", move);

var activePlayer = "X";
var activeClass = "playerX";

function fillEmpty() {
  if (document.getElementById("aa").className == "player") {
    document.getElementById("aa").className = "emptyend";
  }
  if (document.getElementById("ba").className == "player") {
    document.getElementById("ba").className = "emptyend";
  }
  if (document.getElementById("ca").className == "player") {
    document.getElementById("ca").className = "emptyend";
  }
  if (document.getElementById("ab").className == "player") {
    document.getElementById("ab").className = "emptyend";
  }
  if (document.getElementById("bb").className == "player") {
    document.getElementById("bb").className = "emptyend";
  }
  if (document.getElementById("cb").className == "player") {
    document.getElementById("cb").className = "emptyend";
  }
  if (document.getElementById("ac").className == "player") {
    document.getElementById("ac").className = "emptyend";
  }
  if (document.getElementById("bc").className == "player") {
    document.getElementById("bc").className = "emptyend";
  }
  if (document.getElementById("cc").className == "player") {
    document.getElementById("cc").className = "emptyend";
  }
  activePlayer = "X";
}

function move(event) {
  if (activePlayer == "X" && event.target.className == "player") {
    event.target.innerHTML = "X";
    event.target.className = "playerX";
    activePlayer = "O";
    activeClass = "playerO";
  } else if (activePlayer == "O" && event.target.className == "player") {
    event.target.innerHTML = "O";
    event.target.className = "playerO";
    activePlayer = "X";
    activeClass = "playerX";
  }

  if (document.getElementById("aa").innerHTML == document.getElementById("ab").innerHTML &&
    document.getElementById("aa").innerHTML == document.getElementById("ac").innerHTML) {

    if (document.getElementById("aa").innerHTML == "X") {
      document.getElementById("aa").className = "winnerX";
      document.getElementById("ab").className = "winnerX";
      document.getElementById("ac").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("aa").innerHTML == "O") {
      document.getElementById("aa").className = "winnerO";
      document.getElementById("ab").className = "winnerO";
      document.getElementById("ac").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("ba").innerHTML == document.getElementById("bb").innerHTML &&
    document.getElementById("ba").innerHTML == document.getElementById("bc").innerHTML) {

    if (document.getElementById("ba").innerHTML == "X") {
      document.getElementById("ba").className = "winnerX";
      document.getElementById("bb").className = "winnerX";
      document.getElementById("bc").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("ba").innerHTML == "O") {
      document.getElementById("ba").className = "winnerO";
      document.getElementById("bb").className = "winnerO";
      document.getElementById("bc").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("ca").innerHTML == document.getElementById("cb").innerHTML &&
    document.getElementById("ca").innerHTML == document.getElementById("cc").innerHTML) {

    if (document.getElementById("ca").innerHTML == "X") {
      document.getElementById("ca").className = "winnerX";
      document.getElementById("cb").className = "winnerX";
      document.getElementById("cc").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("ca").innerHTML == "O") {
      document.getElementById("ca").className = "winnerO";
      document.getElementById("cb").className = "winnerO";
      document.getElementById("cc").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("aa").innerHTML == document.getElementById("ba").innerHTML &&
    document.getElementById("aa").innerHTML == document.getElementById("ca").innerHTML) {

    if (document.getElementById("aa").innerHTML == "X") {
      document.getElementById("aa").className = "winnerX";
      document.getElementById("ba").className = "winnerX";
      document.getElementById("ca").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("aa").innerHTML == "O") {
      document.getElementById("aa").className = "winnerO";
      document.getElementById("ba").className = "winnerO";
      document.getElementById("ca").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("ab").innerHTML == document.getElementById("bb").innerHTML &&
    document.getElementById("ab").innerHTML == document.getElementById("cb").innerHTML) {

    if (document.getElementById("ab").innerHTML == "X") {
      document.getElementById("ab").className = "winnerX";
      document.getElementById("bb").className = "winnerX";
      document.getElementById("cb").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("ab").innerHTML == "O") {
      document.getElementById("ab").className = "winnerO";
      document.getElementById("bb").className = "winnerO";
      document.getElementById("cb").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("ac").innerHTML == document.getElementById("bc").innerHTML &&
    document.getElementById("ac").innerHTML == document.getElementById("cc").innerHTML) {

    if (document.getElementById("ac").innerHTML == "X") {
      document.getElementById("ac").className = "winnerX";
      document.getElementById("bc").className = "winnerX";
      document.getElementById("cc").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("ac").innerHTML == "O") {
      document.getElementById("ac").className = "winnerO";
      document.getElementById("bc").className = "winnerO";
      document.getElementById("cc").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("aa").innerHTML == document.getElementById("bb").innerHTML &&
    document.getElementById("aa").innerHTML == document.getElementById("cc").innerHTML) {

    if (document.getElementById("aa").innerHTML == "X") {
      document.getElementById("aa").className = "winnerX";
      document.getElementById("bb").className = "winnerX";
      document.getElementById("cc").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("aa").innerHTML == "O") {
      document.getElementById("aa").className = "winnerO";
      document.getElementById("bb").className = "winnerO";
      document.getElementById("cc").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    }
  } else if (document.getElementById("ca").innerHTML == document.getElementById("bb").innerHTML &&
    document.getElementById("ca").innerHTML == document.getElementById("ac").innerHTML) {

    if (document.getElementById("ca").innerHTML == "X") {
      document.getElementById("ca").className = "winnerX";
      document.getElementById("bb").className = "winnerX";
      document.getElementById("ac").className = "winnerX";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player X wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("ca").innerHTML == "O") {
      document.getElementById("ca").className = "winnerO";
      document.getElementById("bb").className = "winnerO";
      document.getElementById("ac").className = "winnerO";
      fillEmpty();
      document.getElementById("feedbackText").innerHTML = "Player O wins.";
      document.getElementById("reset").value = "New Game";
    } else if (document.getElementById("aa").className != "player" &&
      document.getElementById("ab").className != "player" &&
      document.getElementById("ac").className != "player" &&

      document.getElementById("ba").className != "player" &&
      document.getElementById("bb").className != "player" &&
      document.getElementById("bc").className != "player" &&

      document.getElementById("ca").className != "player" &&
      document.getElementById("cb").className != "player" &&
      document.getElementById("cc").className != "player") {
        document.getElementById("feedbackText").innerHTML = "It's a draw.";
        document.getElementById("reset").value = "New Game";
      }
  }
}

function resetGame() {
  document.getElementById("aa").className = "player";
  document.getElementById("ab").className = "player";
  document.getElementById("ac").className = "player";

  document.getElementById("ba").className = "player";
  document.getElementById("bb").className = "player";
  document.getElementById("bc").className = "player";

  document.getElementById("ca").className = "player";
  document.getElementById("cb").className = "player";
  document.getElementById("cc").className = "player";

  document.getElementById("aa").innerHTML = "";
  document.getElementById("ab").innerHTML = "";
  document.getElementById("ac").innerHTML = "";

  document.getElementById("ba").innerHTML = "";
  document.getElementById("bb").innerHTML = "";
  document.getElementById("bc").innerHTML = "";

  document.getElementById("ca").innerHTML = "";
  document.getElementById("cb").innerHTML = "";
  document.getElementById("cc").innerHTML = "";

  activePlayer = "X";
  document.getElementById("feedbackText").innerHTML = "";
  document.getElementById("reset").value = "Reset Game";
}
