import { React, Turn } from '../config/config';

const Score = ({ resultx, resulto, turn }) => {

    return <div className="container-table">
        <table className="result">
            <thead>
                <tr>
                    <th>PLAYER</th>
                    <th>X</th>
                    <th>O</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SCORE</td>
                    <td>{resultx}</td>
                    <td>{resulto}</td>
                </tr>
            </tbody>
        </table>

        <Turn turn={turn} />
    </div>
}

export default Score;