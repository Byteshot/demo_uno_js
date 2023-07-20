import Carta from "./Carta.js"
import Configuracion from "./Configuracion.js"
export default class Baraja

{
    cartasNumeradas = []
    cartasEspeciales = []
    cartas = []
    constructor()
    {
        this.crearBaraja()
    }

    crearBaraja()
    {
        this.crearCartasNumeradas()
        this.crearCartasEspeciales()
        this.mezclarCartas()

    }

    crearCartasNumeradas() {
        Configuracion.COLORES.forEach(color => {
            for (let i = 0; i < 10; i++) {
                let carta = new Carta(this.generarIdCarta(), color, i, Configuracion.FIGURAS[i], Configuracion.CARTAS[0])
                this.cartasNumeradas.push(carta)
                this.cartas.push(carta)
            }
        })
    }

    crearCartasEspeciales()
    {
        Configuracion.COLORES.forEach(color =>
        {
            for (let i = 0; i < 2; i++) {
                let carta = new Carta(this.generarIdCarta(), color, null, Configuracion.FIGURAS[10 + i], Configuracion.CARTAS[1])
                let carta2 = new Carta(this.generarIdCarta(), color, null, Configuracion.FIGURAS[10 + i], Configuracion.CARTAS[2])
                let carta3 = new Carta(this.generarIdCarta(), color, null, Configuracion.FIGURAS[10 + i], Configuracion.CARTAS[3])
                let carta4 = new Carta(this.generarIdCarta(), color, null, Configuracion.FIGURAS[10 + i], Configuracion.CARTAS[4])
                let carta5 = new Carta(this.generarIdCarta(), color, null, Configuracion.FIGURAS[10 + i], Configuracion.CARTAS[5])
                this.cartasEspeciales.push(carta)
                this.cartasEspeciales.push(carta2)
                this.cartasEspeciales.push(carta3)
                this.cartasEspeciales.push(carta4)
                this.cartasEspeciales.push(carta5)
                this.cartas.push(carta)
                this.cartas.push(carta2)
                this.cartas.push(carta3)
                this.cartas.push(carta4)
                this.cartas.push(carta5)
            }
        })
    }

    mezclarCartas()
    {
        let cartas = this.cartas
        let j, temp
        for (let i = cartas.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (i + 1))
            temp = cartas[i]
            cartas[i] = cartas[j]
            cartas[j] = temp
        }
        this.cartas = cartas
    }

    mostrarBaraja()
    {
        console.log(this.cartas)
    }

    generarIdCarta()
    {
        return this.cartas.length + 1
    }

}
