let currentPlayer = 'X';
let board = new Array(9).fill('');

function makeMove(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').textContent = `${board[a]} Wins!`;
            return true;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').textContent = "It's a Draw!";
        return true;
    }

    return false;
}

function updateStatus() {
    document.getElementById('status').textContent = `${currentPlayer}'s Turn`;
}

function resetBoard() {
    board = new Array(9).fill('');
    currentPlayer = 'X';
    const cells = document.getElementById('board').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    updateStatus();
}

updateStatus();
