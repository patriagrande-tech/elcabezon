/* El formulario prepara una consulta: no calcula ni confirma reservas. */
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('consulta-escenario');
    if (!formulario) return;

    var fecha = formulario.elements.fecha;
    var retiro = formulario.elements.retiro;
    var hoy = new Date();
    var fechaLocal = hoy.getFullYear() + '-' + String(hoy.getMonth() + 1).padStart(2, '0') + '-' + String(hoy.getDate()).padStart(2, '0');
    fecha.min = fechaLocal;

    function validarRetiro() {
        retiro.min = fecha.value ? fecha.value + 'T00:00' : '';
        retiro.setCustomValidity(retiro.value && fecha.value && retiro.value.slice(0, 10) < fecha.value
            ? 'El retiro no puede ser anterior a la fecha del evento.' : '');
    }
    fecha.addEventListener('input', validarRetiro);
    retiro.addEventListener('input', validarRetiro);

    function mostrarFecha(valor) {
        var partes = valor.split('-');
        return partes[2] + '/' + partes[1] + '/' + partes[0];
    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        validarRetiro();
        if (!formulario.reportValidity()) return;
        var datos = new FormData(formulario);
        var salida = datos.get('retiro');
        var mensaje = [
            'Hola, soy ' + datos.get('nombre').trim() + '. Quiero cotizar el escenario rodante de El Cabezón.',
            'Fecha del evento: ' + mostrarFecha(datos.get('fecha')),
            'Localidad y provincia: ' + datos.get('lugar').trim(),
            'Tipo de evento: ' + datos.get('tipo'),
            'Retiro del camión: ' + (salida ? mostrarFecha(salida.slice(0, 10)) + ' a las ' + salida.slice(11, 16) : 'A coordinar'),
            'Predio y detalles: ' + (datos.get('detalle').trim() || 'A coordinar'),
            'Consulta desde la página de alquiler de escenario.'
        ].join('\n');
        window.open('https://wa.me/5491158382354?text=' + encodeURIComponent(mensaje), '_blank', 'noopener,noreferrer');
    });
});
