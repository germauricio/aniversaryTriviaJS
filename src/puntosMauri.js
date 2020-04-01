import React from 'react';
import {connect} from 'react-redux'

class Mauri extends React.Component{
    
    render(){
        if(this.props.sTurno%2 == 0){
            return <label class="customfont">♥ Puntos Mauri {this.props.iPuntosMauri} </label>;
        }
        
        return <label class="customfont">Puntos Mauri {this.props.iPuntosMauri} </label>;
    } 
}

const modificarContador = (dispatch) => {
    return {}
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

export default connect(alCambiarEstado, modificarContador)(Mauri)
