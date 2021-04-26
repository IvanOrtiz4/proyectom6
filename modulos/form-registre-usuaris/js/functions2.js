window.onload = function () {
    document.querySelector("button[type=submit]").addEventListener("click", validate);

    document.getElementById("nom").addEventListener("blur",validateNom);
    document.getElementById("cognoms").addEventListener("blur",validateCognom);
    document.getElementById("dni").addEventListener("blur",validateDNI);
    document.getElementById("email").addEventListener("blur",validateEmail);
    document.getElementById("telefon").addEventListener("blur",validateTelefon);

    document.getElementById("btnUsername").addEventListener("click",generateUsername);
}

function validate(e){
    if (!validateNom() || !validateCognom() || !validateDNI() 
        || !validateEmail() || !validateTelefon()){
        e.preventDefault();
    }
}

function validateNom(){
    var nomInput = document.getElementById("nom");
    return validateNotEmpty(nomInput);
}

function validateCognom(){
    var cognomsInput = document.getElementById("cognoms");
    return validateNotEmpty(cognomsInput);
}

function validateDNI(){
    var dniInput = document.getElementById("dni");
    var dniValue = dniInput.value.trim();
    if (dniValue && isValidDNI(dniValue)){
        setSuccess(dniInput);
        return true;
    } else {
        setError(dniInput,"El format del DNI no es correcte");
        return false;
    }
}

function isValidDNI(dni){

    //TODO
    return true;
}

function validateEmail(){
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    if (emailValue && isValidEmail(emailValue)){
        setSuccess(emailInput);
        return true;
    } else {
        setError(emailInput,"El format del email no es correcte");
        return false;
    }
}

function isValidEmail(email){

    //TODO
    return true;
}

function validateTelefon(){
    var telefonInput = document.getElementById("telefon");
    var telefonValue = telefonInput.value.trim();
    if (telefonValue && isValidTelefon(telefonValue)){
        setSuccess(telefonInput);
        return true;
    } else {
        setError(telefonInput,"El format del telefon no es correcte");
        return false;
    }
}

function isValidTelefon(telefon){

    //TODO
    return true;
}

function generateUsername(){
    //TODO
    var username = "jHern3564";
    document.getElementById("username").value = username;
}
// COMMON FUNCTIONS

function validateNotEmpty(input){
    var inputValue = input.value.trim();
    if (inputValue){
        setSuccess(input);
        return true;
    } else {
        setError(input,"El camp no pot estar buit");
        return false;
    }
}

function setSuccess(input){
    if (input.classList.contains("is-invalid")){
        input.classList.replace("is-invalid", "is-valid");
    } else {
        input.classList.add("is-valid");
    }
}

function setError(input, message){

    if (input.classList.contains("is-valid")){
        input.classList.replace("is-valid", "is-invalid");
    } else {
        input.classList.add("is-invalid");
    }

    var feedback = input.nextElementSibling
    feedback.innerHTML = message;
}

