import React, { useContext } from "react";
import { ScoreBoardContext } from "./Context";
import Player from './Player';

const PlayerList = (props)=>{
    const { players } = useContext(ScoreBoardContext);
    return (
        <>
            {   
                players.map( (player, index)=>(
                    <Player 
                        {...player}
                        key={player.id.toString()} 
                        index={index}
                        isHighScore={actions.getHighScore() === player.score}        
                    />
                ))
            }
        </>
    );
}

export default PlayerList;