//THIS


const reservas = {
    nombre: 'Nicolas',
    apellido: 'Busto',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es $${this.total}`)
    }

}

reservas.informacion()