# Vite Modal Library

**Vite Modal Library** est une bibliothèque de composants React simple et légère qui permet d'ajouter une modale personnalisable à vos projets React. Cette bibliothèque est construite avec **Vite** et est prête à être utilisée dans vos projets React.

## Fonctionnalités

- Afficher et fermer une modale avec des animations CSS simples.
- Personnalisation du contenu de la modale à l'aide de props.
- Facile à intégrer dans tout projet React.

## Installation

Vous pouvez installer cette bibliothèque via npm en exécutant la commande suivante dans votre terminal :
'npm install vite-modal-library'

## Props

Le composant `Modal` accepte les propriétés suivantes :

| Props       | Type       | Description                                                                 |
|-------------|------------|-----------------------------------------------------------------------------|
| `isOpen`    | `boolean`  | Contrôle l'affichage de la modale. `true` pour afficher, `false` pour cacher. |
| `onClose`   | `function` | Fonction appelée lors de la fermeture de la modale (ex : bouton ou clic extérieur). |
| `children`  | `node`     | Contenu à afficher dans la modale. Peut inclure du texte, des composants, etc. |

## Style Personnalisé

Par défaut, la modale inclut un style simple, mais vous pouvez facilement personnaliser les styles en modifiant ou en remplaçant le fichier CSS inclus. Pour cela, vous pouvez éditer ou ajouter vos propres styles CSS afin d'adapter l'apparence à vos besoins spécifiques.

Par exemple, vous pouvez personnaliser le fond de la modale, les bordures, le padding, et d'autres propriétés visuelles.

## Dépendances Requises

Cette bibliothèque requiert les dépendances suivantes dans votre projet :

- **React** (version 18.0.0 ou supérieure)
- **ReactDOM** (version 18.0.0 ou supérieure)

## Licence

Cette bibliothèque est sous licence MIT. Vous êtes libre de l'utiliser, de la modifier et de la distribuer comme bon vous semble.

---

Merci d'avoir utilisé **Vite Modal Library** ! Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir un ticket sur le [répository GitHub](https://github.com/votre-utilisateur/react-modal-library).