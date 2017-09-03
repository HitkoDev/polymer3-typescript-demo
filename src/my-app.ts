import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js'
import template from './my-app.html'
import style from './my-app.scss'

export class MyApp extends PolymerElement {
    static get template() {
        return `
            <style>
                ${style}
            </style>

            ${template}
        `
    }

    ready() {
        super.ready()
        import('./components/buttons/pretty-button.js')
    }
}

customElements.define('my-app', MyApp)