// ==============================
// 🌱 Sélection du DOM
// ==============================
const resultat = document.querySelector('.result');
const userTemp = document.querySelector('.temp');
const convBt = document.querySelector('.conversion')

// ==============================
// 🛵 Fonctionnalités
// ==============================
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32; 
}

const displayResult = (tempOriginale, resultatConversion) => {
  resultat.innerHTML = `La conversion de ${tempOriginale} en degrés Fahrenheit est de ${resultatConversion}!`;
  userTemp.value = "";
  userTemp.select();
}

// ==============================
// 🧲 Événements
// ==============================

convBt.addEventListener('click', (e) => {
  e.preventDefault();
  const tempUtilisateur = userTemp.value;
  // Ternaiiiiiiiiire
  userTemp.value
  ? displayResult(tempUtilisateur, celsiusToFahrenheit(tempUtilisateur))
  : resultat.innerHTML = "❌ Veuillez entrer une valeur numérique.";
})