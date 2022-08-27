import React, { useContext } from "react";
import { ScoreBoardContext } from "./Context";

const Stats = ()=>{
    const { players } = useContext(ScoreBoardContext);
    const totalPlayers = players.length;
    const totalPoints = players.reduce( (total, player)=>total+player.score , 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>         
    );
}

export default Stats;