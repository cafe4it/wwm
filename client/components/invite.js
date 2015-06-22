var inviteComponent = FlowComponents.define('InviteFriends',function(props){
    this.userId = Meteor.userId();
    this.generateInviteUrl();
    this.set('id',this.userId);
});

inviteComponent.prototype.generateInviteUrl = function(){
    var params = {id : this.userId},
        path = FlowRouter.path('ShareChannel',params);
    console.log(path)
}

