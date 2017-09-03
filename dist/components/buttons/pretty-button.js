import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
const template = "<a href=\"[[href]]\" class=\"button\"><slot></slot></a>";
const style = ":host{display:block}a.button{display:inline-block;padding:5px 15px;background:none;color:var(--button-color,#00f);text-decoration:none;border:1px solid var(--button-color,#00f);border-radius:4px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;cursor:pointer}a.button:hover{color:#fff;background:var(--button-color,#00f)}";
export class PrettyButton extends PolymerElement {
    static get template() {
        return `
            <style>
                ${style}
            </style>

            ${template}
        `;
    }
    static get properties() {
        return {
            href: {
                Type: String
            }
        };
    }
}
customElements.define('pretty-button', PrettyButton);
