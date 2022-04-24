var mensaje = document.getElementById('mensaje')
var btnExito = document.getElementById('btnExito')
var btnError = document.getElementById('btnError')

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    mensaje.append(wrapper)
}

if (btnExito) {
    btnExito.addEventListener('click', function() {
        alert('Genial, esta es una alerta de exito!', 'success')
    })
}