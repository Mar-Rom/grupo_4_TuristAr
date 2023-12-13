window.addEventListener("load", function() {
    // Función de validación para campos no vacíos y con al menos 2 caracteres
    
    function isValidInput(input) {
        let inputValue = input.value.trim();
        return inputValue !== '' && inputValue.length >= 5;
    }

    function isValidDescription(input) {
        let inputValue = input.value.trim();
        return inputValue !== '' && inputValue.length >= 20;
    }
    function isValidPrice(input) {
        let inputValue = input.value.trim();
        return inputValue;
    }
    function isValidPersons(input) {
        let inputValue = input.value.trim();
        // Validar que no esté vacío y sea un número
        return inputValue !== '' && !isNaN(inputValue);
    }

    // Evento blur para el campo de nombre
    let inputName = document.querySelector('input#name');
    inputName.addEventListener('blur', validateName);

    function validateName() {
        if (isValidInput(inputName)) {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        } else {
            inputName.classList.remove('is-valid');
            inputName.classList.add('is-invalid');
        }
    }

    // Evento blur para el campo de precio
    let inputPrice = document.querySelector('input#price');
    inputPrice.addEventListener('blur', validatePrice);

    function validatePrice() {
        if (isValidPersons(inputPrice)) {
            inputPrice.classList.remove('is-invalid');
            inputPrice.classList.add('is-valid');
        } else {
            inputPrice.classList.remove('is-valid');
            inputPrice.classList.add('is-invalid');
        }
    }

    // Evento blur para el campo de localidad
    let inputLocality = document.querySelector('input#locality');
    inputLocality.addEventListener('blur', validateLocality);

    function validateLocality() {
        if (isValidInput(inputLocality)) {
            inputLocality.classList.remove('is-invalid');
            inputLocality.classList.add('is-valid');
        } else {
            inputLocality.classList.remove('is-valid');
            inputLocality.classList.add('is-invalid');
        }
    }

    // Evento blur para el campo de calle
    let inputStreet = document.querySelector('input#street');
    inputStreet.addEventListener('blur', validateStreet);

    function validateStreet() {
        if (isValidInput(inputStreet)) {
            inputStreet.classList.remove('is-invalid');
            inputStreet.classList.add('is-valid');
        } else {
            inputStreet.classList.remove('is-valid');
            inputStreet.classList.add('is-invalid');
        }
    }

    // Evento blur para el campo de personas
    let inputPersons = document.querySelector('input#persons');
    inputPersons.addEventListener('blur', validatePersons);

    function validatePersons() {
        if (isValidPersons(inputPersons)) {
            inputPersons.classList.remove('is-invalid');
            inputPersons.classList.add('is-valid');
        } else {
            inputPersons.classList.remove('is-valid');
            inputPersons.classList.add('is-invalid');
        }
    }

    // Evento blur para el campo de descripción
    let inputDescription = document.querySelector('#description');
    inputDescription.addEventListener('blur', validateDescription);

    function validateDescription() {
        if (isValidDescription(inputDescription)){

        
            inputDescription.classList.remove('is-invalid');
            inputDescription.classList.add('is-valid');
        } else {
            inputDescription.classList.remove('is-valid');
            inputDescription.classList.add('is-invalid');
        }
    }


});
