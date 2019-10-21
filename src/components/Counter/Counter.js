import React from 'react'
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.startingNumber
        }
    }

    incrementNumber = () => {
        this.setState({number: this.state.number + 1});
        this.props.parentCallBack(1);
    };

    decrementNumber = () => {
        this.setState({number: this.state.number - 1});
        this.props.parentCallBack(-1);
    };

    render() {
        return (
            <div className="counter">
                <button onClick={this.decrementNumber}>-</button>
                <h1>{this.state.number}</h1>
                <button onClick={this.incrementNumber}>+</button>
            </div>
        );
    }
}

export default Counter;