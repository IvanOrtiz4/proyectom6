let map, lat, lng;

window.onload = function () {

  loadMap();

  document.querySelector("button[type=submit]").addEventListener("click", validate);

  document.getElementById("nom").addEventListener("blur",validateNom);
  document.getElementById("cognoms").addEventListener("blur",validateCognom);
  document.getElementById("precio").addEventListener("blur",validatePrecio);
  document.getElementById("dimensiones").addEventListener("blur",validateDimensiones);
  document.getElementById("peso").addEventListener("blur",validatePeso);
  document.getElementById("fecha").addEventListener("blur",validateFecha);


document.getElementById("findLoc").addEventListener("click", geocodeAddress);

  document.getElementById("addressOk").addEventListener("click", () => {
    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lng;
  });


}

function validate(e){
  if (!validateNom() || !validateCognom() || !validatePrecio() || !validateDimensiones() ||  !validatePeso() || !validateFecha()){
      e.preventDefault();
  }
}

function validateNom(){
  var nomInput = document.getElementById("nom");
  return validateNotEmpty(nomInput);
}

function validateFecha(){
    var fechaInput = document.getElementById("fecha");
    return validateNotEmpty(fechaInput);
}

function validateCognom(){
  var cognomsInput = document.getElementById("cognoms");
  return validateNotEmpty(cognomsInput);
}

function validatePrecio() {
    /*var precioInput = document.getElementById("precio");
        return validateNotEmpty(precioInput);*/

    var precioInput = document.getElementById("precio");
    var precioValue = precioInput.value.trim();
    
    if (precioValue && isValidPeso(precioValue)){
        setSuccess(precioInput);
        return true;
    } else {
        setError(precioInput,"El format del precio no es correcto");
        return false;
    }
    
}

function validateDecimal(valor) {
    var RE = /^\d*(\.\d{1})?\d{0,1}$/;
    if (RE.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validateDimensiones() {
    /*var dimensionInput = document.getElementById("dimensiones");
        return validateNotEmpty(dimensionInput);*/
    var dimensionInput = document.getElementById("dimensiones");
    var dimensionValue = dimensionInput.value.trim();
    if (dimensionValue && isValidPeso(dimensionValue)){
        setSuccess(dimensionInput);
        return true;
    } else {
        setError(dimensionInput,"El format del dimension no es correcto");
        return false;
    }
}

function validatePeso(){
    var pesoInput = document.getElementById("peso");
    var pesoValue = pesoInput.value.trim();
    if (pesoValue && isValidPeso(pesoValue)){
        setSuccess(pesoInput);
        return true;
    } else {
        setError(pesoInput,"El format del peso no es correcto");
        return false;
    }
  }

function isValidPeso(peso){
var re = /^\d*(\.\d{1})?\d{0,1}$/;
//var re = /^[^0]\d{255}$/g;
return re.test(peso);

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



function isValidTelefon(telefon){

  var re = /^[^0]\d{8}$/g;
  return re.test(telefon);

}

// MAPS FUNCTIONS

function loadMap(){

  map = L.map('map').setView([41.388, 2.159], 12);
  L.esri.basemapLayer('Topographic').addTo(map);

}

function geocodeAddress(){

  var address = getAddress();
  L.esri.Geocoding.geocode().text(address).run(function (err, results, response) {
    if (!err) {
      lat = results.results[0].latlng.lat;
      lng = results.results[0].latlng.lng;
      console.log("lat ="+lat+", lng = "+lng);

      // Add marker
      var marker = L.marker([lat, lng]).addTo(map);
    } else {
      console.log(err);
      alert("Geocoding was not successful for the following reason: " + err);
    }
  });
}

function getAddress() {

  var viaSelector = document.getElementById("via");
  var via = viaSelector.options[viaSelector.selectedIndex].text;

  var nomCarrer = document.getElementById("nomCarrer").value;
  var numCarrer = document.getElementById("numCarrer").value;
  var city = document.getElementById("poblacio").value;

  var address = `${via} ${nomCarrer} ${numCarrer} ${city}`;
  console.log("address = "+address);
  return address;
}

