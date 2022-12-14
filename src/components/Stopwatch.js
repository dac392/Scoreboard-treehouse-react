import React, {Component} from "react";

class Stopwatch extends Component{
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    handleStopwatch = ()=>{
        this.setState(
            prevState => {
                return (
                    {
                        isRunning: !prevState.isRunning
                    }
                );
            }
        );
        if(!this.state.isRunning){
            this.setState({ previousTime: Date.now() })
        }
    }

    componentDidMount() {
        // gets called repeatedly
        this.intervalID = setInterval( ()=>this.tick(), 100 )
    }

    componentWillUnmount(){
        // clears anything done in componentDidMount()
        clearInterval(this.intervalID);
    }

    tick = ()=>{
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(
                prevState=>{
                    return (
                        {
                            previousTime: now,
                            elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
                        }
                    );
                }
            );
        }
    }

    handleReset = ()=>{
        this.setState({elapsedTime: 0});
    }

    render(){
        const seconds = Math.floor(this.state.elapsedTime/1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning? "Stop":"Start"}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;