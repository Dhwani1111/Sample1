import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error
    dateHandler(event){
        const {name, value} = event.target
        this[name] = value //this[startDate] = value
                            //this.startDate = value
    }

    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log("Data is Valid")
        } else{
            this.error = "End Date cannot be greater than Start Date"
        }
    }

    validateDate(startDate, endDate){
        //startDate should be less than endDate
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}