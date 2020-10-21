/**
 * @name Tik-Tac-Toe
 * @version 1.0
 * @author Xfordation
 */

// Game Initializer
const gameInit = function () {
  /*Constants*/
  //current Player
  let currentPlayer;
  //Message or Whose Turn it will be
  let turnStatus = document.getElementById("turnStat");
  turnStatus.innerHTML = `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`;
  //Array of the Board
  let boxes = Array.from(document.querySelectorAll(".boxes div"));

  this.start = function () {
    document.getElementById("main-box").addEventListener("click", (e) => {
      boxes.forEach((box) => {
        if (e.target == box) {
          //   Current Player Selection & Setting the turn Status
          box.innerHTML = this.turnHandler();
          // Winner Object
          const win = new getWinner();
          win.isWin();
        }
      });
    });
  };

  // Turn Function
  this.turnHandler = function () {
    currentPlayer =
      currentPlayer === `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`
        ? `<i class="fa fa-close fa-lg fa-close-color"></i>`
        : `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`;
    //Turn Status
    turnStatus.innerHTML =
      currentPlayer === `<i class="fa fa-close fa-lg fa-close-color"></i>`
        ? `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`
        : `<i class="fa fa-close fa-lg fa-close-color"></i>`;
    return currentPlayer;
  };

  // Reset Function
  this.reset = function () {
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
    turnStatus.innerHTML = `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`;
    currentPlayer = "";
    document.getElementById("gamebox").style.display = "block";
    document.getElementById("select").style.display = "flex";
    document.getElementById("result-dec").style.display = "none";
    document.getElementById("footer").style.position = "relative";
  };
  document.getElementById("reset").addEventListener("click", this.reset);
  document.getElementById("result-dec").addEventListener("click", this.reset);
};

// Initializing the game Obj
const obj = new gameInit();
obj.start();
