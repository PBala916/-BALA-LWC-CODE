import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false;
    constructor(){
        //Constructor should call always super().
        //Super is the first method called when the component load that get called up
        super()
            console.log("Parent constructor called")
    }
    connectedCallback(){
        console.log("Parent connected callback called");
    }
       renderedCallback(){
        console.log("Parent rendered callback called");
    }
    handleClick(){
        //Updating the property
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}