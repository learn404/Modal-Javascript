# Exercice de Modal en JavaScript

Bienvenue dans l'exercice de modal en JavaScript ! Dans cet exercice, vous allez apprendre à créer un modal simple en utilisant JavaScript. Cela vous aidera à pratiquer la gestion des interactions utilisateur, la manipulation du DOM et la mise à jour de l'interface utilisateur en fonction des actions de l'utilisateur.

## Objectifs
- Comprendre comment sélectionner et manipuler des éléments du DOM en utilisant JavaScript.
- Apprendre à ajouter des écouteurs d'événements pour gérer les interactions utilisateur.
- Implémenter des fonctionnalités pour afficher et masquer un modal.

## Instructions

### 1. Configurer la structure HTML
Créez un fichier `index.html` avec la structure de base suivante :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple de Modal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Bouton pour ouvrir le modal -->
    <button id="openModalBtn">Ouvrir le Modal</button>

    <!-- Modal -->
    <div id="myModal" class="modal">
        <!-- Contenu du Modal -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Titre du Modal</h2>
            <p>Ceci est un exemple de modal.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
### 2. Styliser le Modal et le Contenu
Créez un fichier style.css pour styliser votre modal. Voici un exemple de base pour commencer :

```css
/* Style général du modal */
.modal {
    display: none; /* Masquer le modal par défaut */
    position: fixed; /* Rester en place */
    z-index: 1; /* Assurer que le modal est au-dessus des autres éléments */
    left: 0;
    top: 0;
    width: 100%; /* Largeur complète */
    height: 100%; /* Hauteur complète */
    overflow: auto; /* Activer le défilement si nécessaire */
    background-color: rgb(0, 0, 0); /* Couleur de fond */
    background-color: rgba(0, 0, 0, 0.4); /* Couleur de fond avec opacité */
}

/* Style du contenu du modal */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% du haut et centré horizontalement */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Largeur */
    max-width: 500px; /* Largeur maximum */
    border-radius: 10px;
}

/* Style du bouton de fermeture */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
```

### 3. Implémenter la Logique JavaScript
Créez un fichier `script.js` où vous écrirez le JavaScript pour gérer l'ouverture et la fermeture du modal.

Étapes pour compléter l'exercice :

1. Sélectionnez les éléments DOM nécessaires :

- Utilisez document.querySelector pour sélectionner le bouton d'ouverture du modal, les boutons de fermeture du modal, le modal lui-même, et l'overlay du modal.
2. Ajoutez des écouteurs d'événements :

- Ajoutez un écouteur d'événement click au bouton d'ouverture du modal pour afficher le modal et l'overlay.
- Ajoutez des écouteurs d'événements click aux boutons de fermeture du modal et à l'overlay pour masquer le modal et l'overlay.

3. Gérez l'affichage et le masquage du modal :

- Dans l'écouteur d'événement du bouton d'ouverture, enlevez la classe hidden du modal et de l'overlay.
- Dans les écouteurs d'événements des boutons de fermeture et de l'overlay, ajoutez la classe hidden au modal et à l'overlay.
### 4. Tester Votre Solution
- Ouvrez le fichier `index.html` dans votre navigateur.
- Cliquez sur le bouton "Open Modal" pour afficher le modal et sur les éléments de fermeture pour le masquer, et assurez-vous que le comportement est correct.

### Défis Supplémentaires
- Ajoutez du CSS pour des animations d'ouverture et de fermeture du modal.
- Implémentez la même fonctionnalité en utilisant la délégation d'événements.
- Rendez le modal accessible en permettant la fermeture avec la touche Esc du clavier.
