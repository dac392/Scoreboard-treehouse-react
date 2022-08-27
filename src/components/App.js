import React, { useContext, useEffect } from 'react';
import Header from './Header'
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import { ScoreBoardContext } from './Context';


const App = ()=> {

  const { actions } = useContext(ScoreBoardContext);
  useEffect( ()=>{
    actions.addPlayer("Guil");
    actions.addPlayer("John");
    actions.addPlayer("Jill");
    actions.addPlayer("jake");
  }, []);

  return (
      <div className="scoreboard">
        <Header title="Scoreboard" />
        <PlayerList />
        <AddPlayerForm />
      </div>
  );
  
}

export default App;
