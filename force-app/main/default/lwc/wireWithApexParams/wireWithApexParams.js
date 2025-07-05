import { LightningElement, wire } from 'lwc';
import filterAccountTypeType from '@salesforce/apex/ApexController.filterAccountTypeType'
export default class WireWithApexParams extends LightningElement {
    selectedType=''
    @wire(filterAccountTypeType, {type:'$selectedType'})
    filteredAccounts

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"},
            {label:"Prospect", value:"Prospect"},
            {label:"Other", value:"Other"},
            {label:"Installation Partner", value:"Installation Partner"},
            {label:"Technology Partner", value:"Technology Partner"}
        ]
    }
    typeHandler(event){
        this.selectedType = event.target.value
    }
}