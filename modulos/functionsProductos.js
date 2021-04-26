window.onload = function enviarFormulario() {
    document.querySelector("button[type=submit]").addEventListener("click", validate);

    document.getElementById("Producto").addEventListener("blur",validateNomProd);
    document.getElementById("desc").addEventListener("blur",validateDescr);
    document.getElementById("Precio").addEventListener("blur",validatePrecio);
    document.getElementById("Dimensiones").addEventListener("blur",validateDimensiones);
    document.getElementById("Peso").addEventListener("blur",validatePeso);
    document.getElementById("selcategoria").addEventListener("blur",validateSelcategoria);

    document.getElementById("btnUsername").addEventListener("click",generateUsername);
}

function validate(e){
    if (!validateNomProd() || !validateDescr() || !validatePrecio() 
        || !validateDimensiones() || !validatePeso() || !validateSelcategoria()){
        e.preventDefault();
    }
}

function validateNomProd(){
    var nomInput = document.getElementById("Nombre_producto");
    return validateNotEmpty(nomInput);
}

function validateDescr(){
    var descripcioInput = document.getElementById("descr");
    return validateNotEmpty(descripcioInput);
}

function validatePrecio(){
    var PrecioInput = document.getElementById("Precio");
    return validateNotEmpty(PrecioInput);
}

function validateDimensiones(){
    var DimensionesInput = document.getElementById("Dimensiones");
    return validateNotEmpty(DimensionesInput);
}

function validatePeso(){
    var PesoInput = document.getElementById("Peso");
    return validateNotEmpty(PesoInput);
}

function validateSelcategoria(){
    var selcategoriaInput = document.getElementById("selcategoria");
    return validateNotEmpty(selcategoriaInput);
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