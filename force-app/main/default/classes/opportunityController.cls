public with sharing class opportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        return [SELECT StageName FROM Opportunity];
    }
}
