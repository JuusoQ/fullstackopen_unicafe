import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const {handleClick,teksti } = props
    return(
        <button onClick={handleClick}>{teksti}</button>
    )
}


const Statistic = (props) => {
    return(
        <tr key={props.selite}>
            <td>{props.selite}</td><td>{props.arvo}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const arvo = props.data.map(d => d.value).filter(v => v!==0).length !== 0
    if(!arvo) {
        return(<div>Yhtään palautetta ei ole vielä annettu</div>)
    } else {
        const statistics = props.data.map(d => <Statistic selite={d.teksti} arvo={d.value} key={d.key}/>)
    return (<table><tbody>{statistics}</tbody></table>)   
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0, 
        }
    }


    /* tehtävä 1.10:n tapahtumakäsittelijä */

    handleIncrement = (value) => {
        return () => {
            this.setState({[value]: this.state[value]+1})
        }
    }

    
    
    keskiarvo = () => {
        let divider = this.state.good+this.state.neutral+this.state.bad
        let ka = 0
        if (divider === 0) {
            ka = 0
        } else {
            ka = (this.state.good*1+this.state.neutral*0+this.state.bad*-1)/(this.state.good+this.state.neutral+this.state.bad)

        }
        return (
            ka
        )
    }

    positiivisia = () => {
        let divider = this.state.good+this.state.neutral+this.state.bad
        let positiiviset = 0
        if (divider === 0) {
            positiiviset = 0
        }
        else {
            positiiviset = (this.state.good/(this.state.good+this.state.neutral+this.state.bad))*100
        }
        return positiiviset
    }
    

    render() {
        
        const palautteet = [
            {
                key: 'good',
                teksti: "Hyvä",
                value: this.state.good
            },
            {   key: 'neutral',
                teksti: "Neutraali",
                value: this.state.neutral
            },
            {
                key: 'bad',
                teksti: "Huono",
                value: this.state.bad
            },
            {
                key: 'ka',
                teksti: "Keskiarvo",
                value: this.keskiarvo()
            },
            {
                key:'positive',
                teksti: "Positiivisia",
                value: this.positiivisia()
            }

        ]

        return(
            <div>
                <h1>Anna palautetta</h1>
                <Button handleClick={this.handleIncrement('good')} teksti="Hyvä"/>
                <Button handleClick={this.handleIncrement('neutral')} teksti="Neutraali"/>
                <Button handleClick={this.handleIncrement('bad')} teksti="Huono"/>

                <h1>Statistiikkaa</h1>
                <Statistics data={palautteet}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
