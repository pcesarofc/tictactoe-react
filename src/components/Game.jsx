import { React, Position } from '../config/config'

const Game = ({ position, turn, winner, setTurn }) => {

    return <div className="container-tictactoe">
        {position.map((position) => (<Position
            position={position}
            turn={turn}
            setTurn={setTurn}
            winner={winner} />))
        }
    </div>
}

export default Game;