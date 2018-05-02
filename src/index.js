import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    render() {
        return(
            <div>
                <h1>Anna palautetta</h1>
                <button onClick={()=>this.setState({good: this.state.good + 1})} >Hyvä</button>
                <button onClick={()=>this.setState({neutral: this.state.neutral + 1})}>Neutraali</button>
                <button onClick={()=>this.setState({bad: this.state.bad + 1})}>Huono</button>

                <h1>Statistiikkaa</h1>
                Hyvä: {this.state.good} <br/>
                Neutraali: {this.state.neutral} <br/>
                Huono: {this.state.bad}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
