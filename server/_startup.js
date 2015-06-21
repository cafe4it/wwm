if(Meteor.isServer){
    Meteor.startup(function(){
        Meteor.CONFIG = EJSON.parse(Assets.getText('data.json'));
        if(Meteor.users.find().count() === 0){
            var defaultAdmin = Meteor.CONFIG.admin;
            var userId = Accounts.createUser({
                username : defaultAdmin.username,
                email : defaultAdmin.email,
                password : defaultAdmin.password,
                profile : {
                    fullName : defaultAdmin.fullName
                }
            });

            Meteor.users.update({_id : userId},{
                $set :{
                    'emails.0.verified': true
                }
            });

            Roles.addUsersToRoles(userId, defaultAdmin.roles);

        }
        Meteor.onConnection(function(cb){
            Meteor.clientConnected = {
                id : cb.id,
                clientAddress : cb.clientAddress
            }
        });
    })
}