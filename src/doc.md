# REACT DOC

## EXTENSIONS

### `ES7+`

`Les raccourcis essentiels`

RAFC : permet d'automatiser les commandes suivantes :

- `import react from react`
- Création d'une fonction fléchée retournant une DIV
- `export default from function`

RFCE : permet d'automatiser les commandes suivantes :

- ìmport react from react`
- Création d'une fonction classique retournant une DIV
- `export default from function`

Voir tous les [raccourcis](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

## Construire du code HTML

### `Dans le fichier INDEX.JS`

1. Importer les modules nodes pour travailler en REACT :
   `import React from "react"`
   `import ReactDOM from "react-dom/client"`

1.1 Créer un fichier JS qui comportera le code à injecter (`myCode.js`)

2. La création du code HTML se fait via une fonction :

```js
const MyFunction = () => {
  return <h2>My first code</h2>
}
```

- La fonction doit toujours commencer par une majuscule

  2.1 Si la fonction a été créée dans un autre fichier JS :
  Ecrire `export default MyFunction` dans le fichier `myCode.js`
  Ecrire `import MyFunction from ""./myCode.js"` dans le fichier `INDEX.JS`

3. Créer une variable `ROOT` qui séléctionnera la DIV ayant pour `ID = "root"` présente dans le fchier `INDEX.HTML` :

```js
const root = ReactDOM.createRoot(document.getElementById('root'))

// Injecter le code créé dans la DIV sélectionnée via la variable ROOT :

root.render(<MyFunction />)
```

- le contenu de la fonction render doit toujours être entouré de bracket `<div MyFunction />`

### `Avec React.createElement()`

```js
// Avec une fonction simple :
function Greeting() {
  return ( <h3>My first Component</h3> );
}

// Variante avec React.createElement() :

function Greeting() {
  return ( React.createElement('h3', {}, 'first Component') );
}

// Autre exemple avec un TAG imbriqué :

// Avec une fonction simple :
function Greeting() {
  return ( <div> <h3>My first Component</h3> </div> );
}

// Variante avec React.createElement() :

function Greeting() {
  return (
    React.createElement('div',
    {},
    React.createElement('h3', {}, 'first Component')
    );
};
```

## `React.Fragment`

React.Fragment permet d'englober du JSX (valeur de retour HTML d'une fonction) sans y ajouter de TAGS supplémentaires :

```js
function Greeting() {
  return (
    <div>
      <h3>My first Component</h3>
    </div>
  )
}

function Greeting() {
  return <React.Fragment> My first Component </React.Fragment>
  // variante return ( <> My first Component </>);
}
```

1. Arboresecence classique :

```js
<div id="root">
  <div>
    <h3>My first Component</h3>
  </div>
</div>
```

2. Arborescence avec React.Fragment :

```js
<div id="root">My first Component</div>
```

## 'JSX Attribute`

#### `camelCase property naming convention`

```js
// HTML

<div tabindex="1">
  <button onclick="myFunction()">click me</button>
  <label for="name">Name</label>
  <input readonly id="name" />
</div>

// JSX
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor="name">Name</label>
    <input readOnly={true} id="name" />
  </div>
)
```

#### `Ajouter une classe`

```js
// HTML
<div class="myClass"></div>

// JSX
return <div className="myClass"></div>
```

#### `Composants imbriqués`

```js
const Title = () => <h1>Greeting</h1>

const Paragraph = () => <p>How are you?</p>

const Greeting = () => {
  return (
    <>
      <Title />
      <Paragraph />
    </>
  )
}
```
