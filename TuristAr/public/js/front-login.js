window.addEventListener("load", function() {
    let formulario = document.querySelector("#form");
    let errorMessage = document.querySelector("#error-message");

    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Evento blur para el campo de email
    let inputEmail = document.querySelector('input#email');
    inputEmail.addEventListener('blur', function() {
        let emailValue = inputEmail.value.trim();
        if (emailValue !== '' && isValidEmail(emailValue)) {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        } else {
            inputEmail.classList.remove('is-valid');
            inputEmail.classList.add('is-invalid');
        }
    });

    // Evento blur para el campo de contraseña
    let inputPassword = document.querySelector('input#password');
    inputPassword.addEventListener('blur', function() {
        let passwordValue = inputPassword.value.trim();
        if (passwordValue !== '' && passwordValue.length >= 6) {
            inputPassword.classList.remove('is-invalid');
            inputPassword.classList.add('is-valid');
        } else {
            inputPassword.classList.remove('is-valid');
            inputPassword.classList.add('is-invalid');
        }
    });

    formulario.addEventListener("submit", function(e){
        let errors = [];

        // Validación para el campo de email
        let emailValue = inputEmail.value.trim();

        if (emailValue === '' || !isValidEmail(emailValue)) {
            errors.push('El correo electrónico no es válido.');
            inputEmail.classList.add('is-invalid');
        } else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        }

        // Validación para el campo de contraseña
        let passwordValue = inputPassword.value.trim();

        if (passwordValue === '' || passwordValue.length < 6) {
            errors.push('La contraseña debe tener al menos 6 caracteres.');
            inputPassword.classList.add('is-invalid');
        } else {
            inputPassword.classList.remove('is-invalid');
            inputPassword.classList.add('is-valid');
        }

        // Muestra los mensajes de error en el elemento con id "error-message"
        if (errors.length > 0) {
            e.preventDefault();
            errorMessage.innerHTML = '<div class="alert alert-danger">' + errors.join('<br>') + '</div>';
        } else {
            // Si no hay errores, limpia el mensaje de error
            errorMessage.innerHTML = '';
            // Envía el formulario
            formulario.submit();
        }
    });
});