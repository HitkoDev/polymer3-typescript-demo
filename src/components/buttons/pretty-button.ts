import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import template from './pretty-button.html'
import style from './pretty-button.scss'

export class PrettyButton extends PolymerElement {
    static get template() {
        return `
            <style>
                ${style}
            </style>

            ${template}
        `
    }

    static get properties() {
        return {
            href: {
                Type: String
            }
        }
    }
}

customElements.define('pretty-button', PrettyButton)