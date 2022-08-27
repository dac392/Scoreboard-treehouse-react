import React from 'react';
import { Provider } from './Context';
import Header from './Header'
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name)=>{
    let newPlayer = {
      name,
      score:0,
      id: this.prevPlayerId +=1
    };
    this.setState(
      prevState => {
        return {
          players:[
            ...prevState.players,
            newPlayer
          ]
        }
      }
    );
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p=>p.score );
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    }
    return null;
  }

  render() {
    const highScore = this.getHighScore();

    return (
      <Provider value={
        {
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer
          }
        }
      }>
        <div className="scoreboard">
          <Header title="Scoreboard" />
          <PlayerList highScore={highScore} /> {/* we could move this into the provider but i don't quite feel like it */}
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
