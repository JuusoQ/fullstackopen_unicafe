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

    addToList = (value) => {

    }

    sum = (a,b) => {
        return a+b
    }

    thisIsGood = () => {
        return ()=>{
            this.setState({good: this.state.good +1
            })
        }
    }

    thisIsNeutral = () => {
        return ()=>{
            this.setState({neutral: this.state.neutral +1
              })
        }
    }

    thisIsBad = () => {
        return ()=>{
            this.setState({bad: this.state.bad +1
            })
        }
    }



    render() {
        return(
            <div>
                <h1>Anna palautetta</h1>
                <button onClick={this.thisIsGood()} >Hyvä</button>
                <button onClick={this.thisIsNeutral()}>Neutraali</button>
                <button onClick={this.thisIsBad()}>Huono</button>

                <h1>Statistiikkaa</h1>
                Hyvä: {this.state.good} <br/>
                Neutraali: {this.state.neutral} <br/>
                Huono: {this.state.bad} <br/>
                Keskiarvo: {(this.state.good*1+this.state.neutral*0+this.state.bad*-1)/(this.state.good+this.state.neutral+this.state.bad)} <br/>
                Positiivisia: {(this.state.good/(this.state.good+this.state.neutral+this.state.bad))*100} %
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
