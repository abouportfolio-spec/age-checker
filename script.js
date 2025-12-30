const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (!age || age < 0) {
        resultat.textContent = "❌ Veuillez entrer un âge valide.";
        resultat.style.color = "red";
        return;
    }

    if (age < 18) {
        resultat.textContent = "👶 Vous êtes mineur.";
        resultat.style.color = "#ff9800";
    } 
    else if (age < 45) {
        resultat.textContent = "🧔 Vous êtes majeur.";
        resultat.style.color = "#2ecc71";
    } 
    else {
        resultat.textContent = "🧓 Vous êtes senior.";
        resultat.style.color = "#3498db";
    }
});