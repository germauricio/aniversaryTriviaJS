import React from 'react';
import {connect} from 'react-redux'

class Michi extends React.Component{
    
    render(){
        if(this.props.sTurno%2 != 0){
            
        return <label class="customfont">♥ Puntos Michi {this.props.iPuntosMichi} </label>;
        }
        
        return <label class="customfont">Puntos Michi {this.props.iPuntosMichi} </label>;
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
    return {}
}

export default connect(alCambiarEstado, modificarContador)(Michi)
