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

//REGEX 

const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
const myRegex = /^.{2,}$/
const regexNumber = /^[0-9]+(-[0-9]+)+$/

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

function verifeMailvalidator (eMailvalidator){
  let valid = false
  if(!(regexEmail.test(eMailvalidator.value))){
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
  console.log('DATE', birtDay)
}

// ===== NOMBRE DE TOURNOIS =====

function verifQuantityTournois (quantityTournois){
  console.log('TOURNOIS', quantityTournois)
}

// ===== BOUTONS RADIO =====
/*
function verifLastName (lastName){
  console.log(lastName)
}
*/
// ===== CONDITIONS OBLIGATOIRE =====

function verifCheckBox (checkBox){
  console.log('CHECKBOX', checkBox)
}
