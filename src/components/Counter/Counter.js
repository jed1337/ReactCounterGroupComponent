import React from 'react'

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
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.decrementNumber}>-</button>
                <button onClick={this.incrementNumber}>+</button>
            </div>
        );
    }
}

export default Counter;