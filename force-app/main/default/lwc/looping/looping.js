import Name from '@salesforce/schema/Account.Name';
import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];

    ceoList = [
        {   
            id:1,
            company : "Google",
            name: "sundar pichai",
        },
        {  
            id:2,
            company : "Amazon",
            name: "Jeff Bezos",
        },
        {   
            id:3,
            company : "Facebook",
            name: "Mark Zuckerberg",
        },
        { 
            id:4,
            company: "Apple",
            name: "Tim Cook",
        }        
    ]
}