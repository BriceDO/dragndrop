let divDrag = document.getElementById('divdrag');
let pDrag = document.getElementById('drag');
let zoneDepot = document.getElementById('drop');

/**
 * Fonction qui prend en charge ce que l'on veut déplacer
 * @param {*} event 
 */
const dragstart = (event) => {
    // Je transmets les informations de l'élèment draggable au data Transfer
    event.dataTransfer.setData("monTexte", event.target.id);
}

/**
 * Fonction qui se déclenche une fois qu'on survole la zone de drop
 * @param {*} event 
 */
 const dragover = (event) => {
    // Je bloque le rechargement de la page
    event.preventDefault();
    // Indique visuellement que l'élément sera déplacé ici
    event.dataTransfer.dropEffect = "move";
}

/**
 * Fonction qui se déclenche une fois l'élément tombe dans la zone drop
 * @param {*} event 
 */
const drop = (event) => {
    // Je bloque le rechargement de la page
    event.preventDefault();
    // Je reçois les informations de l'élèment draggable du data Transfer
    let monTexteRecu = event.dataTransfer.getData("monTexte");

    const draggedElement = document.getElementById(monTexteRecu);
    // J'insère mon élèment déplacé sur l'élèment DOM ciblé
    event.target.appendChild(draggedElement);
}

// Ecoutes d'évènements
divDrag.addEventListener('dragstart', dragstart);
zoneDepot.addEventListener('drop', drop);
zoneDepot.addEventListener('dragover', dragover);

// Pour avoir un effet inverse, et drag dans la div de départ
zoneDepot.addEventListener('dragstart', dragstart);
divDrag.addEventListener('drop', drop);
divDrag.addEventListener('dragover', dragover);