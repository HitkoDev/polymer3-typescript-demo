import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
const template = "<h1>Hello World!</h1><pretty-button href=\"https://github.com/HitkoDev/polymer3-typescript-demo\">Check out the source!</pretty-button><pretty-button class=\"button--red\">Another pretty button, this time in red</pretty-button>";
const style = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}pretty-button{margin:5px;--button-color:#00bcca}pretty-button.button--red{--button-color:#8f0606}";
export class MyApp extends PolymerElement {
    static get template() {
        return `
            <style>
                ${style}
            </style>

            ${template}
        `;
    }
    ready() {
        super.ready();
        import('./components/buttons/pretty-button.js');
    }
}
customElements.define('my-app', MyApp);
