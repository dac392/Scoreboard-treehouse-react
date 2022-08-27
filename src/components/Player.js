import React, { PureComponent } from "react";
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent{
  render(){
    const {
      name,
      id,
      score,
      index,
    } = this.props
    return (
      <div className="player">
        <Consumer>
          {
            context=>(
              <span className="player-name">
                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} />
                { name }
              </span>
            )
          }
        </Consumer>
        <Counter 
            score={score} 
            index={index}
        />
      </div>
    );
  }
}

  export default Player;