Template.header.rendered = function(){
    $(document).ready(function () {
        $('.ui.dropdown').dropdown();
    });
}

Template.header.events({
    'click #btnLogout' : function(e,t){
        e.preventDefault();
        if(Meteor.user()){
            Meteor.logout(function(err){
                FlowRouter.go('/');
            })
        }
    }
})