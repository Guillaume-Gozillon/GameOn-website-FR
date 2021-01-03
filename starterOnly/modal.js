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

const checkBox = document.getElementById("checkbox1")

// INITIALISATION DES PARAMETRES DE LA FONCTION 

const firstName = document.getElementById ("first")
const myRegex = /^.{6,}$/

const checkPrenom = () => {
  if(firstName.value.trim() === ""){
    console.log("PRENOM")
    return false
  }

  if (!(myRegex.test(firstName.value))){
    console.log("PRENOM++")
    return false
  }
  return true
}

const lastName = document.getElementById ("last")

const checkNom = () => {
  if(lastName.value.trim() == ""){
    console.log("NOM")
    return false
  }

  if (myRegex.test(lastName.value) == false){
    console.log("NOM++")
    return false
  }
  return true
}

const eMailvalidator = document.getElementById("email")
const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/

const checkMail = () => {
  if (!(regexEmail.test(eMailvalidator.value))){
    console.log("Test de l'Email")
    return false
  }

  if (!(myRegex.test(eMailvalidator.value))){
    console.log("MAIL++")
    return false
  }
  return true
}

const birtDay = document.getElementById('birthdate')
const regexNumber = /^[0-9]+(-[0-9]+)+$/

const checkBirthDay = () =>  {
  if (!(regexNumber.test(birtDay.value))){
    console.log("PROBLEME DATE++")
    return false
  }
  return true
}

const quantityTournois = document.getElementById('quantity')

const checkTournois = () => {
  if(quantityTournois.value.trim() == ""){
    console.log("Quantité tournois non valide")
    return false
  }
  return true
}

const checkRadio = () => {
  if(!(radioInputUn.checked || radioInputDeux.checked || radioInputTrois.checked || radioInputQuatre.checked || radioInputCinq.checked || radioInputSix.checked)){
    console.log("RADIO NE FONCTIONNE PAS")
    return false
  }
  return true
}

const radioInputUn = document.getElementById('location1')
const radioInputDeux = document.getElementById('location2')
const radioInputTrois = document.getElementById('location3')
const radioInputQuatre = document.getElementById('location4')
const radioInputCinq = document.getElementById('location5')
const radioInputSix = document.getElementById('location6')

const validCheckBoxChecked = () => {
  if(!checkBox.checked){
    console.log("HEYPPP")
    return false
  }
  return true
}

// FONCTION EVENEMENT ENVOIE SUR AJAX

const myForm = document.getElementById("myForm")

myForm.addEventListener('submit', function(e) {
  
  if(!checkPrenom()){
    e.preventDefault()
    return
  }

  if (!checkNom()){
    e.preventDefault()
    return
  }

  if (!checkMail()){
    e.preventDefault()
    return
  }

  if (!(checkBirthDay())){
    e.preventDefault()
    return
  }

  if(!(checkTournois())){
    e.preventDefault()
    return
  }

  if(!(checkRadio())){
    e.preventDefault()
    return
  }

  if(!(validCheckBoxChecked())){
    e.preventDefault()
    return
  }

  console.log("AJAX")

})