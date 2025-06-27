import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent = 10;
    changeHandler(event){
        this.percent = event.target.value;
    }
    //append the width dynamically
    get percentage(){
        return `width:${this.percent}%`;
    }
}