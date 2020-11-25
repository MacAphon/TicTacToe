document.getElementById("aa").addEventListener("click", move);
document.getElementById("ab").addEventListener("click", move);
document.getElementById("ac").addEventListener("click", move);

document.getElementById("ba").addEventListener("click", move);
document.getElementById("bb").addEventListener("click", move);
document.getElementById("bc").addEventListener("click", move);

document.getElementById("ca").addEventListener("click", move);
document.getElementById("cb").addEventListener("click", move);
document.getElementById("cc").addEventListener("click", move);

var activePlayer = "X"
var activeClass = "playerX"

function move(event) {
  if (activePlayer == "X" && event.target.className == "player") {
    event.target.innerHTML = "X";
    event.target.className = "playerX";
    activePlayer = "O";
    activeClass = "playerO"
  } else if (activePlayer == "O" && event.target.className == "player") {
    event.target.innerHTML = "O";
    event.target.className = "playerO";
    activePlayer = "X";
    activeClass = "playerX"
  }
}
