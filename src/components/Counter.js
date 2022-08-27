import React, { useContext } from "react";
import { ScoreBoardContext } from "./Context";

const Counter = ({ index })=>{
    const { players, actions } = useContext(ScoreBoardContext);
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={()=>actions.changeScore(index, -1)}> - </button>
            <span className="counter-score">{ players[index].score }</span>
            <button className="counter-action increment" onClick={()=>actions.changeScore(index, +1)}> + </button>
        </div>
    );

  }

  export default Counter;