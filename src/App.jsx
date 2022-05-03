import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Game from "./components/Game";
import Score from "./components/Score";
import Turn from "./components/Turn";
import './scss/app.scss';


function App() {

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

  function restartGame() {
    setPosition([{
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
    }])

    setTurn(false)

    setWinner('')
  }

  useEffect(() => {
    let i;
    let a = 1;

    for (i in position) {
      if (position[i].turn !== '') {
        a++
      }
    }

    if (a === 10) {
      setWinner('Deu velha!')
    }

    if (
      (position[0].turn === position[1].turn && position[1].turn === position[2].turn) ||
      (position[0].turn === position[3].turn && position[3].turn === position[6].turn) ||
      (position[0].turn === position[4].turn && position[4].turn === position[8].turn)
    ) {
      if (position[0].turn === 'X') {
        setWinner('O ' + position[0].turn + ' venceu!')
        setResultx(resultx + 1)
      }
      if (position[0].turn === 'O') {
        setWinner('O ' + position[0].turn + ' venceu!')
        setResulto(resulto + 1)
      }
    }

    if (
      (position[3].turn === position[4].turn && position[4].turn === position[5].turn)
    ) {
      if (position[3].turn === 'X') {
        setWinner('O ' + position[3].turn + ' venceu!')
        setResultx(resultx + 1)
      }
      if (position[3].turn === 'O') {
        setWinner('O ' + position[3].turn + ' venceu!')
        setResulto(resulto + 1)
      }
    }

    if (
      (position[6].turn === position[7].turn && position[7].turn === position[8].turn)
    ) {
      if (position[6].turn === 'X') {
        setWinner('O ' + position[6].turn + ' venceu!')
        setResultx(resultx + 1)
      }
      if (position[6].turn === 'O') {
        setWinner('O ' + position[3].turn + ' venceu!')
        setResulto(resulto + 1)
      }
    }

    if (
      (position[1].turn === position[4].turn && position[4].turn === position[7].turn)
    ) {
      if (position[1].turn === 'X') {
        setWinner('O ' + position[1].turn + ' venceu!')
        setResultx(resultx + 1)
      }
      if (position[1].turn === 'O') {
        setWinner('O ' + position[1].turn + ' venceu!')
        setResulto(resulto + 1)
      }
    }

    if (
      (position[2].turn === position[5].turn && position[5].turn === position[8].turn) ||
      (position[2].turn === position[4].turn && position[4].turn === position[6].turn)
    ) {
      if (position[2].turn === 'X') {
        setWinner('O ' + position[2].turn + ' venceu!')
        setResultx(resultx + 1)
      }
      if (position[2].turn === 'O') {
        setWinner('O ' + position[2].turn + ' venceu!')
        setResulto(resulto + 1)
      }
    }

  }, [turn])

  return (
    <div className="App">



      <div className="game-container">

        <h1 className="title">Jogo da Velha</h1>
        <Game turn={turn} position={position} setTurn={setTurn} winner={winner} />
        <h3 className="winner">{winner}</h3>
        <Button restartGame={restartGame} />

      </div>

      <Score resultx={resultx} resulto={resulto} turn={turn} />

    </div>
  );
}

export default App;