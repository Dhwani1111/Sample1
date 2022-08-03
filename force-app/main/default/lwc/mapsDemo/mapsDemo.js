import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/mapController.getAccounts'
export default class MapsDemo extends LightningElement {
    mapMarkers=[]
    markersTitle="Accounts Location"
    //get account record
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data)
            this.formatResponse(data)
        }
        if(error){
            console.error(error)
        }
    }
    //receive the data
    formatResponse(data){
        this.mapMarkers = data.map(item=>{
            return {
                location:{
                    Street:item.BillingCity || '',
                    City:item.BillingCity ||'',
                    PostalCode: item.BillingPostalCode || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || ''
                },
                icon:'utility:salesforce1',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }
    //click on the marker
    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue
    }

}