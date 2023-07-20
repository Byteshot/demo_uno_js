export default class Utilidades
{
    constructor()
    {

    }

    static estatus = {
        'error': 'ERROR',
        'finalizado': 'FINALIZADO',
        'esperando': 'ESPERANDO',
        'jugando': 'JUGANDO',
    }

    static generardorCadenaAleatoria(n)
    {
        let cadena = ''
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let longitud = caracteres.length
        for (let i = 0; i < n; i++) {
            cadena += caracteres.charAt(Math.floor(Math.random() * longitud))
        }
        return cadena
    }

    static generardorCadenaNumAleatoria(n)
    {
        let cadena = ''
        let caracteres = '0123456789'
        let longitud = caracteres.length
        for (let i = 0; i < n; i++) {
            cadena += caracteres.charAt(Math.floor(Math.random() * longitud))
        }
        return cadena
    }


}
