import { React } from '../config/config';
import { insertPosition } from '../config/function';

const Position = ({ position, turn, winner, setTurn }) => {
    const positionInsert = () => insertPosition({ position, turn, winner, setTurn })

    return <div className="position" onClick={positionInsert}>{position.turn}</div>
}

export default Position;