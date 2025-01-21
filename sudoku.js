/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    const rows = Array(9).fill(new Set()) // [set, set ,set ,set]
    const cols = Array(9).fill(new Set())
    const box =  Array(9).fill(new Set())

    const emptyCells = []


    for (let i = 0; i < 9; i ++) {
        for (let j = 0; j < 9; j ++) {
            const current = board[i][j]
            if (board[i][j] === ".") {
                emptyCells.push([i,j])
            } else {
                rows[i].add(current)
                cols[j].add(current)
                box[getBox(i,j)].add(current)
            }
        }   
    }

    backtrack(board, rows, cols, box emptyCells, 0)
    
};

function backtrack(board, rows, cols, box, emptyCells, currentEmptyCell) {
    if (emptyCells.length === currentEmptyCell) return true
    
    const currentTry = emptyCells[currentEmptyCell]

    for (let i = 0; i < 9; i++) {
        if (!cols.has(i) && !rows.has(i) && !box.has(i)) {
            board[i][j] = i
            if (backtrack(board, rows, cols, box, emptyCells, currentEmptyCell + 1)) {
                return true
            }
            board[i][j] = "."
        }
    }
}


function getBox(i,j) {
    return 0
}
