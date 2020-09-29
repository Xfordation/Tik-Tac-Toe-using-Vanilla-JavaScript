//Winner
const getWinner = function () {
  const player1 = `<i class="fa fa-circle-o fa-lg fa-circle-color"></i>`;
  const player2 = `<i class="fa fa-close fa-lg fa-close-color"></i>`;
  var bool;
  var op;
  // List of Winning Conditions
  const winningCond = [
    [
      document.getElementById("box1"),
      document.getElementById("box2"),
      document.getElementById("box3"),
    ],
    [
      document.getElementById("box4"),
      document.getElementById("box5"),
      document.getElementById("box6"),
    ],
    [
      document.getElementById("box7"),
      document.getElementById("box8"),
      document.getElementById("box9"),
    ],
  ];

  //Check Vertically
  this.getWinnerVertically = function () {
    for (var i = 0; i < winningCond.length; i++) {
      // Checking for Player One ie "o"
      if (
        winningCond[0][i].innerHTML === player1 &&
        winningCond[1][i].innerHTML === player1 &&
        winningCond[2][i].innerHTML === player1
      )
        return "o";

      // Checking for Player Two ie "x"
      if (
        winningCond[0][i].innerHTML === player2 &&
        winningCond[1][i].innerHTML === player2 &&
        winningCond[2][i].innerHTML === player2
      )
        return "x";
    }
  };

  //   Check Horizontally
  this.getWinnerHorizontally = function () {
    for (var i = 0; i < winningCond.length; i++) {
      // Checking for Player One ie "o"
      if (
        winningCond[i][0].innerHTML === player1 &&
        winningCond[i][1].innerHTML === player1 &&
        winningCond[i][2].innerHTML === player1
      )
        return "o";

      // Checking for Player Two ie "x"
      if (
        winningCond[i][0].innerHTML === player2 &&
        winningCond[i][1].innerHTML === player2 &&
        winningCond[i][2].innerHTML === player2
      )
        return "x";
    }
  };

  //Checking First Diagnoal i.e 00, 11, 22
  this.getFirstDiagnol = function () {
    if (
      winningCond[0][0].innerHTML === player1 &&
      winningCond[1][1].innerHTML === player1 &&
      winningCond[2][2].innerHTML === player1
    )
      return "o";

    // Checking for Player Two ie "x"
    if (
      winningCond[0][0].innerHTML === player2 &&
      winningCond[1][1].innerHTML === player2 &&
      winningCond[2][2].innerHTML === player2
    )
      return "x";
  };

  //   Check for Second Diagnol 02, 11, 20
  this.getSecondDiagnol = function () {
    if (
      winningCond[0][2].innerHTML === player1 &&
      winningCond[1][1].innerHTML === player1 &&
      winningCond[2][0].innerHTML === player1
    )
      return "o";

    // Checking for Player Two ie "x"
    if (
      winningCond[0][2].innerHTML === player2 &&
      winningCond[1][1].innerHTML === player2 &&
      winningCond[2][0].innerHTML === player2
    )
      return "x";
  };
  this.isWin = function () {
    try {
      //   Check Win for O
      if (
        this.getWinnerVertically() === "o" ||
        this.getWinnerHorizontally() === "o" ||
        this.getFirstDiagnol() === "o" ||
        this.getSecondDiagnol() === "o"
      ) {
        this.player1Win();
      }

      // Check Win for X
      if (
        this.getWinnerVertically() === "x" ||
        this.getWinnerHorizontally() === "x" ||
        this.getFirstDiagnol() === "x" ||
        this.getSecondDiagnol() === "x"
      ) {
        this.player2Win();
      }
    } catch {
      this.draw();
    }
  };

  //   Player 1 win Message
  this.player1Win = function () {
    const resultSection = document.getElementById("result-dec");
    resultSection.style.display = "block";
    document.getElementById("result").innerHTML = `${player1} WON!`;
    document.getElementById("gamebox").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("footer").style.position = "fixed";
  };

  //   Player 2 win message
  this.player2Win = function () {
    const resultSection = document.getElementById("result-dec");
    resultSection.style.display = "block";
    document.getElementById("result").innerHTML = `${player2} WON!`;
    document.getElementById("gamebox").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("footer").style.position = "fixed";
  };

  //   Draw Message
  this.draw = function () {
    const resultSection = document.getElementById("result-dec");
    resultSection.style.display = "block";
    document.getElementById("result").innerHTML = `DRAW${player1}${player2}`;
    document.getElementById("gamebox").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("footer").style.position = "fixed";
  };
};
