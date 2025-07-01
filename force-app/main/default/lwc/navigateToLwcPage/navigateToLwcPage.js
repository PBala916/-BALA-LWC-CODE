import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToLwcPage extends NavigationMixin(LightningElement)  {
    navigateToLwc(){ 
        var defination={ 
            componentDef:'c:navigateToTargetPage',
            attributes: { 
                recordId:'768766686686'
            }
        }
        this[NavigationMixin.Navigate]({ 
            type:'standard__webPage',
            attributes: { 
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
}