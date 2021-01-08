function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Element

const spanX = document.getElementById("close-modale")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const myForm = document.getElementById("myForm")

const firstName = document.getElementById ("first")
const lastName = document.getElementById("last")
const eMailvalidator = document.getElementById("email")
const birtDay = document.getElementById('birthdate')
const quantityTournois = document.getElementById('quantity')
const checkBox = document.getElementById("checkbox1")

const firstError = document.getElementById('error1')
const secondError = document.getElementById('error2')
const thirdError = document.getElementById('error3')
const forthdError = document.getElementById('error4')
const fifthError = document.getElementById('error5')

const radioInputUn = document.getElementById('location1')
const radioInputDeux = document.getElementById('location2')
const radioInputTrois = document.getElementById('location3')
const radioInputQuatre = document.getElementById('location4')
const radioInputCinq = document.getElementById('location5')
const radioInputSix = document.getElementById('location6')

const inputGeneral = [radioInputUn, radioInputDeux, radioInputTrois, radioInputQuatre, radioInputCinq, radioInputSix]

//REGEX 

// Utiliser des let pour que JS parcours tous le script
                   
const myRegex = RegExp(/^.{2,}$/)


// EVENT

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

spanX.addEventListener("click", function(e) {
  modalbg.style.display = "none" 
})

myForm.addEventListener('submit', function(e) {
  verifAll()
})

// FUNCTION launch modal form

function launchModal(e) {
  modalbg.style.display = "block";
}

function verifAll() {
  verifFirstName(firstName.value)
  verifLastName(lastName.value)
  verifeMailvalidator(eMailvalidator.value)
  verifBirtDay(birtDay.value)
  verifQuantityTournois(quantityTournois.value)
  verifCheckRadio(radioInputUn.value, radioInputDeux.value, radioInputTrois.value, radioInputQuatre.value, radioInputCinq.value, radioInputSix.value)
  verifCheckBox(checkBox.value)
}

// ===== Prénom ===== 

function verifFirstName (firstName){
  console.log('PRENOM', firstName)
  let valid = false
  if(firstName.length > 1){
    valid = true
  }
  else{
   valid = false 
  }
  console.log('TEST Booléens Prénom', valid)
  return valid
}

// ===== NOM =====

function verifLastName (lastName){
  let valid = false
  if(lastName.length > 1){
    valid = true
  }
  else{
    valid = false
  }
  console.log('TEST Booléens LASTNAME', valid)
  return valid
}

// ===== MAIL =====
// La fonction récupere la regex et non un objet
function verifeMailvalidator (eMailvalidator){
  const regexEmail = RegExp(/^[a-z0-9.-]+@[a-z_]+?.[a-z]{2,3}$/);
  let valid = false
  let regexValid = regexEmail.test(eMailvalidator)
  if(regexValid){
    valid = true
  }
  else{
    valid = false
  }
  console.log('TEST Booléens EMAIL', valid)
  return valid
}

// ===== DATEPICKER =====

function verifBirtDay (birtDay){
  let valid = false
  const regexNumber = RegExp(/^[0-9]+(-[0-9]+)+$/)

  if(regexNumber.test(birtDay)){
    valid = true
  }
  else{
    valid = false
  }
  console.log('TEST Booléens DATE', valid)
  return valid
}

// ===== TOURNOIS =====

function verifQuantityTournois (quantityTournois){
  let valid = false
  const regexNombre = RegExp(/^\d+$/)
  if(regexNombre.test(quantityTournois)){
    valid = true
  }
  else{
    valid = false
  }
  console.log('TEST Tournois', valid)
  return valid
}

// ===== BOUTONS RADIO =====

function verifCheckRadio (inputGeneral){

  let valid = false
  console.log(inputGeneral[4])
  for (let i = 0; i < inputGeneral.length; i++){
    if((inputGeneral.checked) === true){
      valid = true
    }
  }
  console.log("RADIO NE FONCTIONNE PAS", valid)
  return valid
}

// ===== CONDITIONS OBLIGATOIRE =====

function verifCheckBox (checkBox){
  let valid = false
  if(checkBox.checked){
    valid = true
  }
  else{
    valid = false
  }
  console.log('CHECKBOX', valid)
  return valid
}