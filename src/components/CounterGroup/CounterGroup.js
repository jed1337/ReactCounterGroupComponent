import React from 'react'
import Counter from "../Counter/Counter";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfCounters: 2,
            input: 0,
            sum: 0
        }
    }

    handleInputChange(e) {
        this.setState({input: parseInt(e.target.value)})
    }

    updateNumberOfCounters = () => {
        this.setState({numberOfCounters: this.state.input});
    };

    callBackFunction = (childDataModifyAmount) => {
        this.setState({sum: this.state.sum+childDataModifyAmount});
    };

    render() {
        return (
            <div>
                <input id="numberOfCountersInput" type="text" onChange={e=>this.handleInputChange(e)}/>
                <button onClick={this.updateNumberOfCounters}>Regenerate Counters</button>

                <h1>Sum: {this.state.sum}</h1>

                <div id="counters">
                    {[...Array(this.state.numberOfCounters)].map((x, i) =>
                        <Counter parentCallBack = {this.callBackFunction}/>
                    )}
                </div>
            </div>
        )
    }
}

export default CounterGroup;