function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//Creat new const to close the modalBg
const spanX = document.getElementById("close-modale")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal(e) {
  modalbg.style.display = "block";
}
// Close modal
spanX.addEventListener("click", function(e) {
  modalbg.style.display = "none" 
})
// END modal



// DOM Element

const myForm = document.getElementById("myForm")
const firstName = document.getElementById ("first")
const inpuData = document.querySelectorAll('.formData input')
const myRegex = /^.{2,}$/


// INITIALISATION DES PARAMETRES DE LA FONCTION PRINCIPALE


// ===== Prénom ===== 
const firstError = document.getElementById('error1')



const checkPrenomIfZero = () => {
  if(firstName.value.trim() === ""){
    console.log("PRENOM")
    firstError.classList.add('visible')
    firstName.classList.add('bordure')
    return false
  }
  return true
}

const checkPrenomIfTwo = () => {
  if (!(myRegex.test(firstName.value))){
    console.log("PRENOM++")
    return false
  }
  return true
}



// ===== NOM =====
const secondError = document.getElementById('error2')


const lastName = document.getElementById ("last")

const checkNom = () => {
  if(lastName.value.trim() === ""){
    lastName.classList.add('error-form')
    secondError.classList.add('visible')
    lastName.classList.add('bordure')
    console.log("NOM")
    return false
  }

  if (!(myRegex.test(lastName.value))){
    lastName.classList.add('error-form')
    console.log("NOM++")
    return false
  }
  lastName.classList.remove('error-form')
  return true
}

// ===== MAIL =====
const thirdError = document.getElementById('error3')


const eMailvalidator = document.getElementById("email")
const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/


const checkIfMailIsFull = () => {
  if(eMailvalidator.value.trim() === ""){
    console.log("AUTRE")
    thirdError.classList.add('visible')
    eMailvalidator.classList.add('bordure')
    return false
  }
  return true
}


const checkMail = () => {
  if (!(regexEmail.test(eMailvalidator.value))){
    console.log("Test de l'Email")
    thirdError.classList.add('visible')
    eMailvalidator.classList.add('bordure')
    return false
  }

  if (!(myRegex.test(eMailvalidator.value))){
    console.log("MAIL++")
    return false
  }
  return true
}

// ===== DATEPICKER =====
const forthdError = document.getElementById('error4')


const birtDay = document.getElementById('birthdate')
const regexNumber = /^[0-9]+(-[0-9]+)+$/

const checkBirthDay = () =>  {
  if (!(regexNumber.test(birtDay.value))){
    console.log("PROBLEME DATE")
    forthdError.classList.add('visible')
    birtDay.classList.add('bordure')
    return false
  }
  return true
}



// ===== NOMBRE DE TOURNOIS =====
const fifthError = document.getElementById('error5')

const quantityTournois = document.getElementById('quantity')

const checkTournois = () => {
  if(quantityTournois.value.trim() === ""){
    console.log("Quantité tournois non valide")
    fifthError.classList.add('visible')
    quantityTournois.classList.add('bordure')
    return false
  }
  return true
}

// ===== BOUTONS RADIO =====

const radioInputUn = document.getElementById('location1')
const radioInputDeux = document.getElementById('location2')
const radioInputTrois = document.getElementById('location3')
const radioInputQuatre = document.getElementById('location4')
const radioInputCinq = document.getElementById('location5')
const radioInputSix = document.getElementById('location6')

const checkRadio = () => {
  if(!(radioInputUn.checked || radioInputDeux.checked || radioInputTrois.checked || radioInputQuatre.checked || radioInputCinq.checked || radioInputSix.checked)){
    console.log("RADIO NE FONCTIONNE PAS")
    return false
  }
  return true
}

// ===== CONDITIONS OBLIGATOIRE =====

const checkBox = document.getElementById("checkbox1")

const validCheckBoxChecked = () => {
  if(!checkBox.checked){
    console.log("Champs obligatoire")
    return false
  }
  return true
}

// FONCTION VERIFIE COMPORTEMENT : VALIDE OU PAS VALIDE

// FONCTION EVENEMENT ENVOIE SUR AJAX =====>

myForm.addEventListener('submit', function(e) {
  
  if(!(checkPrenomIfZero() && checkPrenomIfTwo() && checkNom() && checkMail() && checkBirthDay() && checkTournois() && checkRadio() && validCheckBoxChecked())){
    e.preventDefault()
    return
  }
})
