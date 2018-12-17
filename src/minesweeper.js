const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];

    for (let i = 0; i < numberOfRows; i++) {
        let row = [];
        for (let j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
}

let newBoard = generatePlayerBoard(3, 5);
console.log(newBoard);