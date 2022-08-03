import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/opportunityController.getOpportunities'
export default class ChartsDemo extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]
    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log(data)
            //remove duplicate
            const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}), {})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        
        }
        if(error){
            console.error(error)
        }
    }
}