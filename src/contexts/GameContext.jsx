import { createContext, useState } from "react";

export const GameContext = createContext();

export default function GameContextProvider(props) {

    const [turn, setTurn] = useState(false)
    const [winner, setWinner] = useState('')
    const [resultx, setResultx] = useState(0)
    const [resulto, setResulto] = useState(0)

    const [position, setPosition] = useState([
        {
            id: 1,
            turn: ''
        },
        {
            id: 2,
            turn: ''
        },
        {
            id: 3,
            turn: ''
        },
        {
            id: 4,
            turn: ''
        },
        {
            id: 5,
            turn: ''
        },
        {
            id: 6,
            turn: ''
        },
        {
            id: 7,
            turn: ''
        },
        {
            id: 8,
            turn: ''
        },
        {
            id: 9,
            turn: ''
        }
    ])

    return (
        <GameContext.Provider
            value={
                { turn, setTurn, winner, setWinner, resultx, setResultx, resulto, setResulto, position, setPosition }
            }
        >
            {props.children}
        </GameContext.Provider>
    );
}