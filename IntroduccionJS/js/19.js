//Switch

const metodoPago = 'Cheque'

switch(metodoPago){
    case  'Tarjeta':
        console.log('Pagaste con tarjeta')
        break
    case  'Cheque':
        console.log('Pagaste con cheque')
        break
    default:
        console.log('Aun no has pagado')
        break
}