// Manipuler les elements de la page html (div)
let monDiv = document.getElementById('content')

// Changer le contenu d'un element
monDiv.innerHTML = "<h1>Hello everyone</h1>";

// Creer un element (paragraphe)
let child = document.createElement('div');

// Ajouter un attribut a un element
child.setAttribute("class", "bg-primary");

child.innerHTML = `<h2 class="text-light ">What's up ?</h2>`;

// Ajouter l'element creer a l'element parent
monDiv.appendChild(child);

// Creons et ajoutons un second element
let secondChild = document.createElement("div");
secondChild.setAttribute("class", "bg-danger");
secondChild.innerHTML = `<h2 class="text-light">What's new ?</h2>`;
monDiv.appendChild(secondChild);
