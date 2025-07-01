import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToRecordPageView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '500Hy000008DDdbIAG',
                objectApiName: 'Case',
                actionName: 'view'
            }
        });
    }
    navigateToRecordPageEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '500Hy000008DDdbIAG',
                objectApiName: 'Case',
                actionName: 'edit'
            }
        });
    }
}