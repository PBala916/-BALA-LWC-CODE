import { LightningElement } from 'lwc';

export default class CssShadowDom extends LightningElement {
    isLoaded = false
    renderedCallback() {
		if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-css-shadow-dom {
            color: white; background-color: red; } `
        this.template.querySelector('lightning-button').appendChild(style)
		this.isLoaded = true
    }
}