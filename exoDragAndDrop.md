
# Drag and drop d'éléments

## Préparation d'une page html et css.
1. Créer une page html basique.
2. Ajouter une zone "drag" et une zone "drop" qui servira pour l'exercice.
3. Ajouter un fichier css avec son script pour styler les 2 zones.
4. Dans la zone drag, ajouter une image et ça légende qui serviront d'objets à déplacer.
5. Ajouter l'attribut "draggable" pour rendre les éléments déplaçables.

## préparer le déplacement d'objets
1. Créer un fichier Javascript et ajouter le script en html.
2. Récupérer les éléments DOM


3. Écouter ces éléments par le gestionnaire d'événement 'dragstart' qui lance une fonction pour gérer les objets déplaçables.


4. Créer une fonction pour gérer les objets déplaçables qui se lance avec l'événement 'dragstart':


5. Définir la zone qui peut recevoir les objets déplacés : écouter la zone cible "droppable" par les gestionnaires d'événements "dragover" et "drop" :


6. Créer la fonction dragover associée à l'événement 'dragover' pour gérer l'effet du déplacement :


7. Créer la fonction drop associé à l'événement 'drop' pour gérer l'effet du dépôt de votre élément :
récupèrer ce qui est déplacé et creer les éléments pour inserer ce qui est déplacé.