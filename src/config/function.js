function restartGame({ setTurn, setPosition, setWinner }) {
    setPosition([
        { id: 1, turn: '' },
        { id: 2, turn: '' },
        { id: 3, turn: '' },
        { id: 4, turn: '' },
        { id: 5, turn: '' },
        { id: 6, turn: '' },
        { id: 7, turn: '' },
        { id: 8, turn: '' },
        { id: 9, turn: '' }
    ])

    setTurn(false)
    setWinner('')
}

function insertPosition({position, turn, winner, setTurn}) {
    if (winner === '') {
        if (turn === false) {
            if (position.turn === '') {
                position.turn = 'X'
                setTurn(!turn)
            }
        } else {
            if (position.turn === '') {
                position.turn = 'O'
                setTurn(!turn)
            }
        }
    }
}

export { restartGame, insertPosition };