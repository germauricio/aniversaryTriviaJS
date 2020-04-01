import React, { Component } from 'react'
import {connect} from 'react-redux'

class Timer extends Component {
    state = {
        seconds: 30,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                clearInterval(this.myInterval)
            
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { seconds } = this.state
        return (
            <div>
                { seconds === 0
                    ? <button class="rojo" onClick={this.props.responderIncorrecto}>Chau Primi!</button>

                    : <div><button class="verde" onClick={this.props.responderCorrecto}>Correcto</button>         
                    <button class="rojo" onClick={this.props.responderIncorrecto}>Incorrecto</button>
                    <h4 class="customfont">Tiempo Restante: {seconds < 10 ? `0${seconds}` : seconds}</h4></div>
                }
            </div>
        )
    }
}

const alCambiarEstado = (estado) => {
    return {
        iPuntosMauri: estado.puntosMauri,
        iPuntosMichi: estado.puntosMichi,
        sPregunta : estado.pregunta,
        bModoPregunta: estado.modoPregunta,
        sTurno: estado.turno,
    }
}

const modificarContador = (dispatch) => {
    return {
        responderCorrecto: () => dispatch({type: 'CORRECTO'}),    
        responderIncorrecto: () => dispatch({type: 'INCORRECTO'})                     
    }
}

export default connect(alCambiarEstado, modificarContador)(Timer)
