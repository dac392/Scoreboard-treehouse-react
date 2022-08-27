import React, { PureComponent } from "react";
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent{
  render(){
    const {
      name,
      id,
      index
    } = this.props
    return (
      <div className="player">
        <Consumer>
          {
            ({ actions, players })=>(
              <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} />
                { name }
              </span>
            )
          }
        </Consumer>
        <Counter index={index} />
      </div>
    );
  }
}

  export default Player;