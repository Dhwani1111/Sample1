public with sharing class filteringController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Title, Email from Contact];
    }
}

