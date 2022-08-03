import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountClass.getAccountList'

export default class ApexImperative extends LightningElement {
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