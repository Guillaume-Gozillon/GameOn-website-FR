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
const sixthError = document.getElementById('error6')
const seventhError = document.getElementById('error7')

let radioInputUn = document.getElementById('location1')
let radioInputDeux = document.getElementById('location2')
let radioInputTrois = document.getElementById('location3')
let radioInputQuatre = document.getElementById('location4')
let radioInputCinq = document.getElementById('location5')
let radioInputSix = document.getElementById('location6')

const aTestwithArrayx = [radioInputUn, radioInputDeux, radioInputTrois, radioInputQuatre, radioInputCinq, radioInputSix]

const closemodal2 = document.querySelector(".close2");

const locationChecked = document.getElementById('checkbox1')

// Utiliser des let pour que JS parcours tous le script
                   
const myRegex = RegExp(/^.{2,}$/)

// EVENT

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

spanX.addEventListener("click", function(e) {
  modalbg.style.display = "none" 
})

// FUNCTION launch modal form

function launchModal(e) {
  modalbg.style.display = "block";
}


// Envoie submit

function verifAll() {
  verifFirstName(firstName)
  verifLastName(lastName)
  verifeMailvalidator(eMailvalidator)
  verifBirtDay(birtDay)
  verifQuantityTournois(quantityTournois)
  verifCheckRadio(aTestwithArrayx)
  verifCheckBox(locationChecked)
}


myForm.addEventListener('submit', function(e) {
  verifAll()
  if((verifFirstName(firstName) && verifLastName(lastName) && verifeMailvalidator(eMailvalidator) && verifBirtDay(birtDay) && verifQuantityTournois(quantityTournois) && verifCheckRadio(aTestwithArrayx) && verifCheckBox(locationChecked)) === false){
    e.preventDefault()
    return
  }
  alert('Merci ! Votre réservation a été reçue.')
})

// ===== Prénom =====

function verifFirstName (firstName){
  let valid = false
  if(firstName.value.length > 1){
    valid = true
    firstName.classList.add('green')
    firstError.classList.remove('visible')
    firstName.classList.remove('bordure')
  }
  else{
   valid = false 
   firstError.classList.add('visible')
   firstName.classList.add('bordure')
  console.log('TEST Booléens Prénom', valid)
  }
  return valid
}

// ===== NOM =====

function verifLastName (lastName){
  let valid = false
  lastName.value
  if(lastName.value.length > 1){
    valid = true
    lastName.classList.add('green')
    secondError.classList.remove('visible')
    lastName.classList.remove('bordure')
  }
  else{
    valid = false
    secondError.classList.add('visible')
    lastName.classList.add('bordure')
  }
  console.log('TEST Booléens LASTNAME', valid)
  return valid
}

// ===== MAIL =====

// La fonction récupere la regex et non un objet

function verifeMailvalidator (eMailvalidator){
  const regexEmail = RegExp(/^[a-z0-9.-]+@[a-z_]+?.[a-z]{2,3}$/);
  let valid = false
  let regexValid = regexEmail.test(eMailvalidator.value)
  if(regexValid){
    valid = true
    eMailvalidator.classList.add('green')
    thirdError.classList.remove('visible')
    eMailvalidator.classList.remove('bordure')
  }
  else{
    valid = false
    thirdError.classList.add('visible')
    eMailvalidator.classList.add('bordure')
  }
  console.log('TEST Booléens EMAIL', valid)
  return valid
}

// ===== DATEPICKER =====

function verifBirtDay (birtDay){
  let valid = false
  const regexNumber = RegExp(/^[0-9]+(-[0-9]+)+$/)

  if(regexNumber.test(birtDay.value)){
    valid = true
    birtDay.classList.add('green')
    forthdError.classList.remove('visible')
    birtDay.classList.remove('bordure')
  }
  else{
    valid = false
    forthdError.classList.add('visible')
    birtDay.classList.add('bordure')
  }
  console.log('TEST Booléens DATE', valid)
  return valid
}

// ===== TOURNOIS =====

function verifQuantityTournois (quantityTournois){
  let valid = false
  const regexNombre = RegExp(/^\d+$/)
  if(regexNombre.test(quantityTournois.value)){
    valid = true
    quantityTournois.classList.add('green')
    fifthError.classList.remove('visible')
    quantityTournois.classList.remove('bordure')
  }
  else{
    valid = false
    fifthError.classList.add('visible')
    quantityTournois.classList.add('bordure')
  }
  console.log('TEST Tournois', valid)
  return valid
}

// ===== BOUTONS RADIO =====

function verifCheckRadio (aTestwithArrayx){

  let valid = false

  if((radioInputUn.checked || radioInputDeux.checked || radioInputTrois.checked || radioInputQuatre.checked || radioInputCinq.checked || radioInputSix.checked) == true){
    valid = true
    sixthError.classList.remove('visible')
  }
  else{
    valid = false
    sixthError.classList.add('visible')
  }
  console.log('ARRAY', valid)
  return valid
}

// ===== CONDITIONS OBLIGATOIRE =====

function verifCheckBox (locationChecked){
  let valid = false
  if(locationChecked.checked == true){
    valid = true
    locationChecked.classList.add('green')
    seventhError.classList.remove('visible')
  }
  else{
    valid = false
    seventhError.classList.add('visible')
  }
  console.log('CHECKBOX', valid)
  return valid
}