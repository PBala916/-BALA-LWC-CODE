import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
  closeModal(){
    const myEvent = new CustomEvent('close', {
        bubbles: true,
        detail: { 
            msg: "Modal closed Successfully" 
        }})
            this.dispatchEvent(myEvent);
        }
    footerHandler(){
        console.log("Footer Handler Called")
    }
}