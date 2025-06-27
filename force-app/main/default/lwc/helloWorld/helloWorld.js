import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //Directly updating the property
    address = {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105"
    } 
     trackHandler(event) {
        this.address = { ...this.address, city: event.target.value };    
    }   
    //Updating the property using track operator/Binding
    @track array = { firstname: "John", lastname: "Jane" };
    trackHandler1(event) {
         this.array.firstname = event.target.value;
    }
    // Getter Example
    users = ["Bala","Siva","Karthik"];
    num1 = 10;
    num2 = 20;
      get userName () {
        return this.users[0].toUpperCase()
    }
      get multiply() {
        return this.num1 * this.num2;
    }
}