import React from "react";

const Position = ({ position, turn, winner, setTurn }) => {

    function insertPosition() {
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

    return <div className="position" onClick={insertPosition}>{position.turn}</div>
}

export default Position;