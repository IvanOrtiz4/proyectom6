let map, lat, lng;

window.onload = function () {

  loadMap();

  document.querySelector("button[type=submit]").addEventListener("click", validate);

  document.getElementById("nom").addEventListener("blur",validateNom);
  document.getElementById("cognoms").addEventListener("blur",validateCognom);
  document.getElementById("dni").addEventListener("blur",validateDNI);
  document.getElementById("email").addEventListener("blur",validateEmail);
  document.getElementById("telefon").addEventListener("blur",validateTelefon);

  document.getElementById("btnUsername").addEventListener("click",generateUsername);

document.getElementById("findLoc").addEventListener("click", geocodeAddress);

  document.getElementById("addressOk").addEventListener("click", () => {
    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lng;
  });


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

function generateUsername(){

  var nom = document.getElementById("nom").value;
  var cognoms = document.getElementById("cognoms").value.replace(" ","").toLowerCase();
  var dni = document.getElementById("dni").value;

  var username = nom.substr(0,1).toLowerCase() + 
                 cognoms[0].toUpperCase() + cognoms.substr(1,3) +
                 dni[0] + dni[2] + dni[4] + dni[6];
  
  document.getElementById("username").value=username;
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

function isValidDNI(dni){

  var re = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/g;

  if (!re.test(dni)) return false;

  // Check last letter
  var lastLetter = dni.substr(dni.length-1, dni.lenght);
  var index = parseInt(dni.substr(0, 8)) % 23;

  var dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
  if (dniLetters.charAt(index) == lastLetter) return true;

  return false;
}

function isValidEmail(email){

  var re = /^\w+(\.\w+)*@\w+(\.\w+){1,2}$/g;
  return re.test(email);
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

