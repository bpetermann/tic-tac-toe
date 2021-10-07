const playerFactory = (name) => {
  return { name };
};

const gameflow = (() => {
  let player1 = { name: 'Player1' };
  let player2 = { name: 'Player2' };
  const container = document.getElementById('container');
  const declare = document.getElementById('output');
  const btnPlayer1 = document.getElementById('btnPlayer1');
  const btnPlayer2 = document.getElementById('btnPlayer2');
  const refresh = document.getElementById('reload');
  let winner = 0;

  btnPlayer1.addEventListener('click', () => {
    const player1Name = document.getElementById('player1').value;
    player1 = playerFactory(player1Name);
    document.getElementById('player1').value = '';
    return { player1 };
  });

  btnPlayer2.addEventListener('click', () => {
    const player2Name = document.getElementById('player2').value;
    player2 = playerFactory(player2Name);
    document.getElementById('player2').value = '';
    return { player2 };
  });

  const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const gameboard = (() => {
    board.forEach((field) => {
      const fieldElement = document.createElement('div');

      container.style.setProperty('--grid-rows', 3);
      container.style.setProperty('--grid-cols', 3);
      for (i = 0; i < 3 * 3; i++) {
        container.appendChild(fieldElement).className = 'grid';
      }
    });
  })();

  const play = () => {
    let player1 = 1;

    makeMark = document.getElementsByClassName('grid');
    for (let i = 0; i < makeMark.length; i++)
      makeMark[i].addEventListener('click', function () {
        if (winner == 0) {
          if (player1 > 0) {
            player1--;
            if (board[i] != 'O' && board[i] != 'X') {
              board[i] = 'X';
              makeMark[i].innerText = 'X';
              checkForWinner();
            }
          } else {
            if (board[i] != 'O' && board[i] != 'X') {
              player1++;
              board[i] = 'O';
              makeMark[i].innerText = 'O';
              checkForWinner();
            }
          }
        }
      });
  };

  const checkForWinner = () => {
    if (
      (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') ||
      (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') ||
      (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') ||
      (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') ||
      (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') ||
      (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') ||
      (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') ||
      (board[2] == 'X' && board[4] == 'X' && board[6] == 'X')
    ) {
      declare.innerText = `The Winner is ${player1.name}`;

      winner += 1;
    } else if (
      (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') ||
      (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') ||
      (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') ||
      (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') ||
      (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') ||
      (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') ||
      (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') ||
      (board[2] == 'O' && board[4] == 'O' && board[6] == 'O')
    ) {
      declare.innerText = `The Winner is ${player2.name}`;
      winner += 1;
    } else if (
      typeof board[0] == 'string' &&
      typeof board[1] == 'string' &&
      typeof board[2] == 'string' &&
      typeof board[3] == 'string' &&
      typeof board[4] == 'string' &&
      typeof board[5] == 'string' &&
      typeof board[6] == 'string' &&
      typeof board[7] == 'string' &&
      typeof board[8] == 'string'
    ) {
      declare.innerText = "It's a Draw";
      winner += 1;
    } else {
      play();
    }
    return { winner };
  };

  checkForWinner();

  refresh.addEventListener('click', runEvent);
  function runEvent(e) {
    e.preventDefault();
    window.location.reload();
  }
})();
