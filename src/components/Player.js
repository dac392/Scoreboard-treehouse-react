import React, { useContext } from "react";
import { ScoreBoardContext } from './Context';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({ index, isHighScore }) => {
  const { players, actions } = useContext(ScoreBoardContext);

  return ( 
    <div className="player">
      <span className="player-name">
        <button 
          className="remove-player" 
          onClick={() => actions.removePlayer(players[index].id)}>✖
        </button>
        <Icon isHighScore={isHighScore} />
        { players[index].name }
      </span>
      <Counter index={index} />
    </div>
  );
};

export default Player;