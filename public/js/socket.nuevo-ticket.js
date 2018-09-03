//Comando para establecer la conexción
var socket = io();
var label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos conexion al servidor');
});

socket.on('estadoActual', (ticketActual) => {
    label.text(ticketActual.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});