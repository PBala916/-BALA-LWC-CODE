import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToTabNavItemPage extends NavigationMixin(LightningElement) {
    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Memory_Game_Cards_Matching'
            }
        });
    }
}