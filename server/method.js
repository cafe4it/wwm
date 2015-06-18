if(Meteor.isServer){
    Meteor.methods({
        createGuestUser : function(){

            return false;
        },
        createNormalUser : function(user){
            if(user){

            }
            return false;
        }
    })
}