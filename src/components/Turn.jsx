import { React } from '../config/config';

const Turn = ({ turn }) => {

    return (turn)
        ? <h3 className="turn">Vez do jogador O</h3>
        : <h3 className="turn">Vez do jogador X</h3>
}

export default Turn;