Users = Meteor.users;

Users.helpers({
    isGuest : function(){
        return Roles.userIsInRole(this._id, ['guest'])
    },
    isUser : function(){
        return Roles.userIsInRole(this._is, ['user'])
    },
    isRegisteredUser : function(){
        return Roles.userIsInRole(this._is, ['user','moderator','admin'])
    },
    isModerator : function(){
        return Roles.userIsInRole(this._id, ['moderator','admin'])
    },
    isAdmin : function(){
        return Roles.userIsInRole(this._is, ['admin'])
    }
});