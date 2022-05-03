import React from "react";

const Button = ({ restartGame }) => {
    return <input type="button" value="Reiniciar" className="restart-game" onClick={restartGame} />
}

export default Button;