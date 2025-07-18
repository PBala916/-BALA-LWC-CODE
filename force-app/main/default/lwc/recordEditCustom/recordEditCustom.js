import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue=''
    handleChange(event){ 
        this.inputValue = event.target.value
    }
    handleSubmit(event){ 
	//preventDefault will helps us to stop page refresh
        event.preventDefault()
	// Easy way To fetch the inputfield we are using queryselector if multiple input fields we user queryselectorAll
        const inputCmp = this.template.querySelector('lightning-input')
        const value= inputCmp.value
        if(!value.includes('Australia')){ 
		// setCustomValidity - Method to show erroe message
            inputCmp.setCustomValidity("The account name must include 'Australia'")
        } else { 
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()

    }
    successHandler(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Account created",
            message: "Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)

    }
    handleError(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Error creating Account",
            message: event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }
}