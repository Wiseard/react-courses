/*

REACT DOC

EXTENSIONS

ES7+

Les raccourcis essentiels :
RAFC : permet d'automatiser les commandes suivantes :
- Import react from react
- Création d'une fonction fléchée retournant une DIV
- export default from function

RFCE : permet d'automatiser les commandes suivantes : 
- Import react from react
- Création d'une fonction classique retournant une DIV
- export default from function


---------------------------------------------------------------


Construire du code HTML :

Dans le fichier INDEX.JS :

1. Importer les modules nodes pour travailler en REACT :
import React from "react";
import ReactDOM from "react-dom/client";

1.1 Créer un fichier JS qui comportera le code à injecter (myCode.js)

2. La création du code HTML se fait via une fonction :
const MyFunction = () => { return <h2>My first code</h2>; };
- La fonction doit toujours commencer par une majuscule

2.1 Si la fonction a été créée dans un autre fichier JS :
Ecrire 'export default MyFunction' dans le fichier myCode.js
Ecrire 'import MyFunction from './myCode.js' dans le fichier INDEX.JS

3. Créer une variable ROOT qui séléctionnera la DIV ayant pour ID = "root" présente dans le fchier INDEX.HTML :
const root = ReactDOM.createRoot(document.getElementById('root'));

4. Injecter le code créé dans la DIV sélectionnée via la variable ROOT :
root.render( <MyFunction/> );
- le contenu de la fonction render doit toujours être entouré de bracket < MyFunction />



*/
