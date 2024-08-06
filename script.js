document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});





    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;
    
        if(nombre && email && mensaje) {
            alert('Formulario enviado correctamente');
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
    
    
