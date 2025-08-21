import { LightningElement, api } from 'lwc';

export default class LwcMetaConfigurationTags extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels

}