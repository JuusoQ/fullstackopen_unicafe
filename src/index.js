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
        <div>
            {props.selite} {props.arvo}
        </div>
    )
}

const Statistics = (props) => {
    const summa = (a,b) => a+b // jos arvojen summa on 0, yhtään mitään ei ole vielä annettu. Apufunktio
    const arvo = props.data.map(d => d.value).reduce(summa,0)
    if(arvo === 0) {
        return(<div>Yhtään palautetta ei ole vielä annettu</div>)
    } else {
        const statistics = props.data.map(d => <Statistic selite={d.teksti} arvo={d.value}/>)
        return statistics   
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
                //key: 'good',
                teksti: "Hyvä",
                value: this.state.good
            },
            {   //key: 'neutral',
                teksti: "Neutraali",
                value: this.state.neutral
            },
            {
                //key: 'bad',
                teksti: "Huono",
                value: this.state.bad
            },
            {
                teksti: "Keskiarvo",
                value: this.keskiarvo()
            },
            {
                teksti: "Positiivisia",
                value: this.positiivisia()
            }

        ]

        return(
            <div>
                <h1>Anna palautetta</h1>
                <Button handleClick={this.thisIsGood()} teksti="Hyvä"/>
                <Button handleClick={this.thisIsNeutral()} teksti="Neutraali"/>
                <Button handleClick={this.thisIsBad()} teksti="Huono"/>

                <h1>Statistiikkaa</h1>
                <Statistics data={palautteet}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
