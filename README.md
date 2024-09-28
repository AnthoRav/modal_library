# Vite Modal Library

**Vite Modal Library** is a simple and lightweight React component library that allows you to add a customizable modal to your React projects. This library is built with **Vite** and is ready to be used in your React applications.

## Features

- Display and close a modal with simple CSS animations.
- Customize modal content using props.
- Easy integration into any React project.

## Installation

You can install this library via npm by running the following command in your terminal:
```bash
 npm install vite-modal-library
```

Import it into your project with: :
```bash
import Modal from 'vite-modal-library';
```
And the default CSS in the parent component with: 
```bash
import 'vite-modal-library/style.css'
```

## Props

The Modal component accepts the following properties:

| Props       | Type       | Description                                                                 |
|-------------|------------|-----------------------------------------------------------------------------|
| `isOpen`    | `boolean`  | Controls the visibility of the modal. true to show, false to hide. |
| `onClose`   | `function` | Function called when the modal is closed (e.g., button or outside click). |
| `children`  | `node`     | Content to display inside the modal. Can include text, components, etc. |

## Custom Styling

By default, the modal includes simple styling, but you can easily customize the styles by editing or replacing the included CSS file. You can modify or add your own CSS to match the appearance to your specific needs.

For example, you can customize the modal's background, borders, padding, and other visual properties.

## Required Dependencies

This library requires the following dependencies in your project:

- **React** (version 18.0.0 or higher)
- **ReactDOM** (version 18.0.0 or higher)
- **Node** (version 18.0.0 or higher)

## Licence

This library is licensed under the MIT license. You are free to use, modify, and distribute it as you see fit.

---

Thank you for using Vite Modal Library!