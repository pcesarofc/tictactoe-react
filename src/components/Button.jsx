import { React } from '../config/config';
import { useContext } from 'react';
import { restartGame } from "../config/function";
import { GameContext } from '../contexts/GameContext';

const Button = () => {
    const { setPosition, setTurn, setWinner } = useContext(GameContext)
    const reset = () => restartGame({ setPosition, setTurn, setWinner })

    return <input
        type="button"
        value="Reiniciar"
        className="restart-game"
        onClick={reset}
    />
}

export default Button;