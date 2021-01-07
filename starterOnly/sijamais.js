const checkPrenomIfZero = () => {
  if((firstName.value.trim() === "") && (!(myRegex.test(firstName.value)))){
    firstError.classList.add('visible')
    firstName.classList.add('bordure')
  } else {
    console.log("PRENOM", firstName.value)
  }
}

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
  
  // FONCTION AJOUTE UN CHAMPS <p>

  const addField = (id, newContent) => {
    const paraGraphe = document.createElement('p')
    const paraGrapheContainer = myForm.getElementsByClassName('formData')[id]
    paraGraphe.classList.add('red')
    paraGrapheContainer.appendChild(paraGraphe)
    firstName.appendChild = ''
    paraGraphe.textContent = newContent
  }

  // INITIALISATION DES PARAMETRES DE LA FONCTION PRINCIPALE
  
  const firstName = document.getElementById ("first")
  const myRegex = /^.{2,}$/
  
  // ===== Prénom ===== 
  const checkPrenom = () => {
    if(firstName.value.trim() === ""){
      firstName.classList.add('error-form')
      firstName.innerHTML = 'TEST'
      console.log("PRENOM")
      addField(0, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
      return false
    }
  
    const myForm = document.getElementById("myForm")
  
    if (!(myRegex.test(firstName.value))){
      console.log("PRENOM++")
      firstName.classList.add('error-form')
      addField(0, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
      return false
    }
    firstName.classList.remove('error-form')
    return true
  }
  
  const lastName = document.getElementById ("last")
  // ===== NOM =====
  const checkNom = () => {
    if(lastName.value.trim() === ""){
      lastName.classList.add('error-form')
      console.log("NOM")
      addField(1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
      return false
    }
  
    if (!(myRegex.test(lastName.value))){
      lastName.classList.add('error-form')
      console.log("NOM++")
      addField(1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
      return false
    }
    lastName.classList.remove('error-form')
    return true
  }
  
  const eMailvalidator = document.getElementById("email")
  const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
  // ===== MAIL =====
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
  // ===== DATEPICKER =====
  const checkBirthDay = () =>  {
    if (!(regexNumber.test(birtDay.value))){
      console.log("PROBLEME DATE++")
      return false
    }
    return true
  }
  
  const quantityTournois = document.getElementById('quantity')
  // ===== NOMBRE DE TOURNOIS =====
  const checkTournois = () => {
    if(quantityTournois.value.trim() === ""){
      console.log("Quantité tournois non valide")
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
  // ===== BOUTONS RADIO =====
  const checkRadio = () => {
    if(!(radioInputUn.checked || radioInputDeux.checked || radioInputTrois.checked || radioInputQuatre.checked || radioInputCinq.checked || radioInputSix.checked)){
      console.log("RADIO NE FONCTIONNE PAS")
      return false
    }
    return true
  }
  
  // ===== CONDITIONS OBLIGATOIRE =====
  
  const validCheckBoxChecked = () => {
    if(!checkBox.checked){
      console.log("Champs obligatoire")
      return false
    }
    return true
  }
  
  // FONCTION VERIFIE COMPORTEMENT : VALIDE OU PAS VALIDE
  

  
  // FONCTION EVENEMENT ENVOIE SUR AJAX =====>
  
  const myForm = document.getElementById("myForm")
  
  myForm.addEventListener('submit', function(e) {
    
    if(!checkPrenom()){
      e.preventDefault()
    }
  
    if (!checkNom()){
      e.preventDefault()
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
  
    alert('Hello')
  
  })

  // if => verification si true
  // else =>