export default class Usuario
{
    cartas = []
    constructor(nombre, correo)
    {
        this.nombre = nombre;
        this.correo = correo;
    }

    agregarCarta(carta)
    {
        this.cartas.push(carta)
    }

    eliminarCarta(carta)
    {
        let cartas = this.cartas
        cartas.forEach((cartaUsuario, index) =>
        {
            if(cartaUsuario.id === carta.id)
            {
                cartas.splice(index, 1)
            }
        })
        this.cartas = cartas
    }
}
