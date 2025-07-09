import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/ApexController.getAccountList'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    accounts
    handleClick(){
        getAccountList().then(result=>{
            console.log(result)
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}