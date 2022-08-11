let inputText = document.getElementById('inputText');

inputText.addEventListener('change', (event) => {
    let resultat = document.getElementsByClassName('resultat')[0];
    resultat.innerHTML = `
    <h3>Vous avez ecrit: ${event.target.value}</h3><br>
    <h3>Nombre de lettre saisie: ${event.target.value.length}</h3>
    <h3>Votre saisie en majuscule: ${event.target.value.toUpperCase()}</h3>
    `;
});