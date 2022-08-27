import React, { useState } from "react";

export const ScoreBoardContext = React.createContext();
let id = 0;

export const Provider = (props) => {
  const [players, setPlayers] = useState([]);

  const handleScoreChange = (index, delta) => {
    setPlayers(prevState => {
      const updatedPlayers = [ ...prevState ];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  };

  const handleAddPlayer = (name) =>  {
    setPlayers(prevState => {
      return [
        ...prevState, 
        {
          name,
          score: 0,
          id: id += 1
        }
      ]
    });    
  };

  const handleRemovePlayer = (id) => { 
    setPlayers( prevState => prevState.filter(p => p.id !== id) );
  };

  const getHighScore = () => {
    const scores = players.map( p=>p.score );
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    }
    return null;
  }

  return (
    <ScoreBoardContext.Provider value={{ 
      players,
      actions: {
        changeScore: handleScoreChange,
        addPlayer: handleAddPlayer,
        removePlayer: handleRemovePlayer,
        getHighScore: getHighScore
      }
    }}>
      { props.children }
    </ScoreBoardContext.Provider>
  );
};

export const Consumer = ScoreBoardContext.Consumer;