//Metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }

}

reproductor.borrarCancion = function(id){
    console.log(`Borrando cancion ${id}`)
}

reproductor.reproducir(589)
reproductor.pausar()
reproductor.crearPlaylist('Nicolas')
reproductor.reproducirPlaylist('Mis amores')
