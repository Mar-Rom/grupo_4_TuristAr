window.addEventListener("load", function() {
    
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

    // Evento blur para el campo de nombre
    let inputName = document.querySelector('input#name');
    inputName.addEventListener('blur', function() {
        let nameValue = inputName.value.trim();
        // Puedes agregar tu lógica de validación para el nombre aquí si es necesario
        // Ejemplo básico: debe contener al menos 2 caracteres
        if (nameValue !== '' && nameValue.length >= 2) {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        } else {
            inputName.classList.remove('is-valid');
            inputName.classList.add('is-invalid');
        }
    });

    // Evento blur para el campo de apellido
    let inputLastName = document.querySelector('input#last_name');
    inputLastName.addEventListener('blur', function() {
        let lastNameValue = inputLastName.value.trim();
        // Puedes agregar tu lógica de validación para el apellido aquí si es necesario
        // Ejemplo básico: debe contener al menos 2 caracteres
        if (lastNameValue !== '' && lastNameValue.length >= 2) {
            inputLastName.classList.remove('is-invalid');
            inputLastName.classList.add('is-valid');
        } else {
            inputLastName.classList.remove('is-valid');
            inputLastName.classList.add('is-invalid');
        }
    });

    // Evento blur para el campo de contraseña (confirmación)
    let inputPassword2 = document.querySelector('input#password2');
    inputPassword2.addEventListener('blur', function() {
        let password2Value = inputPassword2.value.trim();
        let passwordValue = inputPassword.value.trim();

        // Verificar si la contraseña de confirmación coincide con la contraseña original
        if (password2Value !== '' && password2Value === passwordValue) {
            inputPassword2.classList.remove('is-invalid');
            inputPassword2.classList.add('is-valid');
        } else {
            inputPassword2.classList.remove('is-valid');
            inputPassword2.classList.add('is-invalid');
        }
    });
    let inputPhone = document.querySelector('input#phone');
    inputPhone.addEventListener('blur', function() {
        let phoneValue = inputPhone.value.trim();
        // Puedes agregar tu lógica de validación para el teléfono aquí si es necesario
        // Ejemplo básico: debe contener solo dígitos y tener al menos 7 caracteres
        const phoneRegex = /^\d{7,}$/;
        if (phoneValue !== '' && phoneRegex.test(phoneValue)) {
            inputPhone.classList.remove('is-invalid');
            inputPhone.classList.add('is-valid');
        } else {
            inputPhone.classList.remove('is-valid');
            inputPhone.classList.add('is-invalid');
        }
    });



});
