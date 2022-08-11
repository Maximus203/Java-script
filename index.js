let myCheckbok = document.getElementById('secretDisplay');
let resultat = document.getElementsByClassName('resulat')[0];

myCheckbok.addEventListener('change', () => {
    if (resultat.hidden == true)
        resultat.hidden = false;
    else
        resultat.hidden = true;
});