import { LightningElement } from 'lwc';

export default class ReusableModal extends LightningElement {

    closeModal(){
       this.dispatchEvent(new CustomEvent('close'))
    }
    //remove footer
    handleSlotFooterChange(){
        const footerElement = this.template.querySelector('.slds-modal__footer')
        if(footerElement){
            footerElement.classList.remove('slds-hide')
        }
    }

    //remove space in header
    handleSlotHeaderChange(){
        const headerElement = this.template.querySelector('.slds-modal__header')
        if(headerElement){
            headerElement.classList.remove('remove_header')
        }
    }
}