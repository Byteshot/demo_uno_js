import Configuracion from "./Configuracion.js"
import Usuario from "./Usuario.js"
import Utilidades from "./Utilidades.js";
import Baraja from "./Baraja.js";

export default class Tablero
{
    id
    codigo
    estado
    fecha
    jugadores = []
    turnoJugador
    baraja

    constructor(codigo)
    {
        this.codigo = codigo
        if(this.verificarModoJuego())
        {
            this.crearTableroLocal()
            this.crearJugadores()
            this.iniciarJuego()
        }
        else
        {
            if(!this.verificarModoJuego())
            {
                alert('Modo de juego no disponible')
            }else{
                this.verificarTablero(codigo)
            }
        }

    }

    /*
     Función para verificar si existe la sale de juego
     realiza una petición al servidor para buscar una sale con el codigo
     */
    verificarTablero(codigo)
    {
        // -- petición con ajax
        let url = this.URL + '/verificar/tablero/' + codigo
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, false)
        xhr.send()
        let respuesta = JSON.parse(xhr.responseText)
        if (respuesta.estatus === 'error') {
            alert(respuesta.mensaje)
            return false
        }
        this.cargarInformacionTablero(respuesta.informacion)
    }

    cargarInformacionTablero(informacion)
    {
        this.id = informacion.id
        this.codigo = informacion.codigo
        this.estado = informacion.estado
        this.fecha = informacion.fecha
        this.jugador1 = new Usuario(informacion.jugador1)
    }

    verificarModoJuego()
    {
        return Configuracion.MODO === 'local';
    }

    crearTableroLocal()
    {
        this.id = Utilidades.generardorCadenaAleatoria(4)
        this.codigo = Utilidades.generardorCadenaAleatoria(6)
        this.estado = Utilidades.estatus.esperando
        this.fecha = new Date()
    }

    obtenerInformacionUsuario(idUsuario)
    {
        let id = idUsuario;
        let nombre = prompt('Ingresa tu nombre')
        let correo = prompt('Ingresa tu correo')
        return new Usuario(nombre, correo)
    }

    crearJugadores()
    {
        let nJugadores = parseInt(prompt('Ingresa el número de jugadores'))
        for (let i = 0; i < nJugadores; i++) {
            this.jugadores.push(this.obtenerInformacionUsuario(i))
        }
    }

    iniciarJuego()
    {
        this.baraja = new Baraja()
        this.baraja.mostrarBaraja()
    }

    darCarta()
    {

    }
}
