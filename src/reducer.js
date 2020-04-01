var estadoInicial = {
    puntosMauri: 0,
    puntosMichi: 0,
    pregunta : "",
    modoPregunta: false,
    turno: 0,
};

export default function(estadoActual=estadoInicial, accion){
    
    if(accion.type=='CORRECTO'){
        console.log(estadoActual.puntosMauri)
        if(estadoActual.turno%2 == 0){   
            return{
                puntosMauri: estadoActual.puntosMauri+1,
                puntosMichi: estadoActual.puntosMichi,
                pregunta: estadoActual.pregunta,
                modoPregunta: false,
                turno: estadoActual.turno+1,
            }
        }
        return{
            puntosMauri: estadoActual.puntosMauri,
            puntosMichi: estadoActual.puntosMichi+1,
            pregunta: estadoActual.pregunta,
            modoPregunta: false,
            turno: estadoActual.turno+1,
        }
    }

    if(accion.type=='INCORRECTO'){
        return{
            puntosMauri: estadoActual.puntosMauri,
            puntosMichi: estadoActual.puntosMichi,
            pregunta: estadoActual.pregunta,
            modoPregunta: false,
            turno: estadoActual.turno+1,
        }
    }
    if(accion.type=='PASARSEGUNDO'){
        var segundo = 1;
        return{
            puntosMauri: estadoActual.puntosMauri,
            puntosMichi: estadoActual.puntosMichi,
            pregunta: estadoActual.pregunta,
            modoPregunta: estadoActual.modoPregunta,
            turno: estadoActual.turno,
        }
    }
    if(accion.type=='GENERARPREGUNTA'){

        var aPreguntas = [
            '1)comida fav',
            '2)postre fav',
            '3)comida que más odia tu pareja',
            '4)mayor miedo',
            '5)lugar en el mundo',
            '6)película/sefie fav',
            '7)lo que más le gusta de su cuerpo',
            '8)lo que más l gusta de su personalidad',
            '9)animal fav',
            '10)dibujito fav de la infancia',
            '11)si pudieras cambiar algo de vos, que sería?',
            '12)color fav',
            '13)lo que más te gusta del otro ',
            '14)libro fav',
            '15)bebida alcoholica fav',
            '16)amistad más especial',
            '17)si mañana se gana un millón de dólares, que compraría?',
            '18)ciudad, playa, campo o montañas?',
            '19)que otra profesión le hubiera gustado estudiar?',
            '20)algún talento con el que le hubiera gustado nacer', 
            '21)día o noche?',
            '22) invierno o verano?',
            '23)apodo preferido',
            '24)mencionar alguna manía que tenga',
            '25)algo que le de asco',
            '26)la música que menos le gusta a tu pareja',
            '27)numero de la suerte de tu amadx',
            '28)prefiere ir en submarino al fondo\n del océano o al espacio en cohete',
            '29)trabajo soñado de tu pareja?',
            '30)actividad que le relaje',
            '31)si pudiera vivir en cualquier \n parte del mundo, donde sería?',
            '32)que es lo que más le avergüenza?',
            '33)algo que nunca haría, ni por toda la plata del mundo',
            '34)lo que más le hace enojar' ,
            '35)Navidad o año nuevo?',
            '36)raza de perro fav',
            '37)el emoji que más usas',
            '38)a cual de tus padres elegiría tu pareja',
            '39)creencia religiosa',
            '40)color fav',
            '41)perros o gatos',
            '42)alergia a algo?',
            '43)máximo sueño/a lo que aspira',
            '44)alguna pasión',
            '45)le gusta su cumpleaños?',
            '46)banda fav',
            '47)primer amor',
            '48)cuál fue su momento más vergonzoso?',
            '49)dos personas a las que admire',
            '50)bañarse a la mañana o a la tarde/noche?',
            '51)mate dulce o amargo?',
        ]
        var numeroRandom = Math.floor(Math.random() * aPreguntas.length)
        var preguntaRandom = aPreguntas[numeroRandom]
        
        return{
            puntosMauri: estadoActual.puntosMauri,
            puntosMichi: estadoActual.puntosMichi,
            pregunta: preguntaRandom,
            modoPregunta: true,
            turno:estadoActual.turno,
        }   
    }
    return estadoActual;
}

