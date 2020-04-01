import React from 'react';
import {connect} from 'react-redux'
import Timer from './timer'

class Pregunta extends React.Component{

    render(){
        var generarPregunta= <div><button class="azul" onClick={this.props.generarPregunta}> Generar Pregunta</button><h3 class="customfont">{this.props.sPregunta}</h3></div>;
       
        var timeOut="";

        if(this.props.bModoPregunta){
            timeOut = <Timer />;        
        }
        
        var seccionPreguntas=<div>{generarPregunta}{timeOut}</div>;
        
        if(this.props.iPuntosMauri==30){
            return <h1 class="customfontMauri">Ganador: Maurichi</h1>   
        }
        if(this.props.iPuntosMichi==30){
            return <h1 class="customfontMichi">Ganadora: Michihuahua</h1>   
        }

        return seccionPreguntas;
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
        generarPregunta: () => dispatch({type: 'GENERARPREGUNTA'}),
        pasarSegundo: () => dispatch({type: 'PASARSEGUNDO'}),
        responderIncorrecto: () => dispatch({type: 'INCORRECTO'}),
        responderCorrecto: () => dispatch({type: 'CORRECTO'}),
    }
}

export default connect(alCambiarEstado, modificarContador)(Pregunta)
